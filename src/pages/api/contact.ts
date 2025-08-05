import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const { name, email, subject, message, companySize, service, agree } = req.body;

  if (!name || !email || !subject || !message || !companySize || !service || !agree) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Karachi", // change if needed
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company Size: ${companySize}
        Service: ${service}
        Message:
        ${message}
        Timestamp: ${timestamp}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 8px;">
          <div style="background-color: #3533cd; padding: 20px; text-align: center; color: white;">
            <h2 style="margin: 10px 0;">New Lead Submission @ DH Solutions</h2>
          </div>
          <div style="padding: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${name}</td></tr>
              <tr style="background-color: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Company Size:</td><td style="padding: 8px;">${companySize}</td></tr>
              <tr style="background-color: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Service:</td><td style="padding: 8px;">${service}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td><td style="padding: 8px;">${message.replace(/\n/g, "<br>")}</td></tr>
              <tr style="background-color: #f1f1f1;"><td style="padding: 8px; font-weight: bold;">Timestamp:</td><td style="padding: 8px;">${timestamp}</td></tr>
            </table>
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" style="background: #3533cd; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px;">Reply to ${name}</a>
            </div>
          </div>
          <div style="background-color: #f1f1f1; padding: 10px; text-align: center; font-size: 12px; color: #777;">
            © ${new Date().getFullYear()} DH Solutions. All rights reserved.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Message received and email sent." });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send email." });
  }
}
