import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function submitToBitrix(email: string) {
  const webhookUrl = process.env.BITRIX_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("BITRIX_WEBHOOK_URL is not set");
  }

  const contactPayload = {
    fields: {
      NAME: email,
      EMAIL: [{ VALUE: email, VALUE_TYPE: "OTHER" }],
      SOURCE_ID: "WEBFORM",
      SOURCE_DESCRIPTION: "Website - Newsletter Subscribe",
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

  const dealPayload = {
    fields: {
      TITLE: `Newsletter Subscription: ${email}`,
      CONTACT_ID: contactId,
      SOURCE_ID: "WEBFORM",
      SOURCE_DESCRIPTION: "Website - Newsletter Subscribe",
      COMMENTS: `Subscribed via newsletter form with email: ${email}`,
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
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
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
    });

    const mailOptions = {
      from: `"Yuni Rides Portal" <${user}>`,
      to: "admin@yunirides.com",
      subject: `New Newsletter Subscription`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #EFF2FF; border-radius: 12px;">
          <h2 style="color: #2C3979;">New Newsletter Subscriber</h2>
          <p><strong>Email Address:</strong> ${email}</p>
        </div>
      `,
    };

    const [emailResult, bitrixResult] = await Promise.allSettled([
      transporter.sendMail(mailOptions),
      submitToBitrix(email),
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
        { success: true, message: "Subscribed successfully!" },
        { status: 200 },
      );
    }

    throw new Error("Both email and Bitrix submission failed");
  } catch (error: any) {
    console.error("Newsletter SMTP Error: ", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to process subscription",
      },
      { status: 500 },
    );
  }
}
