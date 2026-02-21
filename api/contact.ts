import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const rateLimitMap = new Map<string, { count: number; firstRequestTimestamp: number }>();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });

  const ip = req.headers['x-forwarded-for'];
  if (typeof ip === 'string') {
    const now = Date.now();
    const rateData = rateLimitMap.get(ip);
    if (rateData) {
      if (now - rateData.firstRequestTimestamp < 60000) {
        if (rateData.count >= 5) {
          return res.status(429).json({ ok: false });
        } else {
          rateData.count++;
        }
      } else {
        rateLimitMap.set(ip, { count: 1, firstRequestTimestamp: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, firstRequestTimestamp: now });
    }
  }

  try {
    const { name, email, service, date, message, privacyAccepted } = req.body || {};

    if (
      !name ||
      typeof name !== 'string' ||
      name.length > 100
    ) {
      return res.status(400).json({ ok: false });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !email ||
      typeof email !== 'string' ||
      !emailRegex.test(email)
    ) {
      return res.status(400).json({ ok: false });
    }
    if (
      !message ||
      typeof message !== 'string' ||
      message.length > 2000
    ) {
      return res.status(400).json({ ok: false });
    }
    if (privacyAccepted !== true) {
      return res.status(400).json({ ok: false });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kontaktformular" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECIPIENT,
      replyTo: emailRegex.test(email) ? email : undefined,
      subject: `Neue Anfrage – ${service || 'Allgemeine Anfrage'}`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email || '-'}`,
        `Leistung: ${service || '-'}`,
        `Wunschtermin: ${date || '-'}`,
        '',
        'Nachricht:',
        message || '-',
      ].join('\n'),
    });

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ ok: false });
  }
}