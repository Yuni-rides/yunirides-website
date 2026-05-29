'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutWhyTrusted() {
  return (
    <section className="bg-[#FAF8F0] px-4 md:px-[40px] lg:px-[79px] py-20 relative overflow-hidden">

      {/* Blob top-left */}
      <div className="absolute top-0 left-0 w-[52%] h-[52%] bg-[#EFF2FF] rounded-[0_0_80%_0] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-[1] flex flex-col gap-12">

        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] items-start">

          {/* Left — heading box + buttons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Heading box */}
            <div className="bg-[#EFF2FF] w-full md:w-[444px] h-[160px] rounded-[30px] mb-8 flex items-center px-7">
              <h2 className="font-heading font-bold text-[clamp(1.3rem,2vw,1.75rem)] text-[#1A1A2E] leading-[1.3] m-0">
                Why Yuni Rides Is<br />the Trusted Choice
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="btn-secondary w-full sm:w-[201px] h-[70px] justify-center"
              >
                Contact us
              </Link>
              <a
                href="tel:4155352155"
                className="btn-outline w-full sm:w-[201px] h-[70px] justify-center gap-2"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#2C3979">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                415-535-2155
              </a>
            </div>
          </motion.div>

          {/* Right — paragraph */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="text-[13.5px] text-[#4A4A6A] leading-[1.9] font-body text-justify pt-2"
          >
            Choosing Yuni Rides means partnering with a transportation service built on safety, trust, and genuine care. We understand how critical reliable transportation is for children, and we take that responsibility seriously. Every driver is carefully vetted, professionally trained, and dedicated to delivering the highest standard of service—so families can have complete peace of mind knowing their child is in safe, capable hands.
          </motion.p>
        </div>

        {/* Big image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          whileHover={{ scale: 1.01 }}
          className="relative w-full h-[400px] md:h-[778px] rounded-[37px] overflow-hidden shadow-[0_4px_24px_rgba(44,57,121,0.1)]"
        >
          <Image
            src="/images/about-why.png"
            alt="Yunirides driver with child"
            fill
            className="object-cover object-center"
          />
        </motion.div>

      </div>
    </section>
  )
}