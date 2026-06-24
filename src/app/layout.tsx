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
  metadataBase: new URL("https://yunirides.com"),
  title: {
    default:
      "Yuni Rides | Safe Student Transportation for Special Needs & School Districts",
    template: "%s — Yunirides",
  },
  description:
    "Trusted student transportation for school districts. Safe, reliable rides for special needs students, McKinney-Vento youth, and general education. Serving WA, CA, AZ, TX, IL. Call 415-535-2155.",
  applicationName: "Yunirides",
  keywords: [
    "school transportation",
    "safe rides",
    "child transport",
    "special needs transportation",
    "Yunirides",
  ],
  authors: [{ name: "Yunirides Team", url: "https://yunirides.com" }],
  openGraph: {
    siteName: "Yunirides",
    locale: "en_US",
    type: "website",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Yunirides" },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Yuni Rides",
  url: "https://www.yunirides.com",
  logo: "https://www.yunirides.com/images/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/yunirides",
    "https://www.crunchbase.com/organization/yunirides",
    "https://www.facebook.com/yunirides",
    "https://www.instagram.com/yunirides",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-415-535-2155",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: ["English", "Spanish"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
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
        <Navbar />
        <main>{children}</main>
        <TawkToChat />
        <Footer />
      </body>
    </html>
  );
}
