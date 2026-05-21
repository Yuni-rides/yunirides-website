import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Yunirides — Safe, Reliable School Transportation',
  description:
    'Technology-driven, caring transportation service trusted by families across the U.S. Book a safe ride or become a driver today.',
  alternates: { canonical: 'https://yunirides.com' },
  openGraph: {
    title: 'Yunirides — Safe, Reliable School Transportation',
    description: 'Technology-driven, caring transportation trusted by families across the U.S.',
    url: 'https://yunirides.com',
    type: 'website',
  },
}

const coreValues = [
  {
    title: 'Safety First',
    description: 'The safety of the transport is our highest priority. Every journey is handled with the utmost caution, adhering to strict safety protocols and utilizing the latest technology to ensure that child is in safe hands.',
    image: '/images/safety.png',
    purple: false,
  },
  {
    title: 'Trust',
    description: 'We understand the responsibility that comes with transporting children. We strive to build a strong, trusting relationship with families and communities by consistently delivering on our promises of reliability and care.',
    image: '/images/trust.png',
    purple: true,
  },
  {
    title: 'Care and Compassion',
    description: 'We know that every child is unique, and our drivers and staff are trained to provide transportation with care, understanding, and compassion.',
    image: '/images/care.png',
    purple: false,
  },
  {
    title: 'Reliability',
    description: "Families depend on us to be on time, every time. Whether it's for school, appointments, or other commitments, we ensure that our transportation are dependable and seamless.",
    image: '/images/reliability.png',
    purple: true,
  },
  {
    title: 'Integrity',
    description: 'We conduct our business with honesty and transparency. From our drivers to our operational staff, every member of Yuni Rides is committed to upholding the highest ethical standards.',
    image: '/images/integrity.png',
    purple: false,
  },
  {
    title: 'Professionalism',
    description: 'Our team of drivers and support staff are highly trained professionals who are dedicated to providing the best possible service.',
    image: '/images/professionalism.png',
    purple: true,
  },
]

const services = [
  { title: 'Mckinney-Vento &\nFoster Youth',        image: '/images/service1.png', active: true },
  { title: 'Youth with special needs',               image: '/images/service2.png', active: false },
  { title: 'Continuing technical education',         image: '/images/service3.png', active: true },
  { title: 'General education',                      image: '/images/service4.png', active: false },
]

const whyChoose = [
  {
    title: 'School Districts:',
    description: 'School districts trust Yuni Rides for consistent, dependable transportation solutions that put student safety and well-being first. Our streamlined operations, transparent reporting, and strong commitment to inclusive and special-needs transportation—powered by innovative technology—make us a trusted partner in supporting student success.',
    image: '/images/school.png',
  },
  {
    title: 'Hospitals & Healthcare Facilities:',
    description: 'Hospitals and healthcare facilities trust Yuni Rides to provide safe, reliable, and compassionate transportation for patients and families. We support medical appointments, therapy sessions, and specialized care needs with professional drivers, strict safety standards, and technology-enabled coordination.',
    image: '/images/hospital.png',
  },
  {
    title: 'Parents, Students & Guardians.',
    description: 'Yuni Rides gives parents and guardians confidence through safe, transparent, and child-focused transportation—every ride, every day.',
    image: '/images/parents.png',
  },
]

const testimonials = [
  {
    name: 'Adam',
    rating: 4.5,
    text: 'Yuni Rides has been incredibly reliable and caring. Knowing my family member is always safe and on time gives me complete peace of mind.',
    image: '/images/adam.png',
    active: false,
  },
  {
    name: 'Jessica',
    rating: 4.5,
    text: '"Always on time with caring drivers. I trust Yuni Rides completely."',
    image: '/images/jessica.png',
    active: true,
  },
  {
    name: 'Brenda',
    rating: 4.5,
    text: 'Yuni Rides has been incredibly reliable and caring. Knowing my family member is always safe and on time gives me complete peace of mind.',
    image: '/images/brenda.png',
    active: false,
  },
]

