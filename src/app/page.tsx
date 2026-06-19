import type { Metadata } from "next";
import HomeBanner from "@/app/features/home/components/Homebanner";
import CoreValues from "@/app/features/home/components/CoreValues";
import MapSection from '@/app/features/home/components/MapSection';
import BecomeCustomer from '@/components/shared/BecomeCustomer';
import WhyYuniRides from "@/components/shared/WhyYuniRides";
import WhyChoosing from "@/components/shared/WhyChoosing";
import StudentsSection from "@/components/shared/StudentsSection";
import TestimonialsSection from '@/components/shared/TestimonialsSection';
import BlogSection from '@/app/features/blog/components/BlogSection';
import VideoSection from '@/components/shared/VideoSection';

export const metadata: Metadata = {
  title: "Yuni Rides – Technology Meets Care",
  description:
    "Technology-driven, caring transportation service trusted by families across the U.S. Safe rides for children, elderly, and medical appointments.",
  keywords: [
    "transportation",
    "safe rides",
    "children transport",
    "elderly transport",
    "Yuni Rides",
  ],
  openGraph: {
    title: "Yuni Rides – Technology Meets Care",
    description:
      "Reliable, on-time transportation that parents trust and children feel comfortable with.",
    url: "https://yunirides.com",
    siteName: "Yuni Rides",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 930,
        alt: "Yuni Rides driver assisting passenger",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuni Rides – Technology Meets Care",
    description:
      "Safe, reliable transportation trusted by families across the U.S.",
    images: ["/images/hero.png"],
  },
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
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