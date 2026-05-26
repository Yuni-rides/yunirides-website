import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import StudentsSection from '@/components/shared/StudentsSection';
import BecomeCustomer from '@/components/shared/BecomeCustomer';
import FAQSection from '@/components/shared/FaqSection';

export const metadata: Metadata = {
  title: 'Our Services — Yunirides | Rides for Every Need',
  description: 'Explore Yunirides services: school transportation, special needs rides, medical appointments, and more. Safe, reliable, and caring across the U.S.',
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

      {/* ── 1. HERO ── */}
      <section className="bg-[#FAF8F0] px-4 sm:px-6 py-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative rounded-[40px] overflow-hidden h-[400px] md:h-[500px]">
            <Image src="/images/services-hero.png" alt="Yunirides driver with children" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

            {/* Heading */}
            <div className="absolute top-1/2 left-6 md:left-12 -translate-y-[60%] z-[2] max-w-[520px]">
              <h1 className="font-heading font-extrabold text-[clamp(1.8rem,4vw,3rem)] text-white leading-[1.15] m-0 [text-shadow:0_2px_8px_rgba(0,0,0,0.3)]">
                Transportation<br />Designed Around Care,<br />Safety &amp; Trust
              </h1>
            </div>

            {/* Bottom white bar */}
            <div className="absolute bottom-4 md:bottom-7 left-4 md:left-7 right-4 md:right-7 z-[2] bg-white rounded-[16px] px-5 md:px-7 py-4 md:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_4px_24px_rgba(0,0,0,0.15)]">
              <p className="text-[13.5px] text-[#4A4A6A] leading-[1.7] font-body m-0 max-w-[400px]">
                Reliable, technology-powered transportation services built to support children, families, schools, and healthcare communities.
              </p>
              <div className="flex gap-3 shrink-0 flex-wrap">
                <Link href="#become-customer" className="btn-outline text-sm">Request a Ride</Link>
                <Link href="#become-customer" className="btn-secondary text-sm">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SERVICES CARDS ── */}
      <section className="bg-[#FAF8F0] px-4 sm:px-6 py-[5rem] relative overflow-hidden">
        {/* Purple blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-[50%] pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse, rgba(130,44,137,0.08) 0%, transparent 70%)' }} />

        <div className="max-w-[1200px] mx-auto relative z-[1]">

          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-7 rounded-full text-[14px] font-medium font-body mb-4">
              Our Transportation Services
            </span>
            <p className="text-[15px] text-[#4A4A6A] font-body m-0">
              From daily school rides to specialized care transportation...
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {services.map((service) => (
              <div
                key={service.title}
                className={`w-full max-w-[411px] rounded-[15px] overflow-hidden flex flex-col bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_36px_rgba(44,57,121,0.15)] group ${
                  service.active
                    ? 'shadow-[0_0_0_2px_#2C3979,0_8px_32px_rgba(44,57,121,0.15)] border-2 border-[#2C3979]'
                    : 'shadow-[0_4px_20px_rgba(44,57,121,0.08)] border border-[#EEF0FF]'
                }`}
              >
                {/* Image */}
                <div className="relative h-[200px] shrink-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Content */}
                <div className="p-[20px_22px] flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-[16px] text-[#1A1A2E] mb-3">
                      {service.title}
                    </h3>
                    <ul className="list-none p-0 m-0 mb-4">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[12.5px] text-[#4A4A6A] font-body mb-[6px] leading-[1.5]">
                          <span className="text-[#822C89] font-bold text-[13px] shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="#become-customer"
                    className={`block rounded-[10px] py-[11px] text-[13px] font-semibold font-body no-underline text-center transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${
                      service.active
                        ? 'bg-[#2C3979] text-white hover:bg-[#223070]'
                        : 'bg-transparent text-[#4A4A6A] border-[1.5px] border-[#DDE2FF] hover:border-[#822C89] hover:text-[#822C89]'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <StudentsSection />

     
      <div id="become-customer">
        <BecomeCustomer />
      </div>

      <FAQSection />
    </>
  )
}