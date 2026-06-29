import type { Metadata } from "next";
import CareersClient from "@/app/features/careers/components/CareersClient";

export const metadata: Metadata = {
  title: "Careers at Yuni Rides | School Transportation Driver Jobs",
  description:
    "Join Yuni Rides as a part-time school transportation driver. Earn $35/hour, weekends off. Positions available in WA, CA, AZ, TX, IL. Apply today.",
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
      "Part-time school driver. $35/hour. Weekends off. Hiring in WA, CA, AZ, TX, IL.",
    images: ["https://www.yunirides.com/og-image.png"],
  },
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Part-Time School Transportation Driver",
  description:
    "Drive with Yuni Rides on predictable weekday schedules. Pay is mileage-based: $30 for trips 1–7 miles, $35 for 8–14 miles, $40 for 15–20 miles, and $40 + $1 per additional mile beyond 20 miles. Transport students safely to and from school. Weekends off. Background check and safety certification covered by Yuni Rides.",
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
      addressRegion: "WA",
      addressLocality: "Seattle",
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
      minValue: 30,
      maxValue: 40,
      unitText: "TRIP",
    },
  },
  jobBenefits:
    "Mileage-based pay: $30 (1–7 mi), $35 (8–14 mi), $40 (15–20 mi), $40 + $1/mi over 20 miles. Signup bonus after 50 rides. Background check covered. 8-hour safety certification covered.",
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
