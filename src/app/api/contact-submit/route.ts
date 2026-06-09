import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, contactNumber, email, message } =
      await request.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Required fields are missing." },
        { status: 400 },
      );
    }

    const host = "smtp.gmail.com";
    const port = 465;
    const user = "yunirides1@gmail.com";
    const pass = "szay sxrj ezuc tuyx";

    const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: true,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000,
      greetingTimeout: 5000,
    });

    const mailOptions = {
      from: `"Yuni Rides Portal" <${user}>`,
      to: "info@yunirides.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #EFF2FF; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #2C3979; border-bottom: 2px solid #822C89; padding-bottom: 10px;">New General Query Leads</h2>
          <h3 style="color: #822C89; margin-top: 20px;">Sender Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 35%; color: #4A4A6A;">Full Name:</td><td style="color: #1A1A2E;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Email:</td><td style="color: #1A1A2E;">${email}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Contact Number:</td><td style="color: #1A1A2E;">${contactNumber || "Not provided"}</td></tr>
          </table>
          <h3 style="color: #822C89; margin-top: 20px;">Message / Query</h3>
          <div style="background-color: #FAF8F0; padding: 15px; border-radius: 8px; border: 1px solid #DDE2FF; color: #1A1A2E; font-size: 13px; line-height: 1.6; white-space: pre-line;">
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Contact SMTP Error: ", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to process form dispatch",
      },
      { status: 500 },
    );
  }
}
