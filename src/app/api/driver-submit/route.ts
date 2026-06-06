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
//       vehicleType,
//       yearsExperience,
//       hasSSN,
//       hasDrivingLicense,
//       usedDrugs,
//     } = body;

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
//         ciphers: "SSLv3",
//       },
//       connectionTimeout: 10000,
//     });

//     await transporter.verify();

//     const mailOptions = {
//       from: `"Yuni Rides Driver Portal" <${process.env.SMTP_USER}>`,
//       to: "info@yunirides.com",
//       replyTo: email,
//       subject: `New Driver Application: ${fullName} (${city})`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #EFF2FF; border-radius: 12px; background-color: #ffffff;">
//           <h2 style="color: #2C3979; border-bottom: 2px solid #822C89; padding-bottom: 10px;">New Driver Application</h2>
          
//           <h3 style="color: #822C89; margin-top: 20px;">Personal Details</h3>
//           <table style="width: 100%; border-collapse: collapse;">
//             <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Full Name:</td><td style="color: #1A1A2E;">${fullName}</td></tr>
//             <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Email:</td><td style="color: #1A1A2E;">${email}</td></tr>
//             <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Contact Number:</td><td style="color: #1A1A2E;">${contactNumber}</td></tr>
//             <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">City / Town:</td><td style="color: #1A1A2E;">${city}</td></tr>
//           </table>

//           <h3 style="color: #822C89; margin-top: 20px;">Professional & Vehicle Assets</h3>
//           <table style="width: 100%; border-collapse: collapse;">
//             <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Vehicle Type:</td><td style="color: #1A1A2E;">${vehicleType}</td></tr>
//             <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Years of Experience:</td><td style="color: #1A1A2E;">${yearsExperience} Year(s)</td></tr>
//           </table>

//           <h3 style="color: #822C89; margin-top: 20px;">Legal & Background Evaluation</h3>
//           <table style="width: 100%; border-collapse: collapse;">
//             <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Has SSN/ITN:</td><td style="color: #1A1A2E;">${hasSSN ? "✅ Yes" : "❌ No"}</td></tr>
//             <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Has Driving License:</td><td style="color: #1A1A2E;">${hasDrivingLicense ? "✅ Yes" : "❌ No"}</td></tr>
//             <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Recreational Drug Use:</td><td style="color: #1A1A2E;">${usedDrugs ? "⚠️ Yes" : "✅ No, never"}</td></tr>
//           </table>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json(
//       { success: true, message: "Application submitted successfully" },
//       { status: 200 },
//     );
//   } catch (error: any) {
//     console.error("SMTP Mail Error Details: ", error);
//     return NextResponse.json(
//       {
//         success: false,
//         error: error.message || "Failed to dispatch email notification",
//       },
//       { status: 500 },
//     );
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, contactNumber, city, vehicleType, yearsExperience, hasSSN, hasDrivingLicense, usedDrugs } = body;

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
        ciphers: "SSLv3",
      },
      connectionTimeout: 10000,
    });

    await transporter.verify();

    const mailOptions = {
      from: `"Yuni Rides Driver Portal" <${user}>`,
      to: "info@yunirides.com",
      replyTo: email,
      subject: `New Driver Application: ${fullName} (${city})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #EFF2FF; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #2C3979; border-bottom: 2px solid #822C89; padding-bottom: 10px;">New Driver Application</h2>
          <h3 style="color: #822C89; margin-top: 20px;">Personal Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Full Name:</td><td style="color: #1A1A2E;">${fullName}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Email:</td><td style="color: #1A1A2E;">${email}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">Contact Number:</td><td style="color: #1A1A2E;">${contactNumber}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #4A4A6A;">City / Town:</td><td style="color: #1A1A2E;">${city}</td></tr>
          </table>
          <h3 style="color: #822C89; margin-top: 20px;">Professional & Vehicle Assets</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Vehicle Type:</td><td style="color: #1A1A2E;">${vehicleType}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Years of Experience:</td><td style="color: #1A1A2E;">${yearsExperience} Year(s)</td></tr>
          </table>
          <h3 style="color: #822C89; margin-top: 20px;">Legal & Background Evaluation</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Has SSN/ITN:</td><td style="color: #1A1A2E;">${hasSSN ? "✅ Yes" : "❌ No"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Has Driving License:</td><td style="color: #1A1A2E;">${hasDrivingLicense ? "✅ Yes" : "❌ No"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; width: 40%; color: #4A4A6A;">Recreational Drug Use:</td><td style="color: #1A1A2E;">${usedDrugs ? "⚠️ Yes" : "✅ No, never"}</td></tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Application submitted successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("SMTP Mail Error Details: ", error);
    return NextResponse.json({ success: false, error: error.message || "Failed to dispatch email notification" }, { status: 500 });
  }
}
