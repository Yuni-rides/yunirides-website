import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import StudentsSection from '@/components/StudentsSection';
import BecomeCustomer from '@/components/BecomeCustomer';
import FAQSection from '@/components/FaqSection';

export const metadata: Metadata = {
  title: 'Our Services — Yunirides | Rides for Every Need',
  description:
    'Explore Yunirides services: school transportation, special needs rides, medical appointments, and more. Safe, reliable, and caring across the U.S.',
  alternates: { canonical: 'https://yunirides.com/services' },
  openGraph: {
    title: 'Yunirides Services — Transportation Designed Around Care, Safety & Trust',
    description: 'Reliable, technology-powered transportation services built to support children, families, schools, and healthcare communities.',
    url: 'https://yunirides.com/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Yunirides Services' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yunirides Services',
    description: 'Transportation Designed Around Care, Safety & Trust',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Yunirides Transportation Services',
  provider: { '@type': 'Organization', name: 'Yunirides', url: 'https://yunirides.com' },
  description: 'Safe, reliable transportation for children, families, schools, and healthcare communities.',
  areaServed: 'United States',
}

const services = [
  {
    title: 'School District Transportation',
    image: '/images/service-school.png',
    features: [
      'Vetted & trained drivers',
      'Reliable daily school routes',
      'Live ride tracking & streaming',
      'Special-needs accommodations',
    ],
    active: true,
  },
  {
    title: 'Healthcare & Facilities',
    image: '/images/service-healthcare.png',
    features: [
      'Trained, professional drivers',
      'On-time appointment transport',
      'Patient-first, compassionate care',
      'Secure & coordinated rides',
    ],
    active: false,
  },
  {
    title: 'Parents & Guardian',
    image: '/images/service-parents.png',
    features: [
      'Safe, child-focused transportation',
      'Real-time ride updates',
      'Trusted, background-checked drivers',
      'Clear pickup & drop-off communication',
    ],
    active: false,
  },
]

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ══════════ 1. HERO ══════════ */}
      <section style={{ backgroundColor: 'var(--yuni-bg)', padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            position: 'relative', borderRadius: '40px',
            overflow: 'hidden', height: '500px',
          }}>
            <Image src="/images/services-hero.png" alt="Yunirides driver with children" fill style={{ objectFit: 'cover' }} priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)' }} />
            <div style={{ position: 'absolute', top: '50%', left: '48px', transform: 'translateY(-60%)', zIndex: 2, maxWidth: '520px' }}>
              <h1 style={{
                fontFamily: 'var(--font-heading)', fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white',
                lineHeight: 1.15, margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}>
                Transportation<br />Designed Around Care,<br />Safety &amp; Trust
              </h1>
            </div>
            <div style={{
              position: 'absolute', bottom: '28px', left: '28px', right: '28px', zIndex: 2,
              backgroundColor: 'white', borderRadius: '16px', padding: '20px 28px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '20px', flexWrap: 'wrap', boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
            }}>
              <p style={{ fontSize: '13.5px', color: '#4A4A6A', lineHeight: 1.7, fontFamily: 'var(--font-body)', margin: 0, maxWidth: '400px' }}>
                Reliable, technology-powered transportation services built to support children, families, schools, and healthcare communities.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
                <Link href="#become-customer" style={{ display: 'inline-block', backgroundColor: 'transparent', color: '#822C89', border: '1.5px solid #822C89', borderRadius: '10px', padding: '10px 22px', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-body)', textDecoration: 'none' }}>Request a Ride</Link>
                <Link href="#become-customer" style={{ display: 'inline-block', backgroundColor: '#2C3979', color: 'white', border: 'none', borderRadius: '10px', padding: '10px 22px', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-body)', textDecoration: 'none' }}>Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 2. TRANSPORTATION SERVICES CARDS ══════════ */}
      <section style={{ backgroundColor: 'var(--yuni-bg)', padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        {/* Purple blob background */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(130,44,137,0.08) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', background: '#E5EAFF', color: '#4A4A6A',
              padding: '7px 28px', borderRadius: '9999px', fontSize: '14px',
              fontWeight: 500, fontFamily: 'var(--font-body)', marginBottom: '16px',
            }}>Our Transportation Services</span>
            <p style={{ fontSize: '15px', color: '#4A4A6A', fontFamily: 'var(--font-body)', margin: 0 }}>
              From daily school rides to specialized care transportation...
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 411px)', gap: '24px', justifyContent: 'center' }}>
            {services.map((service) => (
              <div key={service.title} style={{
                width: '411px', height: '479px',
                backgroundColor: 'white', borderRadius: '15px',
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
                boxShadow: service.active ? '0 0 0 2px #2C3979, 0 8px 32px rgba(44,57,121,0.15)' : '0 4px 20px rgba(44,57,121,0.08)',
                border: service.active ? '2px solid #2C3979' : '1px solid #EEF0FF',
                boxSizing: 'border-box',
              }}>
                <div style={{ position: 'relative', height: '200px', flexShrink: 0 }}>
                  <Image src={service.image} alt={service.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: '#1A1A2E', marginBottom: '12px' }}>{service.title}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px' }}>
                      {service.features.map((f) => (
                        <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', color: '#4A4A6A', fontFamily: 'var(--font-body)', marginBottom: '6px', lineHeight: 1.5 }}>
                          <span style={{ color: '#822C89', fontWeight: 700, fontSize: '13px', flexShrink: 0 }}>✓</span>{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="#become-customer" style={{
                    display: 'block',
                    backgroundColor: service.active ? '#2C3979' : 'transparent',
                    color: service.active ? 'white' : '#4A4A6A',
                    border: service.active ? 'none' : '1.5px solid #DDE2FF',
                    borderRadius: '10px', padding: '11px', fontSize: '13px',
                    fontWeight: 600, fontFamily: 'var(--font-body)',
                    textDecoration: 'none', textAlign: 'center',
                  }}>Get Started</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 3. STUDENTS SECTION ══════════ */}
<StudentsSection />

      {/* ══════════ 3. BECOME CUSTOMER FORM ══════════ */}
      <div id="become-customer">
        <BecomeCustomer />
      </div>
      <FAQSection />
    </>
    
  )
}