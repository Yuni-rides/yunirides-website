import PrivacyClient from "@/components/PrivacyClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Yunirides",
  description:
    "Read Yunirides Privacy Policy. Learn how we collect, use, and protect your personal information across our platform.",
  keywords: ["Yunirides privacy", "privacy policy", "data protection", "Yunirides legal"],
  openGraph: {
    title: "Privacy Policy | Yunirides",
    description: "Read Yunirides Privacy Policy and how we handle your data.",
    url: "https://yunirides.com/privacy-policy",
    siteName: "Yunirides",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Yunirides",
    description: "Read Yunirides Privacy Policy and how we handle your data.",
  },
  alternates: { canonical: "https://yunirides.com/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}