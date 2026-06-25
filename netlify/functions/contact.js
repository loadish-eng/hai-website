import nodemailer from "nodemailer";

// Required environment variables (set these in Netlify's dashboard under
// Site settings → Environment variables — NOT in a VITE_-prefixed var,
// since those get bundled into the public client code):
//
//   GMAIL_USER          the Gmail address sending the mail (e.g. ops@hai-llc.com)
//   GMAIL_APP_PASSWORD  a 16-character Gmail "App Password" (NOT your normal
//                        Gmail password — see README for setup steps)
//
// Optional:
//   CONTACT_TO_EMAIL    where submissions get delivered (defaults to GMAIL_USER)

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: corsHeaders, body: "Method Not Allowed" };
  }

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers: corsHeaders, body: "Invalid JSON" };
  }

  const { name, email, company, useCase, message, subject } = data;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ ok: false, error: "Missing required fields (name, email, message)" }),
    };
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables");
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ ok: false, error: "Email service is not configured" }),
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailSubject = subject || `New contact form submission from ${name}`;
  const mailBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${company || "(none provided)"}`,
    `Use Case: ${useCase || "(none provided)"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"${name} (via H.A.I site)" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: mailSubject,
      text: mailBody,
    });

    return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("Email send failed:", err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ ok: false, error: "Failed to send email" }),
    };
  }
};
