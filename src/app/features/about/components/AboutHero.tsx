'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const cityImages = [
  { src: '/images/about-city1.png', alt: 'Texas', city: 'Texas', description: 'Serving families across the Lone Star State with safe, reliable transportation.' },
  { src: '/images/about-city2.png', alt: 'New York', city: 'New York', description: 'Trusted by New York families for dependable, child-focused rides every day.' },
  { src: '/images/about-city3.png', alt: 'Washington DC', city: 'Washington', description: 'Providing compassionate transportation services throughout Washington state.' },
  { src: '/images/about-city4.png', alt: 'Chicago', city: 'Chicago', description: 'Connecting Chicago communities with safe and caring transportation solutions.' },
  { src: '/images/about-city5.png', alt: 'Arizona', city: 'Arizona', description: 'Expanding trusted transportation across Arizona with love and care.' },
]

export default function AboutHero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  // Auto-play
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cityImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <section className="bg-[#FAF8F0] px-4 sm:px-12 mt-26 pb-16 relative overflow-hidden">

      {/* Lavender blob */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 900px 500px at 70% 30%, #EFF2FF 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-[1] flex flex-col gap-10">

        {/* Text — animates with active city */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[500px]"
        >
          <h1 className="font-heading font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] text-[#1A1A2E] leading-[1.15] mb-4">
            Driven by Care.<br />
            Growing with Purpose.
          </h1>

          <p className="font-body font-light text-[clamp(16px,2vw,25px)] leading-[1] text-[#4A4A6A] mb-6 max-w-[760px]">
            Founded on safety and compassion, Yuni Rides began in Texas, California, Washington, Illinois, and Arizona—and continues expanding trusted transportation nationwide.
          </p>

          {/* City name + description changes */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-[#822C89] font-heading font-bold text-[15px] mb-1">
                📍 {cityImages[activeIndex].city}
              </p>
              <p className="text-[13px] text-[#4A4A6A] leading-[1.8] font-body">
                {cityImages[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {cityImages.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); setPaused(true); setTimeout(() => setPaused(false), 5000) }}
                className={`h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-300 ${i === activeIndex ? 'w-6 bg-[#822C89]' : 'w-2 bg-[#C9B8DC]'}`}
              />
            ))}
          </div>
        </motion.div>

        {/* DESKTOP — all images visible, active one grows upward */}
        <div
          className="hidden sm:flex items-end gap-[10px] w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {cityImages.map((img, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveIndex(i)}
              animate={{
                height: i === activeIndex ? 320 : 180,
                flex: i === activeIndex ? 2 : 1,
              }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="relative rounded-[16px] overflow-hidden cursor-pointer min-w-0 group"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />

              {/* Overlay */}
              <motion.div
                animate={{ opacity: i === activeIndex ? 0.15 : 0.35 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black"
              />

              {/* City name */}
              <motion.span
                animate={{ opacity: 1, y: i === activeIndex ? 0 : 4 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-3 left-0 right-0 text-center text-[13px] font-bold text-white font-heading z-[2]"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
              >
                {img.city}
              </motion.span>

              {/* Active indicator bar at bottom */}
              {i === activeIndex && (
                <motion.div
                  layoutId="activeBar"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#822C89] z-[3]"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* MOBILE — full image slider */}
        <div className="sm:hidden relative">
          <div className="relative rounded-[20px] overflow-hidden h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image src={cityImages[activeIndex].src} alt={cityImages[activeIndex].alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/25" />
                <span className="absolute bottom-4 left-0 right-0 text-center text-[15px] font-bold text-white font-heading z-[2]"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                  {cityImages[activeIndex].city}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile thumb strip */}
          <div className="grid grid-cols-5 gap-[6px] mt-3">
            {cityImages.map((img, i) => (
              <motion.div
                key={i}
                onClick={() => setActiveIndex(i)}
                whileTap={{ scale: 0.95 }}
                className={`relative rounded-[10px] overflow-hidden h-[60px] cursor-pointer transition-all duration-300 ${i === activeIndex ? 'ring-2 ring-[#822C89]' : 'opacity-60'}`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}