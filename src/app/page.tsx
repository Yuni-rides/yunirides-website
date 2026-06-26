import type { Metadata } from "next";
import HomeBanner from "@/app/features/home/components/Homebanner";
import CoreValues from "@/app/features/home/components/CoreValues";
import MapSection from "@/app/features/home/components/MapSection";
import BecomeCustomer from "@/components/shared/BecomeCustomer";
import WhyYuniRides from "@/components/shared/WhyYuniRides";
import WhyChoosing from "@/components/shared/WhyChoosing";
import StudentsSection from "@/components/shared/StudentsSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import BlogSection from "@/app/features/blog/components/BlogSection";
import VideoSection from "@/components/shared/VideoSection";


export const metadata: Metadata = {
  title:
    "Yuni Rides | Safe Student Transportation for Special Needs & School Districts",
  description:
    "Trusted student transportation for school districts. Safe, reliable rides for special needs students, McKinney-Vento youth, and general education. Serving WA, CA, AZ, TX, IL. Call 415-535-2155.",
  keywords: [
    "school transportation",
    "special needs transportation",
    "McKinney-Vento",
    "student transport",
    "IEP transportation",
    "school district transportation",
    "Yuni Rides",
  ],
  alternates: { canonical: "https://www.yunirides.com" },
  openGraph: {
    title:
      "Yuni Rides | Safe Student Transportation for Special Needs & School Districts",
    description:
      "Trusted student transportation for school districts. Safe, reliable rides for special needs students, McKinney-Vento youth, and general education.",
    url: "https://www.yunirides.com",
    siteName: "Yuni Rides",
    images: [
      {
        url: "https://www.yunirides.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yuni Rides - Safe Student Transportation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuni Rides | Safe Student Transportation",
    description:
      "Trusted student transportation for school districts across WA, CA, AZ, TX, IL.",
    images: ["https://www.yunirides.com/og-image.png"], // absolute URL
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TransportationService"],
  name: "Yuni Rides",
  description:
    "Safe, technology-driven student transportation for school districts. Specializing in special needs, McKinney-Vento, IEP-aligned, and general education transport across WA, CA, AZ, TX, and IL.",
  image: "https://www.yunirides.com/images/logo.png",
  url: "https://www.yunirides.com",
  telephone: "+1-415-535-2155",
  email: "info@yunirides.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seattle",
    addressRegion: "WA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "City", name: "Everett", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "City", name: "Tacoma", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "City", name: "Bellevue", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "City", name: "Renton", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "State", name: "California" },
    { "@type": "State", name: "Arizona" },
    { "@type": "State", name: "Texas" },
    { "@type": "State", name: "Illinois" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Student Transportation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Special Needs Student Transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "McKinney-Vento Transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IEP-Aligned Transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Education Student Transport" } },
    ],
  },
  sameAs: [
    "https://www.facebook.com/yunirides",
  ],
};


export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <HomeBanner />
      <CoreValues />
      <MapSection />
      <BecomeCustomer />
      <WhyYuniRides />
      <WhyChoosing />
      <StudentsSection />
      <TestimonialsSection />
      <BlogSection />
      <VideoSection />
    </main>
  );
}
