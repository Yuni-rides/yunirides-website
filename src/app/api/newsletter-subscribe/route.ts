import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email address is required." },
        { status: 400 },
      );
    }

    const port = Number(process.env.SMTP_PORT) || 587;
    const isSecure = port === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: port,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: "SSLv3",
      },
      connectionTimeout: 10000,
      greetingTimeout: 5000,
    });

    const mailOptions = {
      from: `"Yuni Rides Portal" <${process.env.SMTP_USER}>`,
      to: "info@yunirides.com",
      replyTo: email,
      subject: `New Newsletter Subscription Sign-up`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #EFF2FF; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #2C3979; border-bottom: 2px solid #822C89; padding-bottom: 10px;">New Newsletter Subscriber</h2>
          <p style="font-size: 14px; color: #1A1A2E; margin-top: 15px;">
            A new user has successfully requested to subscribe to the Yuni Rides newsletter marketing updates.
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px; background-color: #FAF8F0; border-radius: 8px; font-weight: bold; color: #4A4A6A; width: 25%;">Email Address:</td>
              <td style="padding: 10px; background-color: #FAF8F0; border-radius: 8px; color: #1A1A2E; font-size: 14px;"><strong>${email}</strong></td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Subscribed successfully!" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Newsletter Subscription Error: ", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to process subscription.",
      },
      { status: 500 },
    );
  }
}
