import type { Metadata } from 'next'
import AboutHero from '@/components/AboutHero';
import AboutWhyTrusted from '@/components/AboutWhyTrusted';
import AboutCoreValuesSection from '@/components/Aboutcorevaluesection';
import AboutMissionCards from '@/components/AboutMissionCards';
import FAQSection from '@/components/FaqSection';

export const metadata: Metadata = {
  title: 'About Yunirides — Our Story, Mission & Team',
  description:
    'Learn about Yunirides — founded on safety and compassion. We began in Texas, California, Washington, Illinois, and Arizona and continue expanding trusted transportation nationwide.',
  alternates: { canonical: 'https://yunirides.com/about' },
  openGraph: {
    title: 'About Yunirides — Driven by Care, Growing with Purpose',
    description:
      'Founded on safety and compassion, Yuni Rides began in Texas, California, Washington, Illinois, and Arizona — and continues expanding trusted transportation nationwide.',
    url: 'https://yunirides.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Yunirides' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Yunirides — Our Story & Mission',
    description: 'Driven by Care. Growing with Purpose.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Yunirides',
  description: 'Founded on safety and compassion, Yuni Rides provides trusted transportation nationwide.',
  url: 'https://yunirides.com/about',
  publisher: {
    '@type': 'Organization',
    name: 'Yunirides',
    url: 'https://yunirides.com',
    logo: 'https://yunirides.com/logo.svg',
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutHero />
      <AboutWhyTrusted />
      <AboutCoreValuesSection />
      <AboutMissionCards />
      <FAQSection />
    </>
  
  )

  

  
}