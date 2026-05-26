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
    <section className="bg-[#FAF8F0] px-4 sm:px-12 pt-12 pb-16 relative overflow-hidden">

      {/* Lavender blob */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 900px 500px at 70% 30%, #EFF2FF 0%, transparent 65%)' }}
      />

      <div className="max-w-[1400px] mx-auto relative z-[1] flex flex-col gap-10">

        {/* Text */}
        <div className="max-w-[500px]">
          <h1 className="font-heading font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] text-[#1A1A2E] leading-[1.15] mb-4">
            Driven by Care.<br />
            Growing with Purpose.
          </h1>
          <p className="text-[13px] text-[#4A4A6A] leading-[1.8] font-body">
            Founded on safety and compassion, Yuni Rides began in Texas, California, Washington, Illinois, and Arizona—and continues expanding trusted transportation nationwide.
          </p>
        </div>

        {/* City images — desktop: flex expand, mobile: grid */}
        <div className="hidden sm:flex items-stretch gap-[10px] w-full h-[200px]">
          {cityImages.map((img, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative rounded-[16px] overflow-hidden cursor-pointer min-w-0 h-[200px] group"
              style={{
                flex: hoveredIndex === i ? 2 : 1,
                transition: 'flex 0.35s ease',
              }}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
              {/* City name */}
              <span className="absolute bottom-[10px] left-0 right-0 text-center text-[13px] font-bold text-white font-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2]"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                {img.city}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile: 2x2 grid + 1 */}
        <div className="grid grid-cols-2 gap-[10px] sm:hidden">
          {cityImages.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-[16px] overflow-hidden h-[140px] group ${i === 4 ? 'col-span-2' : ''}`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <span className="absolute bottom-[8px] left-0 right-0 text-center text-[12px] font-bold text-white font-heading z-[2]"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                {img.city}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}