import type { Metadata } from "next";
import VelpBanner from "../features/velp/components/VelpBanner";

export const metadata: Metadata = {
  title: "Velp",
  description:
    "Get in touch with Yunirides. Reach out anytime and our friendly team will make sure you get the help and answers you need.",
  keywords: ["contact Yunirides", "Yunirides support", "ride service contact", "415-535-2155"],
  openGraph: {
    title: "Contact Us | Yunirides",
    description:
      "At Yuni Rides, communication matters. Reach out anytime and our friendly team will make sure you get the help and answers you need.",
    url: "https://yunirides.com",
    siteName: "Yunirides",
    images: [{ url: "/images/og-contact.jpg", width: 1200, height: 630, alt: "Contact Yunirides" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Yunirides",
    description: "Get in touch with Yunirides. We're here to help anytime.",
    images: ["/images/og-contact.jpg"],
  },
  alternates: { canonical: "https://yunirides.com" },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return <VelpBanner />;
}