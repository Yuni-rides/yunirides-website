'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function DriverBanner() {
  return (
    <section className="bg-[#FAF8F0] px-4 sm:px-12 py-16 relative overflow-hidden min-h-[480px]">

      {/* Lavender blob right */}
      <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 700px 500px at 80% 50%, #EFF2FF 0%, transparent 70%)' }} />

      {/* Dotted overlay */}
      <div className="absolute bottom-0 right-[5%] w-[45%] h-[60%] pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(130,44,137,0.08) 1px, transparent 1px)',
          backgroundSize: '12px 12px',
        }} />

      <div className="max-w-7xl mx-auto relative z-[1] grid grid-cols-1 md:grid-cols-[420px_1fr] items-center gap-8 min-h-[400px]">

        {/* LEFT — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="font-heading font-extrabold text-[clamp(2.2rem,5vw,4rem)] text-[#1A1A2E] leading-[1.2] mb-5">
            Start Your<br />
            Journey as a<br />
            <span className="text-[#822C89]">Yuni Rides</span><br />
            Driver
          </h1>

          <p className="text-[14px] text-[#4A4A6A] leading-[1.7] font-body mb-8 max-w-[300px]">
            Help families by delivering safe, caring, and dependable rides for kids.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-3 flex-wrap"
          >
            <Link href="#become-customer" className="btn-secondary">
              Become a Rider
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT — Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="relative h-[340px] md:h-[520px] md:-mr-12 md:-mb-16"
        >
          <Image
            src="/images/become-driver-hero.png"
            alt="Yunirides drivers with purple car"
            fill
            className="object-contain object-center"
            priority
          />
        </motion.div>

      </div>
    </section>
  )
}