const blogPosts = [
  {
    title: 'Building Trust Through Safe Student Transportation',
    date: '12/1/2026',
    excerpt: 'Discover how Yuni Rides prioritizes safety, care, and reliability....',
    image: '/images/blog1.png',
    slug: 'building-trust-safe-student-transportation',
  },
  {
    title: 'Caring Transportation for Every Stage of Life',
    date: '12/1/2026',
    excerpt: 'From children to seniors, Yuni Rides delivers safe, respectful....',
    image: '/images/blog2.png',
    slug: 'caring-transportation-every-stage',
  },
  {
    title: 'How Technology Makes Student Transportation Safer',
    date: '12/1/2026',
    excerpt: 'Explore how real-time tracking, clear communication, and smart....',
    image: '/images/blog3.png',
    slug: 'technology-student-transportation-safer',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: 'Yunirides', url: 'https://yunirides.com', telephone: '+14155352155' },
    { '@type': 'WebSite', url: 'https://yunirides.com', name: 'Yunirides' },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ══════════ 1. HERO ══════════ */}
      <section style={{ backgroundColor: 'var(--yuni-bg)', padding: '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            backgroundColor: 'var(--yuni-lavender-bg)',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: '400px',
            position: 'relative',
          }}>
            {/* Left */}
            <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1 }}>
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                color: 'var(--yuni-navy)',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}>
                Technology meets care - We transport the future
              </h1>
              <p style={{ color: 'var(--yuni-text-mid)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Technology-driven, caring transportation service trusted by families across the U.S.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link href="/become-a-driver" className="btn-primary">Become A Driver</Link>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  backgroundColor: 'var(--yuni-navy)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 700, fontSize: '1.1rem',
                }}>Y</div>
              </div>
              {/* Dots */}
              <div style={{ display: 'flex', gap: '8px', marginTop: '2rem' }}>
                {[0,1,2,3].map(i => (
                  <div key={i} style={{
                    width: i === 0 ? '24px' : '8px', height: '8px', borderRadius: '9999px',
                    backgroundColor: i === 0 ? 'var(--yuni-navy)' : 'var(--yuni-border)',
                  }} />
                ))}
              </div>
            </div>
            {/* Right image */}
            <div style={{ position: 'relative', minHeight: '350px' }}>
              <Image src="/images/hero.png" alt="Yunirides driver helping passenger" fill style={{ objectFit: 'cover' }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 2. CORE VALUES ══════════ */}
      <section style={{ backgroundColor: 'var(--yuni-bg)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">About us</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--yuni-navy)', fontWeight: 700, fontSize: '2rem', display: 'block' }}>
              About Our Core Values
            </h2>
            <p style={{ color: 'var(--yuni-text-mid)', fontSize: '0.9rem', maxWidth: '480px', margin: '0.75rem auto 0' }}>
              The principles that guide every journey, every child, and every family we serve.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {coreValues.map((value, i) => (
              <div key={value.title} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                alignItems: 'center',
                direction: i % 2 === 1 ? 'rtl' : 'ltr',
              }}>
                {/* Text card */}
                <div style={{ direction: 'ltr' }}>
                  <div style={{
                    backgroundColor: value.purple ? 'var(--yuni-purple)' : 'var(--yuni-white)',
                    borderRadius: '1.25rem',
                    padding: '2rem',
                    boxShadow: '0 4px 20px rgba(44,57,121,0.08)',
                  }}>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      color: value.purple ? 'white' : 'var(--yuni-text-dark)',
                      marginBottom: '0.75rem',
                    }}>{value.title}</h3>
                    <p style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.7,
                      color: value.purple ? 'rgba(255,255,255,0.85)' : 'var(--yuni-text-mid)',
                      marginBottom: '1.25rem',
                    }}>{value.description}</p>
                    <button style={{
                      padding: '0.4rem 1.25rem',
                      borderRadius: '0.5rem',
                      border: `1.5px solid ${value.purple ? 'rgba(255,255,255,0.4)' : 'var(--yuni-border)'}`,
                      backgroundColor: 'transparent',
                      color: value.purple ? 'white' : 'var(--yuni-text-dark)',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                    }}>See More</button>
                  </div>
                </div>
                {/* Image */}
                <div style={{ direction: 'ltr' }}>
                  <div style={{ position: 'relative', height: '260px', borderRadius: '1.25rem', overflow: 'hidden' }}>
                    <Image src={value.image} alt={value.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 3. SERVICES ══════════ */}
      <section style={{ backgroundColor: 'var(--yuni-lavender-bg)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Our Services</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--yuni-navy)', fontWeight: 700, fontSize: '2rem' }}>
              Areas we Serve in
            </h2>
            <p style={{ color: 'var(--yuni-text-mid)', fontSize: '0.9rem', maxWidth: '560px', margin: '0.75rem auto 0' }}>
              From fleet maintenance and routing logistics to onboard bus technologies that keep everyone safe, we deliver care with every practice.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {services.map((service) => (
              <div key={service.title} style={{
                backgroundColor: service.active ? 'var(--yuni-purple)' : 'var(--yuni-card-bg)',
                borderRadius: '1.25rem',
                padding: '1.5rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                minHeight: '200px',
                gap: '0.75rem',
              }}>
                <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                  <Image src={service.image} alt={service.title} fill style={{ objectFit: 'contain' }} />
                </div>
                <p style={{
                  textAlign: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  color: service.active ? 'white' : 'var(--yuni-text-dark)',
                  whiteSpace: 'pre-line',
                  lineHeight: 1.4,
                }}>{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 4. US MAP ══════════ */}
      <section style={{ backgroundColor: 'var(--yuni-bg)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', height: '380px' }}>
              <Image src="/images/us-map.png" alt="Yunirides US service areas" fill style={{ objectFit: 'contain' }} />
            </div>
            <div style={{
              backgroundColor: 'var(--yuni-card-bg)',
              borderRadius: '1.25rem',
              padding: '2rem',
            }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--yuni-navy)', marginBottom: '1rem', fontSize: '1.2rem' }}>
                Washington
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.3rem 2rem', marginBottom: '1.5rem' }}>
                {['Everett','Lynwood','Edmonds','Shoreline','Redmond','Bellevue','Seattle','Renton','Tukwila','Kent','Federal Way','Tacoma'].map(city => (
                  <p key={city} style={{ fontSize: '0.875rem', color: 'var(--yuni-text-mid)' }}>• {city}</p>
                ))}
              </div>
              <button className="btn-outline">See More</button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 5. BECOME A CUSTOMER ══════════ */}
      <section style={{ backgroundColor: 'var(--yuni-lavender-bg)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-label">Become A Customer</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '3rem' }}>
            <div style={{ position: 'relative', height: '320px' }}>
              <Image src="/images/driver-illustration.png" alt="Yunirides driver" fill style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--yuni-navy)', fontSize: '1.8rem', marginBottom: '1rem' }}>
                Technology meets care - We transport the future
              </h2>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--yuni-text-mid)' }}>
                At Yuni Rides, we are committed to providing top-tier, dependable transportation services designed specifically for children. With a focus on safety, Care, and professionalism, we take pride in offering a service that families and communities can trust.
              </p>
            </div>
          </div>

          {/* Form */}
          <div style={{
            backgroundColor: 'var(--yuni-white)',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            maxWidth: '780px',
            margin: '0 auto',
            boxShadow: '0 4px 24px rgba(44,57,121,0.08)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--yuni-navy)', fontSize: '1.3rem' }}>Start Your Journey</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--yuni-text-mid)', marginTop: '0.25rem' }}>
                  Join Yuni Rides and drive change with us! Earn great pay while making a meaningful impact in the lives of disabled children.
                </p>
              </div>
              <span style={{
                backgroundColor: 'var(--yuni-card-bg)', color: 'var(--yuni-text-mid)',
                padding: '0.5rem 1rem', borderRadius: '0.75rem', fontSize: '0.85rem', fontWeight: 500,
              }}>Parent / Guardian</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              {['Full Name', 'Email', 'Contact Number', 'Enter your city or town name.'].map(label => (
                <div key={label} style={{ position: 'relative' }}>
                  <label style={{ position: 'absolute', top: '8px', left: '12px', fontSize: '11px', color: 'var(--yuni-text-light)', zIndex: 1 }}>{label}</label>
                  <input type="text" style={{
                    width: '100%', paddingTop: '28px', paddingBottom: '8px', paddingLeft: '12px', paddingRight: '12px',
                    borderRadius: '0.5rem', border: '1px solid var(--yuni-border)',
                    fontSize: '0.875rem', outline: 'none', color: 'var(--yuni-text-dark)', backgroundColor: 'white',
                  }} />
                </div>
              ))}
            </div>

            <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--yuni-navy)', marginBottom: '0.75rem' }}>Child Information</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              {["Child's First Name", 'Age'].map(label => (
                <div key={label} style={{ position: 'relative' }}>
                  <label style={{ position: 'absolute', top: '8px', left: '12px', fontSize: '11px', color: 'var(--yuni-text-light)', zIndex: 1 }}>{label}</label>
                  <input type="text" style={{
                    width: '100%', paddingTop: '28px', paddingBottom: '8px', paddingLeft: '12px', paddingRight: '12px',
                    borderRadius: '0.5rem', border: '1px solid var(--yuni-border)',
                    fontSize: '0.875rem', outline: 'none', color: 'var(--yuni-text-dark)', backgroundColor: 'white',
                  }} />
                </div>
              ))}
            </div>
            <div style={{ position: 'relative', marginBottom: '1rem' }}>
              <label style={{ position: 'absolute', top: '8px', left: '12px', fontSize: '11px', color: 'var(--yuni-text-light)', zIndex: 1 }}>Number of Children Needing Transport</label>
              <input type="number" style={{
                width: '50%', paddingTop: '28px', paddingBottom: '8px', paddingLeft: '12px', paddingRight: '12px',
                borderRadius: '0.5rem', border: '1px solid var(--yuni-border)',
                fontSize: '0.875rem', outline: 'none', color: 'var(--yuni-text-dark)', backgroundColor: 'white',
              }} />
            </div>
            <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
              <label style={{ position: 'absolute', top: '8px', left: '12px', fontSize: '11px', color: 'var(--yuni-text-light)', zIndex: 1 }}>Special Needs or Care Requirements (Optional)</label>
              <textarea rows={3} style={{
                width: '100%', paddingTop: '28px', paddingBottom: '8px', paddingLeft: '12px', paddingRight: '12px',
                borderRadius: '0.5rem', border: '1px solid var(--yuni-border)',
                fontSize: '0.875rem', outline: 'none', resize: 'none', color: 'var(--yuni-text-dark)', backgroundColor: 'white',
              }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn-secondary" style={{ padding: '0.625rem 2.5rem' }}>Submit</button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 6. WHY YUNI RIDES ══════════ */}
      <section style={{ backgroundColor: 'var(--yuni-bg)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span className="section-label">Why Yuni Rides</span>
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--yuni-text-mid)', maxWidth: '560px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
            Choosing Yuni Rides means choosing a service that is built on the value of safety, trust, and care. Every driver is carefully vetted, trained, and committed to delivering the highest standard of service.
          </p>

          {/* Purple promo banner */}
          <div style={{
            backgroundColor: 'var(--yuni-purple)',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: '2rem',
            alignItems: 'center',
            marginBottom: '3rem',
          }}>
            <div style={{ position: 'relative', height: '200px' }}>
              <Image src="/images/promo-illustration.png" alt="Yunirides care" fill style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'white', fontSize: '1.6rem', marginBottom: '1rem', lineHeight: 1.3 }}>
                We taking pride to be helping hand with the love and care
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                At Yuni Rides, we take great pride in being a helping hand to our communities, offering transportation services with the love and care that every child deserves.
              </p>
              <button style={{
                padding: '0.6rem 1.5rem', borderRadius: '0.5rem',
                border: '1.5px solid rgba(255,255,255,0.4)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer',
              }}>Join Us</button>
            </div>
          </div>

          {/* Why choosing label */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-label">
              Why choosing <strong style={{ color: 'var(--yuni-purple)' }}>&nbsp;Yuni Ride</strong>
            </span>
          </div>

          {/* Olive cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {whyChoose.map((item, i) => (
              <div key={item.title} style={{
                backgroundColor: '#C8D4A8',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '200px 1fr' : '1fr 200px',
                alignItems: 'stretch',
              }}>
                {i % 2 === 0 ? (
                  <>
                    <div style={{ position: 'relative', minHeight: '160px' }}>
                      <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '1.75rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#3D4A1E', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: '#3D4A1E', lineHeight: 1.7 }}>{item.description}</p>
                      {i === 2 && (
                        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#3D4A1E' }}>What are you thinking of?</p>
                          <button className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}>Discuss with Us</button>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ padding: '1.75rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#3D4A1E', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: '#3D4A1E', lineHeight: 1.7 }}>{item.description}</p>
                    </div>
                    <div style={{ position: 'relative', minHeight: '160px' }}>
                      <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 7. ALL STUDENTS ══════════ */}
      <section style={{ backgroundColor: 'var(--yuni-lavender-bg)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            backgroundColor: 'var(--yuni-card-bg)',
            borderRadius: '1rem',
            padding: '1.5rem',
            textAlign: 'center',
            marginBottom: '2rem',
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--yuni-navy)', fontSize: '1.5rem' }}>
              We get all students where they need to go.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {services.map((service) => (
              <div key={`s2-${service.title}`} style={{
                backgroundColor: service.active ? 'var(--yuni-purple)' : 'var(--yuni-card-bg)',
                borderRadius: '1.25rem',
                padding: '1.5rem 1rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem',
                minHeight: '170px', justifyContent: 'center',
              }}>
                <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                  <Image src={service.image} alt={service.title} fill style={{ objectFit: 'contain' }} />
                </div>
                <p style={{
                  textAlign: 'center', fontWeight: 600, fontSize: '0.85rem',
                  color: service.active ? 'white' : 'var(--yuni-text-dark)',
                  whiteSpace: 'pre-line', lineHeight: 1.4,
                  fontFamily: 'var(--font-heading)',
                }}>{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 8. TESTIMONIALS ══════════ */}
      <section style={{ backgroundColor: 'var(--yuni-bg)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Feedback</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--yuni-navy)', fontWeight: 700, fontSize: '2rem' }}>
              Hear from our customers
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{
                background: t.active ? 'linear-gradient(135deg, var(--yuni-purple) 0%, #6B2272 100%)' : 'var(--yuni-card-bg)',
                borderRadius: '1rem',
                padding: '1.75rem',
                transform: t.active ? 'scale(1.03)' : 'none',
                boxShadow: t.active ? '0 8px 32px rgba(130,44,137,0.25)' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ position: 'relative', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                    <Image src={t.image} alt={t.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: t.active ? 'white' : 'var(--yuni-text-dark)', fontSize: '1rem' }}>{t.name}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Star size={12} fill="#F4B942" color="#F4B942" />
                      <span style={{ fontSize: '0.75rem', color: t.active ? 'rgba(255,255,255,0.8)' : 'var(--yuni-text-mid)' }}>{t.rating}</span>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: t.active ? 'rgba(255,255,255,0.9)' : 'var(--yuni-text-mid)' }}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 9. BLOG ══════════ */}
      <section style={{ backgroundColor: 'var(--yuni-lavender-bg)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Blog</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--yuni-navy)', fontWeight: 700, fontSize: '2rem' }}>
              Insights &amp; Stories from Yuni Rides
            </h2>
          </div>
          <div style={{ backgroundColor: 'var(--yuni-purple)', borderRadius: '1.5rem', padding: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
              {blogPosts.map((post) => (
                <div key={post.slug} style={{ backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: '1rem', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', height: '140px' }}>
                    <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <p style={{ fontWeight: 600, color: 'white', fontSize: '0.875rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>{post.title}</p>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>📅 {post.date}</p>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.75rem' }}>{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} style={{
                      display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '0.5rem',
                      backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '0.8rem', fontWeight: 600,
                    }}>Read Article</Link>
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
              {blogPosts.map((post) => (
                <div key={`strip-${post.slug}`} style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '0.75rem', padding: '0.75rem' }}>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: 500, lineHeight: 1.4 }}>{post.title}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/blog" style={{
                display: 'inline-block', padding: '0.6rem 1.75rem', borderRadius: '9999px',
                backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.875rem', fontWeight: 600,
              }}>See more Articles</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 10. VIDEO SECTION ══════════ */}
      <section style={{ backgroundColor: 'var(--yuni-bg)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-label">Serving others with Safety</span>
          </div>
          <div style={{ border: '2px solid var(--yuni-purple)', borderRadius: '1.5rem', overflow: 'hidden', display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
            <div style={{ position: 'relative', minHeight: '320px' }}>
              <Image src="/images/video-thumb.png" alt="Because Every Journey Matters" fill style={{ objectFit: 'cover', opacity: 0.85 }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--yuni-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Play size={14} fill="white" color="white" />
                </div>
                <p style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>Because Every Journey Matters.</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { label: 'Real Families. Real Care.', img: '/images/video2.png' },
                { label: 'Safe Rides, Real Impact.', img: '/images/video3.png' },
                { label: 'Stories That Build Trust', img: '/images/video4.png' },
              ].map((v) => (
                <div key={v.label} style={{ position: 'relative', flex: 1, minHeight: '106px', overflow: 'hidden' }}>
                  <Image src={v.img} alt={v.label} fill style={{ objectFit: 'cover', opacity: 0.75 }} />
                  <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--yuni-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Play size={9} fill="white" color="white" />
                    </div>
                    <p style={{ color: 'white', fontSize: '0.75rem', fontWeight: 500 }}>{v.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

