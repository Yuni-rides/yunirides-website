import type { Metadata } from "next";
import DriverForm from "@/components/shared/DriverForm";
import DriverCoreValues from "@/app/features/driver/components/DriverCoreValues";
import VideoSection from "@/components/shared/VideoSection";
import DriverRequirements from "@/app/features/driver/components/DriverRequirements";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import FAQSection from "@/components/shared/FaqSection";
import DriverBanner from "../features/driver/components/Driverbanner";

export const metadata: Metadata = {
  title: "Apply to Drive for Yuni Rides | Earn $35/Hour + $500 Bonus",
  description:
    "Join Yuni Rides as a part-time school driver. Earn $35/hour with predictable weekday schedules. Weekends off. Background check covered. Apply in 2 minutes.",
  alternates: { canonical: "https://www.yunirides.com/become-a-driver" },
  openGraph: {
    title: "Apply to Drive for Yuni Rides | Earn $35/Hour + $500 Bonus",
    description:
      "Join Yuni Rides as a part-time driver. Earn $35/hour with predictable weekday schedules. Weekends off.",
    url: "https://www.yunirides.com/become-a-driver",
    siteName: "Yuni Rides",
    images: [
      {
        url: "https://www.yunirides.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Drive for Yuni Rides — Earn $35/Hour",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply to Drive for Yuni Rides | Earn $35/Hour + $500 Bonus",
    description:
      "Part-time school driver. $35/hour. Weekends off. Apply in 2 minutes.",
  },
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Part-Time School Transportation Driver",
  description:
    "Drive with Yuni Rides and earn $35/hour on predictable weekday schedules. Transport students safely to and from school. Weekends off. $500 signup bonus after 50 rides. Background check and safety certification covered by Yuni Rides.",
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
      value: 35,
      unitText: "HOUR",
    },
  },
  jobBenefits:
    "$500 signup bonus after 50 rides. Background check covered. 8-hour safety certification covered.",
  qualifications:
    "Valid driver's license. 3+ years driving history. Must pass background check.",
  workHours: "Monday–Friday, mornings and afternoons. Weekends off.",
  directApply: true,
};

export default function BecomeDriverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      <DriverBanner />
      <DriverForm />
      <DriverCoreValues />
      <VideoSection label="Yuni Rides Happy CareDrivers Say" />
      <DriverRequirements />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
