'use client'

import Image from 'next/image'
import { useState } from 'react'

const cityImages = [
  { src: '/images/about-city1.png', alt: 'Texas', city: 'Texas' },
  { src: '/images/about-city2.png', alt: 'New York', city: 'New York' },
  { src: '/images/about-city3.png', alt: 'Washington DC', city: 'Washington' },
  { src: '/images/about-city4.png', alt: 'Chicago', city: 'Chicago' },
  { src: '/images/about-city5.png', alt: 'Arizona', city: 'Arizona' },
]

export default function AboutHero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <>
      <style>{`
        .city-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          flex: 1;
          height: 200px;
          min-width: 0;
          transition: flex 0.35s ease;
        }
        .city-wrap:hover {
          flex: 2;
        }
        .city-name {
          position: absolute;
          bottom: 10px;
          left: 0; right: 0;
          text-align: center;
          font-size: 13px;
          font-weight: 700;
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
          font-family: var(--font-heading);
          text-shadow: 0 1px 4px rgba(0,0,0,0.8);
          z-index: 2;
        }
        .city-wrap:hover .city-name {
          opacity: 1;
        }
      `}</style>

      <section style={{
        backgroundColor: '#FAF8F0',
        padding: '3rem 3rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Lavender blob */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 900px 500px at 70% 30%, #EFF2FF 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}>

          {/* TOP — Text */}
          <div style={{ maxWidth: '500px' }}>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              color: '#1A1A2E',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}>
              Driven by Care.<br />
              Growing with Purpose.
            </h1>
            <p style={{
              fontSize: '13px',
              color: '#4A4A6A',
              lineHeight: 1.8,
              fontFamily: 'var(--font-body)',
            }}>
              Founded on safety and compassion, Yuni Rides began in Texas, California, Washington, Illinois, and Arizona—and continues expanding trusted transportation nationwide.
            </p>
          </div>

          {/* BOTTOM — Images full width */}
          <div style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: '10px',
            width: '100%',
            height: '200px',
          }}>
            {cityImages.map((img, i) => (
              <div
                key={i}
                className="city-wrap"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <span className="city-name">{img.city}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}