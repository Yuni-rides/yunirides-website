'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [paused, setPaused] = useState(false)

  const prev = (active - 1 + testimonials.length) % testimonials.length
  const next = (active + 1) % testimonials.length

  // Auto-play every 2 seconds
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [paused, active])

  return (
    <section className="w-full bg-[#FAF8F0] pt-[60px] pb-[80px]">

      {/* Header */}
      <div className="text-center mb-10 px-4">
        <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-6 rounded-full text-[14px] font-medium font-body mb-[14px]">
          Feedback
        </span>
        <h2 className="font-heading font-bold text-[clamp(1.5rem,3vw,2rem)] text-[#2C3979] m-0">
          Hear from our customers
        </h2>
      </div>

      {/* Lavender container — 1280x655, left:79px, radius:40px */}
      <div className="max-w-7xl mx-auto px-4 md:px-[79px]">
        <div
          className="relative bg-[#EFF2FF] rounded-[40px] py-[48px] overflow-visible"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* DESKTOP — 3 cards */}
          <div className="hidden md:grid md:grid-cols-[1fr_516px_1fr] gap-4 items-center px-6">

            {/* LEFT card — fades left */}
            <motion.div
              key={`prev-${prev}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActive(prev)}
              className="cursor-pointer h-[280px] rounded-[20px] p-6 box-border flex flex-col gap-[14px] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_16px_40px_rgba(130,44,137,0.25)] md:-ml-[60px]"
              style={{
                background: 'linear-gradient(135deg, rgba(178,100,190,0.7) 0%, rgba(130,44,137,0.55) 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
              }}
            >
              <div className="flex items-start gap-[14px]">
                <div className="w-[72px] h-[72px] rounded-full overflow-hidden shrink-0 relative border-[3px] border-white/40">
                  <Image src={testimonials[prev].image} alt={testimonials[prev].name} fill className="object-cover" />
                </div>
                <div className="pt-[6px]">
                  <p className="font-heading font-bold text-[20px] text-white m-0 mb-[6px]">{testimonials[prev].name}</p>
                  <div className="flex items-center gap-[5px]">
                    <Star size={15} fill="#F4B942" color="#F4B942" />
                    <span className="text-[13px] text-white/90 font-body">{testimonials[prev].rating}</span>
                  </div>
                </div>
              </div>
              <p className="text-[12.5px] text-white/90 leading-[1.75] font-body m-0">{testimonials[prev].text}</p>
            </motion.div>

            {/* CENTER card — active */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`active-${active}`}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4 }}
                className="h-[330px] bg-[#822C89] rounded-[20px] p-7 box-border flex flex-col gap-[18px] shadow-[0_12px_40px_rgba(130,44,137,0.35)] border-2 border-white/15 z-10 relative"
              >
                <div className="flex items-start gap-[18px]">
                  <div className="w-[170px] h-[160px] rounded-[31px] overflow-hidden shrink-0 relative">
                    <Image src={testimonials[active].image} alt={testimonials[active].name} fill className="object-cover" />
                  </div>
                  <div className="pt-[10px]">
                    <p className="font-heading font-bold text-[26px] text-white m-0 mb-[8px]">{testimonials[active].name}</p>
                    <div className="flex items-center gap-[6px]">
                      <Star size={18} fill="#F4B942" color="#F4B942" />
                      <span className="text-[15px] text-white/90 font-body font-medium">{testimonials[active].rating}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[14px] text-white/[0.92] leading-[1.8] font-body m-0">{testimonials[active].text}</p>
              </motion.div>
            </AnimatePresence>

            {/* RIGHT card — fades right */}
            <motion.div
              key={`next-${next}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActive(next)}
              className="cursor-pointer h-[280px] rounded-[20px] p-6 box-border flex flex-col gap-[14px] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_16px_40px_rgba(130,44,137,0.25)] md:-mr-[60px]"
              style={{
                background: 'linear-gradient(135deg, rgba(130,44,137,0.55) 0%, rgba(178,100,190,0.7) 100%)',
                maskImage: 'linear-gradient(to left, transparent 0%, black 30%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 30%, black 100%)',
              }}
            >
              <div className="flex items-start gap-[14px]">
                <div className="w-[72px] h-[72px] rounded-full overflow-hidden shrink-0 relative border-[3px] border-white/40">
                  <Image src={testimonials[next].image} alt={testimonials[next].name} fill className="object-cover" />
                </div>
                <div className="pt-[6px]">
                  <p className="font-heading font-bold text-[20px] text-white m-0 mb-[6px]">{testimonials[next].name}</p>
                  <div className="flex items-center gap-[5px]">
                    <Star size={15} fill="#F4B942" color="#F4B942" />
                    <span className="text-[13px] text-white/90 font-body">{testimonials[next].rating}</span>
                  </div>
                </div>
              </div>
              <p className="text-[12.5px] text-white/90 leading-[1.75] font-body m-0">{testimonials[next].text}</p>
            </motion.div>

          </div>

          {/* MOBILE */}
          <div className="md:hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-${active}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="bg-[#822C89] rounded-[20px] p-6 box-border flex flex-col gap-[18px] shadow-[0_12px_40px_rgba(130,44,137,0.35)] border-2 border-white/15"
              >
                <div className="flex items-start gap-4">
                  <div className="w-[72px] h-[72px] rounded-full overflow-hidden shrink-0 relative border-[3px] border-white/25">
                    <Image src={testimonials[active].image} alt={testimonials[active].name} fill className="object-cover" />
                  </div>
                  <div className="pt-[6px]">
                    <p className="font-heading font-bold text-[20px] text-white m-0 mb-[6px]">{testimonials[active].name}</p>
                    <div className="flex items-center gap-[5px]">
                      <Star size={18} fill="#F4B942" color="#F4B942" />
                      <span className="text-[15px] text-white/90 font-body font-medium">{testimonials[active].rating}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[13px] text-white/[0.92] leading-[1.8] font-body m-0">{testimonials[active].text}</p>
              </motion.div>
            </AnimatePresence>
        
          </div>

        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-300 ${i === active ? 'w-6 bg-[#822C89]' : 'w-2 bg-[#C8C8E0]'}`}
          />
        ))}
      </div>

    </section>
  )
}