import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DriverForm from '@/components/DriverForm';
import DriverCoreValues from '@/components/DriverCoreValues';
import VideoSection from '@/components/VideoSection';
import DriverRequirements from '@/components/DriverRequirements';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FaqSection';


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

      {/* ══════════ HERO ══════════ */}
      <section style={{
        backgroundColor: '#FAF8F0',
        padding: '4rem 3rem',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '480px',
      }}>

        {/* Lavender blob — right side */}
        <div style={{
          position: 'absolute',
          top: 0, right: 0,
          width: '60%', height: '100%',
          background: 'radial-gradient(ellipse 700px 500px at 80% 50%, #EFF2FF 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Dotted/speckle overlay right bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0, right: '5%',
          width: '45%', height: '60%',
          backgroundImage: 'radial-gradient(circle, rgba(130,44,137,0.08) 1px, transparent 1px)',
          backgroundSize: '12px 12px',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '420px 1fr',
          alignItems: 'center',
          gap: '0rem',
          minHeight: '400px',
        }}>

          {/* LEFT — Text */}
          <div>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
             fontSize: 'clamp(2.8rem, 5vw, 4rem)',
              color: '#1A1A2E',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
            }}>
              Start Your<br />
              Journey as a<br />
              <span style={{ color: '#822C89' }}>Yuni Rides</span><br />
              Driver
            </h1>

            <p style={{
              fontSize: '14px',
              color: '#4A4A6A',
              lineHeight: 1.7,
              fontFamily: 'var(--font-body)',
              marginBottom: '2rem',
              maxWidth: '300px',
            }}>
              Help families by delivering safe, caring, and dependable rides for kids.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="#become-customer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#2C3979',
                color: 'white',
                borderRadius: '10px',
                padding: '12px 28px',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
              }}>Become a Rider</Link>

              <Link href="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                color: '#1A1A2E',
                border: '1.5px solid #DDE2FF',
                borderRadius: '10px',
                padding: '12px 28px',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
              }}>Contact Us</Link>
            </div>
          </div>

          {/* RIGHT — Illustration */}
          <div style={{
            position: 'relative',
  height: '520px',        // 420 se 520 karo
  marginRight: '-3rem',   // section edge tak phailao
  marginBottom: '-4rem',  // bottom tak
          }}>
            <Image
              src="/images/become-driver-hero.png"
              alt="Yunirides drivers with purple car"
              fill
              style={{ objectFit: 'contain', objectPosition: 'center' }}
              priority
            />
          </div>

        </div>
      </section>
    <DriverForm />
    <DriverCoreValues />
    <VideoSection label="Yuni Rides Happy CareDrivers Say" />
    <DriverRequirements />
    <TestimonialsSection />
    <FAQSection />
    </>
  )
}