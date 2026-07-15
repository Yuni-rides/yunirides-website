import type { Metadata } from "next";
import CareersClient from "@/app/features/careers/components/CareersClient";

export const metadata: Metadata = {
  title: "School Driver Jobs | Yuni Rides — WA CA AZ TX IL NY",
  description:
    "Part-time school driver jobs. Earn $30–$40 per trip, paid weekly. Positions in WA, CA, AZ, TX, IL, NY & DC. Apply today.",

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
      "Per-trip pay: $30 (1–7mi), $35 (8–14mi), $40 (15–20mi), +$1/mi after 20. Paid weekly. Hiring in WA, CA, AZ, TX, IL, NY & DC.",
    url: "https://www.yunirides.com/careers",
    siteName: "Yuni Rides",
    images: [
      {
        url: "https://www.yunirides.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yuni Rides Driver Careers — $30–$40 Per Trip",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Driver Jobs | Yuni Rides Careers",
    description:
      "Part-time school driver. $30–$40 per trip, paid weekly. Hiring in WA, CA, AZ, TX, IL, NY & DC.",
    images: ["https://www.yunirides.com/images/og-image.png"],
  },
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Part-Time School Transportation Driver",
  description:
    "Drive with Yuni Rides on predictable weekday schedules. Pay is mileage-based: $30 for trips 1–7 miles, $35 for 8–14 miles, $40 for 15–20 miles, and $40 + $1 per additional mile beyond 20 miles. Paid weekly. Transport students safely to and from school. Weekends off. Background check and safety certification covered by Yuni Rides.",
  datePosted: "2026-07-15",
  validThrough: "2027-01-15",
  employmentType: "PART_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "Yuni Rides",
    sameAs: "https://www.yunirides.com",
    logo: "https://www.yunirides.com/images/og-image.png",
  },
  jobLocation: [
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "WA",
        addressCountry: "US",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "AZ",
        addressCountry: "US",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "IL",
        addressCountry: "US",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "NY",
        addressCountry: "US",
      },
    },
  ],
  applicantLocationRequirements: [
    { "@type": "State", name: "Washington" },
    { "@type": "State", name: "California" },
    { "@type": "State", name: "Arizona" },
    { "@type": "State", name: "Texas" },
    { "@type": "State", name: "Illinois" },
    { "@type": "State", name: "New York" },
    { "@type": "AdministrativeArea", name: "Washington DC" },
  ],
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: {
      "@type": "QuantitativeValue",
      minValue: 30,
      maxValue: 40,
      unitText: "PER_TRIP",
    },
  },
  jobBenefits:
    "Mileage-based pay: $30 (1–7 mi), $35 (8–14 mi), $40 (15–20 mi), $40 + $1/mi over 20 miles. Paid weekly. Signup bonus after 50 rides. Background check covered. 8-hour safety certification covered.",
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
