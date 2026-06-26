import PrivacyClient from "@/components/PrivacyClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Yuni Rides",
  description:
    "Yuni Rides Privacy Policy — learn how we protect student and family data in compliance with COPPA, FERPA, and state privacy laws.",
  alternates: { canonical: "https://www.yunirides.com/privacy-policy" },
  robots: { index: false, follow: false },
};


export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}