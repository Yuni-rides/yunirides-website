import type { Metadata } from "next";
import TermsClient from "@/app/features/TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service | Yuni Rides",
  description:
    "Read the Yuni Rides terms of service governing our student transportation platform. Effective for school districts, families, and driver-partners.",
  alternates: { canonical: "https://www.yunirides.com/terms-and-conditions" },
  robots: { index: false, follow: false },
};


export default function TermsPage() {
  return <TermsClient />;
}