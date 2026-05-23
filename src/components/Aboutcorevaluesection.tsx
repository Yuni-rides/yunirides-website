'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const values = [
  { number: '01', title: 'Saftey First', image: '/images/safety.png', description: 'The safety of the transport is our highest priority. Every journey is handled with the utmost caution, adhering to strict safety protocols and utilizing the latest technology to ensure that child is in safe hands.' },
  { number: '02', title: 'Trust', image: '/images/trust.png', description: 'We know that every child is unique, and our drivers and staff are trained to provide transportation with care, understanding, and compassion. Our goal is to create an environment where children feel comfortable, supported, and respected during their rides.' },
  { number: '03', title: 'Care and compassion', image: '/images/care.png', description: 'We know that every child is unique, and our drivers and staff are trained to provide transportation with care, understanding, and compassion.' },
  { number: '04', title: 'Reliability', image: '/images/reliability.png', description: "Families depend on us to be on time, every time. Whether it's for school, appointments, or other commitments, we ensure dependable and seamless transportation." },
  { number: '05', title: 'Integrity', image: '/images/care.png', description: 'We conduct our business with honesty and transparency. Every member of Yuni Rides is committed to upholding the highest ethical standards.' },
  { number: '06', title: 'Professionalism', image: '/images/professionalism.png', description: 'Our team of drivers and support staff are highly trained professionals dedicated to providing the best possible service.' },
]

export default function AboutCoreValuesSection() {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <section style={{ backgroundColor: '#FAF8F0', padding: '4rem 3rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Label */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{
            display: 'inline-block', background: '#E5EAFF', color: '#4A4A6A',
            padding: '7px 28px', borderRadius: '9999px', fontSize: '14px',
            fontWeight: 500, fontFamily: 'var(--font-body)',
          }}>Our Core Values</span>
        </div>

        {/* Main box — 1280x771 */}
        <div style={{
          backgroundColor: '#EFF2FF',
          borderRadius: '24px',
          padding: '2.5rem',
          display: 'grid',
          gridTemplateColumns: '480px 1fr',
          gap: '3rem',
          minHeight: '500px',
        }}>

          {/* LEFT — fixed layout, content changes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Image */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '210px',
              borderRadius: '16px',
              overflow: 'hidden',
              flexShrink: 0,
            }}>
              <Image
                src={values[activeIndex].image}
                alt={values[activeIndex].title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Description */}
            <p style={{
              fontSize: '12.5px', color: '#4A4A6A',
              lineHeight: 1.85, fontFamily: 'var(--font-body)',
              textAlign: 'justify', margin: 0,
            }}>
              {values[activeIndex].description}
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '1rem' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: '#2C3979', color: 'white',
                borderRadius: '10px', padding: '12px 28px',
                fontSize: '14px', fontWeight: 600,
                fontFamily: 'var(--font-body)', textDecoration: 'none',
              }}>Contact us</Link>
              <Link href="/become-a-driver" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: 'white', color: '#2C3979',
                border: '1.5px solid #DDE2FF', borderRadius: '10px',
                padding: '12px 24px', fontSize: '14px', fontWeight: 600,
                fontFamily: 'var(--font-body)', textDecoration: 'none',
              }}>Become a Rider</Link>
            </div>
          </div>

          {/* RIGHT — numbered accordion list */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {values.map((value, i) => (
              <div key={i}>
                {/* Divider line — purple if active item is below */}
                <div style={{
                  height: '1px',
                  backgroundColor: i === activeIndex ? '#822C89' : '#D0D4EE',
                  margin: 0,
                }} />

                {/* Row */}
                <button
                  onClick={() => setActiveIndex(i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px 8px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  {/* Number — visible only when active */}
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '16px',
                    color: '#822C89',
                    minWidth: '36px',
                    opacity: i === activeIndex ? 1 : 0,
                  }}>{value.number}</span>

                  {/* Title */}
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: i === activeIndex ? 700 : 400,
                    fontSize: i === activeIndex ? '20px' : '17px',
                    color: i === activeIndex ? '#822C89' : '#9090B0',
                    transition: 'all 0.2s ease',
                  }}>{value.title}</span>
                </button>
              </div>
            ))}
            {/* Last divider */}
            <div style={{ height: '1px', backgroundColor: '#D0D4EE' }} />
          </div>

        </div>
      </div>
    </section>
  )
}