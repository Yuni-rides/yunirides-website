import type { Metadata } from "next";
import FaqsClient from "../features/FaqsClient";

export const metadata: Metadata = {
  title: "Yuni Rides FAQ | IEP Transport, GPS Tracking, Service Areas & More",
  description:
    "Got questions about Yuni Rides? Find answers about IEP transportation, GPS tracking, driver vetting, service areas, and pricing. Call 415-535-2155.",
  alternates: { canonical: "https://www.yunirides.com/faqs" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <FaqsClient />;
}
