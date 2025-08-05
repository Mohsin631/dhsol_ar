// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { fullName, email, company, phone, message } = await req.json();

  try {
    console.error(fullName);
    console.error(email);
    console.error(company);
    console.error(phone);
    console.error(message);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${fullName}" <${email}>`,
      to: process.env.CONTACT_EMAIL, // Your inbox
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });
    console.log("Mail sent");
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email sending failed:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
