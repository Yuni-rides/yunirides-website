import type { Metadata } from "next";
import CareersClient from "@/app/features/careers/components/CareersClient";

export const metadata: Metadata = {
  title: "Careers | Yunirides – Drive Your Future Forward",
  description:
    "Join the Yunirides team. Explore open driver and corporate positions designed to give you freedom, fair earnings, and the respect you deserve.",
  keywords: [
    "Yunirides careers",
    "ride-share driver jobs",
    "driving jobs near me",
    "join Yunirides",
    "transportation jobs",
  ],
  openGraph: {
    title: "Careers | Yunirides – Drive Your Future Forward",
    description:
      "Turn every mile into opportunity. Join a driver-first platform designed to give you freedom, fair earnings, and the respect you deserve.",
    url: "https://yunirides.com/careers",
    siteName: "Yunirides",
    images: [
      {
        url: "/images/og-careers.jpg",
        width: 1200,
        height: 630,
        alt: "Yunirides Careers – Drive Your Future Forward",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Yunirides – Drive Your Future Forward",
    description:
      "Turn every mile into opportunity. Join a driver-first platform designed to give you freedom, fair earnings, and the respect you deserve.",
    images: ["/images/og-careers.jpg"],
  },
  alternates: {
    canonical: "https://yunirides.com/careers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersPage() {
  return <CareersClient />;
}