'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Adam',
    rating: 4.5,
    text: 'Yuni Rides has been incredibly reliable and caring. Knowing my family member is always safe and on time gives me complete peace of mind.',
    image: '/images/adam.png',
  },
  {
    name: 'Jessica',
    rating: 4.5,
    text: '"Always on time with caring drivers. I trust Yuni Rides completely."',
    image: '/images/jessica.png',
  },
  {
    name: 'Brenda',
    rating: 4.5,
    text: 'Yuni Rides has been incredibly reliable and caring. Knowing my family member is always safe and on time gives me complete peace of mind.',
    image: '/images/brenda.png',
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(1)

  const prev = (active - 1 + testimonials.length) % testimonials.length
  const next = (active + 1) % testimonials.length

  return (
    <section style={{ backgroundColor: '#FAF8F0', padding: '60px 0 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{
            display: 'inline-block',
            background: '#E5EAFF',
            color: '#4A4A6A',
            padding: '7px 24px',
            borderRadius: '9999px',
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: 'var(--font-body)',
            marginBottom: '14px',
          }}>Feedback</span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: '#2C3979',
            margin: 0,
          }}>Hear from our customers</h2>
        </div>

        {/* Outer lavender container */}
        <div style={{
          backgroundColor: '#EFF2FF',
          borderRadius: '28px',
          padding: '48px 32px',
        }}>
          {/* 3 cards — all fully visible, center aligned */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 516px 1fr',
            gap: '16px',
            alignItems: 'center',
          }}>

            {/* LEFT card — Adam */}
            <div
              onClick={() => setActive(prev)}
              style={{
                cursor: 'pointer',
                height: '280px',
                backgroundColor: '#822C89',
                borderRadius: '20px',
                padding: '24px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: '0 4px 16px rgba(130,44,137,0.2)',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{
                  width: '72px', height: '72px',
                  borderRadius: '50%', overflow: 'hidden',
                  flexShrink: 0, position: 'relative',
                  border: '3px solid rgba(255,255,255,0.25)',
                }}>
                  <Image src={testimonials[prev].image} alt={testimonials[prev].name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ paddingTop: '6px' }}>
                  <p style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 700,
                    fontSize: '20px', color: 'white', margin: '0 0 6px',
                  }}>{testimonials[prev].name}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Star size={15} fill="#F4B942" color="#F4B942" />
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-body)' }}>
                      {testimonials[prev].rating}
                    </span>
                  </div>
                </div>
              </div>
              <p style={{
                fontSize: '12.5px', color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.75, fontFamily: 'var(--font-body)', margin: 0,
              }}>{testimonials[prev].text}</p>
            </div>

            {/* CENTER card — Active (Jessica) */}
            <div style={{
              height: '330px',
              backgroundColor: '#822C89',
              borderRadius: '20px',
              padding: '28px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              boxShadow: '0 12px 40px rgba(130,44,137,0.35)',
              border: '2px solid rgba(255,255,255,0.15)',
              transition: 'all 0.3s ease',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
                <div style={{
                  width: '170px',
                  height: '160px',
                  borderRadius: '31px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  position: 'relative',
                }}>
                  <Image src={testimonials[active].image} alt={testimonials[active].name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ paddingTop: '10px' }}>
                  <p style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 700,
                    fontSize: '26px', color: 'white', margin: '0 0 8px',
                  }}>{testimonials[active].name}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Star size={18} fill="#F4B942" color="#F4B942" />
                    <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                      {testimonials[active].rating}
                    </span>
                  </div>
                </div>
              </div>
              <p style={{
                fontSize: '14px', color: 'rgba(255,255,255,0.92)',
                lineHeight: 1.8, fontFamily: 'var(--font-body)', margin: 0,
              }}>{testimonials[active].text}</p>
            </div>

            {/* RIGHT card — Brenda */}
            <div
              onClick={() => setActive(next)}
              style={{
                cursor: 'pointer',
                height: '280px',
                backgroundColor: '#822C89',
                borderRadius: '20px',
                padding: '24px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: '0 4px 16px rgba(130,44,137,0.2)',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{
                  width: '72px', height: '72px',
                  borderRadius: '50%', overflow: 'hidden',
                  flexShrink: 0, position: 'relative',
                  border: '3px solid rgba(255,255,255,0.25)',
                }}>
                  <Image src={testimonials[next].image} alt={testimonials[next].name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ paddingTop: '6px' }}>
                  <p style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 700,
                    fontSize: '20px', color: 'white', margin: '0 0 6px',
                  }}>{testimonials[next].name}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Star size={15} fill="#F4B942" color="#F4B942" />
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-body)' }}>
                      {testimonials[next].rating}
                    </span>
                  </div>
                </div>
              </div>
              <p style={{
                fontSize: '12.5px', color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.75, fontFamily: 'var(--font-body)', margin: 0,
              }}>{testimonials[next].text}</p>
            </div>

          </div>
        </div>

        {/* Dot indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '20px',
        }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? '24px' : '8px',
                height: '8px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: i === active ? '#822C89' : '#C8C8E0',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}