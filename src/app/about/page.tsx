import type { Metadata } from 'next'
import AboutHero from '@/app/features/about/components/AboutHero';
import AboutWhyTrusted from '@/app/features/about/components/AboutWhyTrusted';
import AboutCoreValuesSection from '@/app/features/about/components/Aboutcorevaluesection';
import AboutMissionCards from '@/app/features/about/components/AboutMissionCards';
import FAQSection from '@/components/shared/FaqSection';

export const metadata: Metadata = {
  title: 'About Yunirides — Our Story, Mission & Team',
  description:
    'Learn about Yunirides — founded on safety and compassion. We began in Texas, California, Washington, Illinois, and Arizona and continue expanding trusted transportation nationwide.',
  alternates: { canonical: 'https://www.yunirides.com/about' },
  openGraph: {
    title: 'About Yunirides — Driven by Care, Growing with Purpose',
    description:
      'Founded on safety and compassion, Yuni Rides began in Texas, California, Washington, Illinois, and Arizona — and continues expanding trusted transportation nationwide.',
    url: 'https://www.yunirides.com/about',
    images: [{ url: 'https://www.yunirides.com/images/og-image.png', width: 1200, height: 630, alt: 'About Yunirides' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Yunirides — Our Story & Mission',
    description: 'Driven by Care. Growing with Purpose.',
    images: ['https://www.yunirides.com/images/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Yuni Rides',
  description: 'Founded on safety and compassion, Yuni Rides provides trusted transportation nationwide.',
  url: 'https://www.yunirides.com/about',
  publisher: {
    '@type': 'Organization',
    name: 'Yuni Rides',
    url: 'https://www.yunirides.com',
    logo: 'https://www.yunirides.com/images/logo.png',
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