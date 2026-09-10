import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

async function submitToBitrix(data: {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  city: string;
  state: string;
  message: string;
}) {
  const { firstName, lastName, contactNumber, email, city, state, message } =
    data;

  const webhookUrl = process.env.BITRIX_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("BITRIX_WEBHOOK_URL is not set");
  }

  // Step 1: Create Contact
  const contactPayload = {
    fields: {
      NAME: firstName,
      LAST_NAME: lastName,
      EMAIL: [{ VALUE: email, VALUE_TYPE: "OTHER" }],
      PHONE: [{ VALUE: contactNumber, VALUE_TYPE: "OTHER" }],
      ADDRESS_CITY: city,
      SOURCE_ID: "WEBFORM",
      SOURCE_DESCRIPTION: "Website - Contact Form",
    },
  };

  const contactRes = await fetch(`${webhookUrl}crm.contact.add.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactPayload),
  });
  const contactJson = await contactRes.json();
  if (!contactRes.ok || contactJson.error) {
    throw new Error(
      contactJson.error_description || "Bitrix contact creation failed",
    );
  }
  const contactId = contactJson.result;

  // Step 2: Create Deal linked to that Contact
  const dealPayload = {
    fields: {
      TITLE: `Get In Touch: ${firstName} ${lastName}`,
      CONTACT_ID: contactId,
      SOURCE_ID: "WEBFORM",
      SOURCE_DESCRIPTION: "Website - Contact Form",
      COMMENTS: `State: ${state}\nMessage: ${message}`,
    },
  };

  const dealRes = await fetch(`${webhookUrl}crm.deal.add.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dealPayload),
  });
  const dealJson = await dealRes.json();
  if (!dealRes.ok || dealJson.error) {
    throw new Error(
      dealJson.error_description || "Bitrix deal creation failed",
    );
  }

  return { contactId, dealId: dealJson.result };
}

export async function POST(request: Request) {
  try {
    const { firstName, lastName, contactNumber, email, city, state, message } =
      await request.json();

    if (
      !firstName ||
      !lastName ||
      !contactNumber ||
      !email ||
      !city ||
      !state ||
      !message
    ) {
      return NextResponse.json(
        { success: false, error: "Required fields are missing." },
        { status: 400 },
      );
    }

    const host = "smtp.ionos.com";
    const port = 465;
    const user = "admin@yunirides.com";
    const pass = "zkpta6hYfcdUuSW3pb9M3nH5zC9uN8Hs";

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
      to: "admin@yunirides.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #EFF2FF; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #2C3979; border-bottom: 2px solid #822C89; padding-bottom: 10px;">New General Query Leads</h2>
          <h3 style="color: #822C89; margin-top: 20px;">Sender Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 35%; color: #4A4A6A;">Full Name:</td><td style="color: #1A1A2E;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Email:</td><td style="color: #1A1A2E;">${email}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Contact Number:</td><td style="color: #1A1A2E;">${contactNumber}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">City / Town:</td><td style="color: #1A1A2E;">${city}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">State:</td><td style="color: #1A1A2E;">${state}</td></tr>
          </table>
          <h3 style="color: #822C89; margin-top: 20px;">Message / Query</h3>
          <div style="background-color: #FAF8F0; padding: 15px; border-radius: 8px; border: 1px solid #DDE2FF; color: #1A1A2E; font-size: 13px; line-height: 1.6; white-space: pre-line;">
            ${message}
          </div>
        </div>
      `,
    };

    const [emailResult, bitrixResult] = await Promise.allSettled([
      transporter.sendMail(mailOptions),
      submitToBitrix({
        firstName,
        lastName,
        contactNumber,
        email,
        city,
        state,
        message,
      }),
    ]);

    if (emailResult.status === "rejected") {
      console.error("Email dispatch failed:", emailResult.reason);
    }
    if (bitrixResult.status === "rejected") {
      console.error("Bitrix creation failed:", bitrixResult.reason);
    }

    if (
      emailResult.status === "fulfilled" ||
      bitrixResult.status === "fulfilled"
    ) {
      return NextResponse.json(
        { success: true, message: "Email sent successfully!" },
        { status: 200 },
      );
    }

    throw new Error("Both email and Bitrix submission failed");
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
