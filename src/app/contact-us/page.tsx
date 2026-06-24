import type { Metadata } from "next";
import ContactClient from "@/app/features/ContactClient";

export const metadata: Metadata = {
  title: 'Contact Yuni Rides | School Transportation Partnerships & Driver Jobs',
  description:
    'Contact Yuni Rides for school district transportation partnerships or driver applications. Serving WA, CA, AZ, TX, IL. Call 415-535-2155.',
  keywords: ["contact Yunirides", "Yunirides support", "school district transportation contact", "415-535-2155"],
  alternates: { canonical: "https://yunirides.com/contact-us" },
  openGraph: {
    title: "Contact Yuni Rides | School Transportation Partnerships & Driver Jobs",
    description:
      "Contact Yuni Rides for school district transportation partnerships or driver applications. Serving WA, CA, AZ, TX, IL.",
    url: "https://yunirides.com/contact-us",
    siteName: "Yunirides",
    images: [{ url: "/images/og-contact.jpg", width: 1200, height: 630, alt: "Contact Yunirides" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Yuni Rides",
    description: "Reach out for school district partnerships or driver applications. Call 415-535-2155.",
    images: ["/images/og-contact.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return <ContactClient />;
}