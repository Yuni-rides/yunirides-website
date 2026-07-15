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
  title: "Yuni Rides | School District Transportation",
  description:
    "Safe, reliable student transportation for school districts across WA, CA, AZ, TX, IL, NY & DC. IEP, McKinney-Vento & general ed. Call 415-535-2155.",
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
    title: "Yuni Rides | School District Transportation",
    description:
      "Safe, reliable student transportation for school districts across WA, CA, AZ, TX, IL, NY & DC.",
    url: "https://www.yunirides.com",
    siteName: "Yuni Rides",
    images: [
      {
        url: "https://www.yunirides.com/images/og-image.png",
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
    images: ["https://www.yunirides.com/images/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Yuni Rides",
  alternateName: "Yunirides",
  url: "https://www.yunirides.com",
  logo: "https://www.yunirides.com/images/og-image.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-415-535-2155",
    contactType: "customer service",
    email: "info@yunirides.com",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "2261 Market St, Suite 2012",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94114",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/YuniRidesOfficial",
    "https://www.instagram.com/yuni_rides1",
    "https://www.linkedin.com/company/yunirides",
    "https://twitter.com/yunirides",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TransportationService"],
  name: "Yuni Rides",
  description:
    "Safe, technology-driven student transportation for school districts. Specializing in special needs, McKinney-Vento, IEP-aligned, and general education transport across WA, CA, AZ, TX, IL, NY & DC.",
  image: "https://www.yunirides.com/images/og-image.png",
  url: "https://www.yunirides.com",
  telephone: "+1-415-535-2155",
  email: "info@yunirides.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2261 Market St, Suite 2012",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94114",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 37.7646, longitude: -122.4304 },
  priceRange: "$$",
  areaServed: [
    { "@type": "State", name: "Washington" },
    { "@type": "State", name: "California" },
    { "@type": "State", name: "Arizona" },
    { "@type": "State", name: "Texas" },
    { "@type": "State", name: "Illinois" },
    { "@type": "State", name: "New York" },
    { "@type": "AdministrativeArea", name: "Washington DC" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Student Transportation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Special Needs Student Transportation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "McKinney-Vento Transportation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "IEP-Aligned Transportation" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General Education Student Transport",
        },
      },
    ],
  },
  sameAs: ["https://www.facebook.com/YuniRidesOfficial"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Yuni Rides",
  url: "https://www.yunirides.com",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What states does Yuni Rides serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yuni Rides provides student transportation in Washington, California, Arizona, Texas, Illinois, New York, and Washington DC.",
      },
    },
    {
      "@type": "Question",
      name: "Does Yuni Rides transport special needs students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Yuni Rides specializes in IEP-compliant transportation for students with special needs, McKinney-Vento youth, and general education students. All drivers are background-checked and trained for special needs transport.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Yuni Rides for school district transportation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +1-415-535-2155, email info@yunirides.com, or visit yunirides.com. Our headquarters is at 2261 Market St, Suite 2012, San Francisco, CA 94114.",
      },
    },
    {
      "@type": "Question",
      name: "Are Yuni Rides drivers background-checked?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every Yuni Rides driver passes a comprehensive background check, drug test, TB test, and is trained to meet IEP and IDEA requirements before transporting any student.",
      },
    },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Yuni Rides | School District Transportation",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".tldr-block", "h1"],
  },
  url: "https://www.yunirides.com",
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <div className="tldr-block sr-only">
        <p>
          <strong>Yuni Rides</strong> provides safe, GPS-tracked student
          transportation for school districts across Washington, California,
          Arizona, Texas, Illinois, New York, and DC. We specialize in
          IEP-compliant rides for special needs students, McKinney-Vento youth,
          and general education. All drivers are individually
          background-checked, drug-tested, and trained. Call{" "}
          <a href="tel:+14155352155">415-535-2155</a> or email{" "}
          <a href="mailto:info@yunirides.com">info@yunirides.com</a>.
        </p>
      </div>
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
