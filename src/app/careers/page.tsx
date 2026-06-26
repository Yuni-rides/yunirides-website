import type { Metadata } from "next";
import CareersClient from "@/app/features/careers/components/CareersClient";

export const metadata: Metadata = {
  title: "Careers at Yuni Rides | School Transportation Driver Jobs",
  description:
    "Join Yuni Rides as a part-time school transportation driver. Earn $35/hour, weekends off, $500 signup bonus. Positions available in WA, CA, AZ, TX, IL. Apply today.",
  keywords: [
    "school transportation driver jobs",
    "student transport driver hiring",
    "special needs driver jobs",
    "part-time driver jobs Washington",
    "school driver jobs California",
    "Yuni Rides careers",
    "transportation jobs near me",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.yunirides.com/careers" },
  openGraph: {
    title: "Driver & Transportation Jobs | Yuni Rides Careers",
    description:
      "Part-time school driver positions across WA, CA, AZ, TX, IL. Earn $35/hour with predictable weekday schedules. $500 signup bonus. Weekends off.",
    url: "https://www.yunirides.com/careers",
    siteName: "Yuni Rides",
    images: [
      {
        url: "https://www.yunirides.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yuni Rides Driver Careers — Earn $35/Hour",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Driver Jobs | Yuni Rides Careers",
    description:
      "Part-time school driver. $35/hour. Weekends off. $500 bonus. Hiring in WA, CA, AZ, TX, IL.",
    images: ["https://www.yunirides.com/og-image.png"],
  },
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Part-Time School Transportation Driver",
  description:
    "Drive with Yuni Rides and earn $35/hour transporting students safely to and from school on predictable weekday schedules. $500 signup bonus after 50 rides. Background check and 8-hour safety certification covered by Yuni Rides. Weekends off.",
  datePosted: "2026-06-23",
  validThrough: "2026-12-31",
  employmentType: "PART_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "Yuni Rides",
    sameAs: "https://www.yunirides.com",
    logo: "https://www.yunirides.com/images/logo.png",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seattle",
      addressRegion: "WA",
      addressCountry: "US",
    },
  },
  applicantLocationRequirements: [
    { "@type": "State", name: "Washington" },
    { "@type": "State", name: "California" },
    { "@type": "State", name: "Arizona" },
    { "@type": "State", name: "Texas" },
    { "@type": "State", name: "Illinois" },
  ],
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: {
      "@type": "QuantitativeValue",
      value: 35,
      unitText: "HOUR",
    },
  },
  jobBenefits:
    "$500 signup bonus after 50 rides. Background check covered. 8-hour safety certification covered by employer.",
  qualifications:
    "Valid driver's license. 3+ years driving history. Must pass background check.",
  workHours: "Monday–Friday, mornings and afternoons. Weekends off.",
  directApply: true,
};

export default function CareersPage() {
    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <CareersClient />
    </>
  );
}