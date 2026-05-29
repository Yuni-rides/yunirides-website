import type { Metadata } from 'next'
import DriverForm from '@/components/shared/DriverForm';
import DriverCoreValues from '@/app/features/driver/components/DriverCoreValues';
import VideoSection from '@/components/shared/VideoSection';
import DriverRequirements from '@/app/features/driver/components/DriverRequirements';
import TestimonialsSection from '@/components/shared/TestimonialsSection';
import FAQSection from '@/components/shared/FaqSection';
import DriverBanner from '../features/driver/components/Driverbanner';


export const metadata: Metadata = {
  title: 'Become a Driver — Earn with Yunirides',
  description:
    'Join Yunirides as a driver. Help families by delivering safe, caring, and dependable rides for kids. Set your own hours, earn competitive pay. Apply online in minutes.',
  alternates: { canonical: 'https://yunirides.com/become-a-driver' },
  openGraph: {
    title: 'Become a Yunirides Driver — Start Your Journey Today',
    description: 'Help families by delivering safe, caring, and dependable rides for kids. Join Yunirides and earn on your schedule.',
    url: 'https://yunirides.com/become-a-driver',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Become a Yunirides Driver' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Yunirides Driver',
    description: 'Help families by delivering safe, caring, and dependable rides for kids.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Yunirides Driver',
  description: 'Help families by delivering safe, caring, and dependable rides for kids.',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Yunirides',
    url: 'https://yunirides.com',
  },
  jobLocation: {
    '@type': 'Place',
    address: { '@type': 'PostalAddress', addressCountry: 'US' },
  },
  employmentType: 'CONTRACTOR',
}

export default function BecomeDriverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    <DriverBanner/>
    <DriverForm />
    <DriverCoreValues />
    <VideoSection label="Yuni Rides Happy CareDrivers Say" />
    <DriverRequirements />
    <TestimonialsSection />
    <FAQSection />
    </>
  )
}