import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Isko lazmi add karein taake environment variable dynamically load hon
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const port = Number(process.env.SMTP_PORT) || 587;

    // Fail-safe protection check
    if (!host || !user || !pass) {
      return NextResponse.json(
        { success: false, error: "SMTP Configuration variables missing on server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: port === 465,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false,
        ciphers: "SSLv3",
      },
      connectionTimeout: 10000,
    });

    const mailOptions = {
      from: `"Yuni Rides Portal" <${user}>`,
      to: "info@yunirides.com",
      subject: `New Newsletter Subscription`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #EFF2FF; border-radius: 12px;">
          <h2 style="color: #2C3979;">New Newsletter Subscriber</h2>
          <p><strong>Email Address:</strong> ${email}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Subscribed successfully!" }, { status: 200 });

  } catch (error: any) {
    console.error("Newsletter SMTP Error: ", error);
    return NextResponse.json({ success: false, error: error.message || "Failed to process subscription" }, { status: 500 });
  }
}