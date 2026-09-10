

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

async function submitToBitrix(data: any) {
  const {
    fullName,
    email,
    contactNumber,
    city,
    state,
    vehicleType,
    yearsExperience,
    hasSSN,
    hasDrivingLicense,
    usedDrugs,
    source,
  } = data;

  const webhookUrl = process.env.BITRIX_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("BITRIX_WEBHOOK_URL is not set");
  }

  // Step 1: Create Contact
  const contactPayload = {
    fields: {
      NAME: fullName,
      EMAIL: [{ VALUE: email, VALUE_TYPE: "OTHER" }],
      PHONE: [{ VALUE: contactNumber, VALUE_TYPE: "OTHER" }],
      ADDRESS_CITY: city,
      SOURCE_ID: "WEBFORM",
      SOURCE_DESCRIPTION: source || "Website - Become a Driver",
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
      TITLE: `Become A Driver: ${fullName}`,
      CONTACT_ID: contactId,
      SOURCE_ID: "WEBFORM",
      SOURCE_DESCRIPTION: source || "Website - Become a Driver",
      COMMENTS: `State: ${state}\nVehicle Type: ${vehicleType}\nExperience: ${yearsExperience} year(s)\nHas SSN: ${hasSSN ? "Yes" : "No"}\nHas Driving License: ${hasDrivingLicense ? "Yes" : "No"}\nUsed Recreational Drugs: ${usedDrugs ? "Yes" : "No"}`,
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
    const body = await request.json();
    const {
      fullName,
      email,
      contactNumber,
      city,
      state,
      vehicleType,
      yearsExperience,
      hasSSN,
      hasDrivingLicense,
      usedDrugs,
      source,
    } = body;

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

    await transporter.verify();

    const mailOptions = {
      from: `"Yuni Rides Driver Portal" <${user}>`,
      to: "admin@yunirides.com",
      replyTo: email,
      subject: `[Lead Source: ${source || "Website"}] New Driver Application: ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #EFF2FF; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #2C3979; border-bottom: 2px solid #822C89; padding-bottom: 10px;">New Driver Application</h2>
          <h3 style="color: #822C89; margin-top: 20px;">Personal Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Full Name:</td><td style="color: #1A1A2E;">${fullName}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Email:</td><td style="color: #1A1A2E;">${email}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Contact Number:</td><td style="color: #1A1A2E;">${contactNumber}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">City / Town:</td><td style="color: #1A1A2E;">${city}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">State:</td><td style="color: #1A1A2E;">${state}</td></tr>
          </table>
          <h3 style="color: #822C89; margin-top: 20px;">Professional & Vehicle Assets</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Vehicle Type:</td><td style="color: #1A1A2E;">${vehicleType}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Years of Experience:</td><td style="color: #1A1A2E;">${yearsExperience} Year(s)</td></tr>
          </table>
          <h3 style="color: #822C89; margin-top: 20px;">Legal & Background Evaluation</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Has SSN:</td><td style="color: #1A1A2E;">${hasSSN ? "✅ Yes" : "❌ No"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Has Driving License:</td><td style="color: #1A1A2E;">${hasDrivingLicense ? "✅ Yes" : "❌ No"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Recreational Drug Use:</td><td style="color: #1A1A2E;">${usedDrugs ? "⚠️ Yes" : "✅ No, never"}</td></tr>
          </table>
        </div>
      `,
    };

    const [emailResult, bitrixResult] = await Promise.allSettled([
      transporter.sendMail(mailOptions),
      submitToBitrix(body),
    ]);

    if (emailResult.status === "rejected") {
      console.error("Email dispatch failed:", emailResult.reason);
    }
    if (bitrixResult.status === "rejected") {
      console.error("Bitrix lead creation failed:", bitrixResult.reason);
    }

    // if (
    //   emailResult.status === "fulfilled" ||
    //   bitrixResult.status === "fulfilled"
    // ) {
    //   return NextResponse.json(
    //     { success: true, message: "Application submitted successfully" },
    //     { status: 200 },
    //   );
    // }

    if (
      emailResult.status === "fulfilled" ||
      bitrixResult.status === "fulfilled"
    ) {
      return NextResponse.json(
        {
          success: true,
          message: "Application submitted successfully",
          debug: {
            emailStatus: emailResult.status,
            bitrixStatus: bitrixResult.status,
            bitrixResult:
              bitrixResult.status === "fulfilled" ? bitrixResult.value : null,
            bitrixError:
              bitrixResult.status === "rejected"
                ? String(bitrixResult.reason)
                : null,
          },
        },
        { status: 200 },
      );
    }

    throw new Error("Both email and Bitrix submission failed");
  } catch (error: any) {
    console.error("Submission Error Details: ", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to dispatch email notification",
      },
      { status: 500 },
    );
  }
}
