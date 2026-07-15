import type { Metadata } from "next";
import { Nunito, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TawkToChat from "@/components/TawkToChat";
import Script from "next/script";

const plusJakarta = Nunito({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "300"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "300"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yunirides.com"),
  title: {
    default: "Yuni Rides | School District Transportation",
    template: "%s | Yuni Rides",
  },
  description:
    "Safe, reliable student transportation for school districts across WA, CA, AZ, TX, IL, NY & DC. IEP, McKinney-Vento & general ed. Call 415-535-2155.",
  applicationName: "Yuni Rides",
  keywords: [
    "school transportation",
    "special needs student transportation",
    "McKinney-Vento transportation",
    "IEP transportation services",
    "school district transportation vendor",
    "student transport Washington",
    "child transport California",
    "safe student rides",
    "Yuni Rides",
  ],
  authors: [{ name: "Yuni Rides", url: "https://www.yunirides.com" }],
  openGraph: {
    siteName: "Yuni Rides",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.yunirides.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yuni Rides - Safe Student Transportation for School Districts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "apple-itunes-app": "app-id=6759739662",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TJ95QBCL');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1535443448320921');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="bg-yuni-page antialiased overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJ95QBCL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1535443448320921&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
        <Navbar />
        <main>{children}</main>
        <TawkToChat />
        <Footer />
      </body>
    </html>
  );
}
