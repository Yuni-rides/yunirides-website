import type { Metadata } from "next";
import TermsClient from "@/app/features/TermsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions | Yunirides",
  description:
    "Read Yunirides Terms & Conditions. Learn about our platform usage policies, driver and rider responsibilities, payment terms, and more.",
  keywords: ["Yunirides terms", "terms and conditions", "ride service policy", "Yunirides legal"],
  openGraph: {
    title: "Terms & Conditions | Yunirides",
    description: "Read Yunirides Terms & Conditions and platform usage policies.",
    url: "https://yunirides.com/terms-and-conditions",
    siteName: "Yunirides",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Yunirides",
    description: "Read Yunirides Terms & Conditions and platform usage policies.",
  },
  alternates: { canonical: "https://yunirides.com/terms-and-conditions" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <TermsClient />;
}