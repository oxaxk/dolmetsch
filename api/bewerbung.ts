import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    vorname,
    nachname,
    geburtsdatum,
    strasse,
    plzOrt,
    telefon,
    email,
    steuerId,
    sprachen,
    hochschule,
  } = req.body;

  if (!vorname || !nachname || !email || !telefon || !plzOrt || !sprachen) {
    return res.status(400).json({ message: "Pflichtfelder fehlen" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Website Bewerbung" <${process.env.SMTP_USER}>`,
    to: "giorgi.dolmetscher@gmail.com",
    subject: "Neue Bewerbung",
    html: `
      <h2>Neue Bewerbung</h2>
      <p><strong>Name:</strong> ${vorname} ${nachname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${telefon}</p>
      <p><strong>PLZ/Ort:</strong> ${plzOrt}</p>
      <p><strong>Geburtsdatum:</strong> ${geburtsdatum}</p>
      <p><strong>Straße:</strong> ${strasse}</p>
      <p><strong>Steuer-ID:</strong> ${steuerId}</p>
      <p><strong>Sprachen:</strong> ${sprachen}</p>
      <p><strong>Hochschule:</strong> ${hochschule}</p>
    `,
  });

  return res.status(200).json({ success: true });
}