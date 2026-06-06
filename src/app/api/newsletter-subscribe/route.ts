// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// // Next.js ko force karein ke build optimization cache use na kare
// export const dynamic = "force-dynamic";
// export const revalidate = 0;

// export async function POST(request: Request) {
//   try {
//     const { email } = await request.json();

//     if (!email) {
//       return NextResponse.json(
//         { success: false, error: "Email is required." },
//         { status: 400 },
//       );
//     }

//     // Yahan hum hardcoded fallbacks de rahe hain taake env load na bhi ho toh crash na ho
//     const host = process.env.SMTP_HOST || "mail.yunirides.com";
//     const user = process.env.SMTP_USER || "info@yunirides.com";
//     const port = Number(process.env.SMTP_PORT) || 587;

//     // Password secure rehna chahiye, isko hum target kar rahe hain
//     const pass = process.env.SMTP_PASS;

//     // Error message ko detail kar dete hain taake pata chale kaunsa variable miss ho raha hai
//     if (!pass) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: `SMTP Configuration missing on server. Host: ${host} | User: ${user} | Pass Present: ${!!pass}`,
//         },
//         { status: 500 },
//       );
//     }

//     const transporter = nodemailer.createTransport({
//       host: host,
//       port: port,
//       secure: port === 465, // Agar 587 hai toh false rahega
//       auth: { user, pass },
//       tls: {
//         rejectUnauthorized: false,
//         ciphers: "SSLv3",
//       },
//       connectionTimeout: 10000,
//     });

//     const mailOptions = {
//       from: `"Yuni Rides Portal" <${user}>`,
//       to: "info@yunirides.com",
//       subject: `New Newsletter Subscription`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #EFF2FF; border-radius: 12px;">
//           <h2 style="color: #2C3979;">New Newsletter Subscriber</h2>
//           <p><strong>Email Address:</strong> ${email}</p>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     return NextResponse.json(
//       { success: true, message: "Subscribed successfully!" },
//       { status: 200 },
//     );
//   } catch (error: any) {
//     console.error("Newsletter SMTP Error: ", error);
//     return NextResponse.json(
//       {
//         success: false,
//         error: error.message || "Failed to process subscription",
//       },
//       { status: 500 },
//     );
//   }
// }


import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required." }, { status: 400 });
    }

    const host = "smtp.gmail.com";
    const port = 465;
    const user = "shafyhussain909@gmail.com";
    const pass = "yzhv jfqm aqwi pyot"; // <-- Apna 16-digit password yahan likhein

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
