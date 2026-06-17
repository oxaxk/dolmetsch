import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

type BewerbungBody = {
  vorname?: string;
  nachname?: string;
  geburtsdatum?: string;
  strasse?: string;
  plzOrt?: string;
  telefon?: string;
  email?: string;
  sprachen?: string;
  hochschule?: string;
  consent?: boolean;
  company?: string;
};

const RATE = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clampText(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  return trimmed.length > max ? trimmed.slice(0, max) : trimmed;
}

function getClientIp(req: VercelRequest) {
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string" && xf.length) return xf.split(",")[0].trim();
  if (Array.isArray(xf) && xf[0]) return xf[0].split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!req.headers["content-type"]?.includes("application/json")) {
    return res.status(400).json({ message: "Invalid content type" });
  }

  const body = (req.body || {}) as BewerbungBody;

  if (body.company && String(body.company).trim().length > 0) {
    return res.status(200).json({ success: true });
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const bucket = (RATE.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (bucket.length >= MAX_PER_WINDOW) {
    RATE.set(ip, bucket);
    return res.status(429).json({ message: "Too many requests" });
  }
  bucket.push(now);
  RATE.set(ip, bucket);

  const vorname = clampText(body.vorname, 120);
  const nachname = clampText(body.nachname, 120);
  const geburtsdatum = clampText(body.geburtsdatum, 40);
  const strasse = clampText(body.strasse, 180);
  const plzOrt = clampText(body.plzOrt, 160);
  const telefon = clampText(body.telefon, 80);
  const email = clampText(body.email, 180);
  const sprachen = clampText(body.sprachen, 1000);
  const hochschule = clampText(body.hochschule, 180);

  if (!vorname || !nachname || !email || !telefon || !plzOrt || !sprachen) {
    return res.status(400).json({ message: "Pflichtfelder fehlen" });
  }

  if (body.consent !== true) {
    return res.status(400).json({ message: "Einwilligung erforderlich" });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Ungueltige E-Mail" });
  }

  const { SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_RECIPIENT } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_RECIPIENT) {
    return res.status(500).json({ message: "SMTP nicht konfiguriert" });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Website Bewerbung" <${SMTP_USER}>`,
    to: CONTACT_RECIPIENT,
    replyTo: email,
    subject: "Neue Bewerbung",
    html: `
      <h2>Neue Bewerbung</h2>
      <p><strong>Name:</strong> ${escapeHtml(vorname)} ${escapeHtml(nachname)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(telefon)}</p>
      <p><strong>PLZ/Ort:</strong> ${escapeHtml(plzOrt)}</p>
      <p><strong>Geburtsdatum:</strong> ${escapeHtml(geburtsdatum || "-")}</p>
      <p><strong>Straße:</strong> ${escapeHtml(strasse || "-")}</p>
      <p><strong>Sprachen:</strong> ${escapeHtml(sprachen)}</p>
      <p><strong>Hochschule:</strong> ${escapeHtml(hochschule || "-")}</p>
      <p><strong>Datenschutz-Einwilligung:</strong> Ja</p>
    `,
  });

  return res.status(200).json({ success: true });
}
