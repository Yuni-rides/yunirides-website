// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const {
//       fullName,
//       email,
//       contactNumber,
//       city,
//       childFirstName,
//       age,
//       numberOfChildren,
//       specialNeeds,
//     } = body;

//     if (!fullName || !email || !contactNumber || !city) {
//       return NextResponse.json(
//         { success: false, error: "Required fields are missing." },
//         { status: 400 }
//       );
//     }

//     const port = Number(process.env.SMTP_PORT) || 587;
//     const isSecure = port === 465;

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: port,
//       secure: isSecure,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false,
//         ciphers: 'SSLv3'
//       },
//       connectionTimeout: 10000,
//     });

//     const mailOptions = {
//       from: `"Yuni Rides Portal" <${process.env.SMTP_USER}>`,
//       to: "info@yunirides.com", 
//       replyTo: email, 
//       subject: `New Customer Inquiry: ${fullName} (${city})`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #EFF2FF; border-radius: 12px; background-color: #ffffff;">
//           <h2 style="color: #2C3979; border-bottom: 2px solid #822C89; padding-bottom: 10px;">New Ride Inquiry Leads</h2>
          
//           <h3 style="color: #822C89; margin-top: 20px;">Parent / Guardian Details</h3>
//           <table style="width: 100%; border-collapse: collapse;">
//             <tr><td style="padding: 6px 0; font-weight: bold; width: 45%; color: #4A4A6A;">Full Name:</td><td style="color: #1A1A2E;">${fullName}</td></tr>
//             <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Email:</td><td style="color: #1A1A2E;">${email}</td></tr>
//             <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Contact Number:</td><td style="color: #1A1A2E;">${contactNumber}</td></tr>
//             <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">City / Town:</td><td style="color: #1A1A2E;">${city}</td></tr>
//           </table>

//           <h3 style="color: #822C89; margin-top: 20px;">Child & Transport Specifics</h3>
//           <table style="width: 100%; border-collapse: collapse;">
//             <tr><td style="padding: 6px 0; font-weight: bold; width: 45%; color: #4A4A6A;">Child's First Name:</td><td style="color: #1A1A2E;">${childFirstName || "Not Provided"}</td></tr>
//             <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Age:</td><td style="color: #1A1A2E;">${age || "N/A"}</td></tr>
//             <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Children Needing Transport:</td><td style="color: #1A1A2E;">${numberOfChildren || "1"}</td></tr>
//           </table>

//           <h3 style="color: #822C89; margin-top: 20px;">Care & Requirements</h3>
//           <div style="background-color: #FAF8F0; padding: 12px; border-radius: 8px; border: 1px solid #DDE2FF; color: #1A1A2E; font-size: 13px; line-height: 1.6;">
//             ${specialNeeds ? specialNeeds.replace(/\n/g, "<br/>") : "No custom special needs or medical requirements specified."}
//           </div>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true, message: "Inquiry forwarded successfully" }, { status: 200 });
//   } catch (error: any) {
//     console.error("Customer SMTP Error: ", error);
//     return NextResponse.json(
//       { success: false, error: error.message || "Failed to process form dispatch" }, 
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, contactNumber, city, childFirstName, age, numberOfChildren, specialNeeds } = body;

    if (!fullName || !email || !contactNumber || !city) {
      return NextResponse.json({ success: false, error: "Required fields are missing." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const port = Number(process.env.SMTP_PORT) || 587;

    if (!host || !user || !pass) {
      return NextResponse.json(
        { success: false, error: `Configuration Error: Vercel missing variables. Host present: ${!!host}` },
        { status: 500 }
      );
    }

    const isSecure = port === 465;

    const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: isSecure,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false,
        ciphers: 'SSLv3'
      },
      connectionTimeout: 10000,
    });

    const mailOptions = {
      from: `"Yuni Rides Portal" <${user}>`,
      to: "info@yunirides.com", 
      replyTo: email, 
      subject: `New Customer Inquiry: ${fullName} (${city})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #EFF2FF; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #2C3979; border-bottom: 2px solid #822C89; padding-bottom: 10px;">New Ride Inquiry Leads</h2>
          <h3 style="color: #822C89; margin-top: 20px;">Parent / Guardian Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 45%; color: #4A4A6A;">Full Name:</td><td style="color: #1A1A2E;">${fullName}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Email:</td><td style="color: #1A1A2E;">${email}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Contact Number:</td><td style="color: #1A1A2E;">${contactNumber}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">City / Town:</td><td style="color: #1A1A2E;">${city}</td></tr>
          </table>
          <h3 style="color: #822C89; margin-top: 20px;">Child & Transport Specifics</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 45%; color: #4A4A6A;">Child's First Name:</td><td style="color: #1A1A2E;">${childFirstName || "Not Provided"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Age:</td><td style="color: #1A1A2E;">${age || "N/A"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Children Needing Transport:</td><td style="color: #1A1A2E;">${numberOfChildren || "1"}</td></tr>
          </table>
          <h3 style="color: #822C89; margin-top: 20px;">Care & Requirements</h3>
          <div style="background-color: #FAF8F0; padding: 12px; border-radius: 8px; border: 1px solid #DDE2FF; color: #1A1A2E; font-size: 13px; line-height: 1.6;">
            ${specialNeeds ? specialNeeds.replace(/\n/g, "<br/>") : "No custom special needs or medical requirements specified."}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Inquiry forwarded successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Customer SMTP Error: ", error);
    return NextResponse.json({ success: false, error: error.message || "Failed to process form dispatch" }, { status: 500 });
  }
}