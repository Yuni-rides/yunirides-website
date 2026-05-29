'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const requirements = [
  {
    image: '/images/driver-req1.png',
    icon2: null,
    text: '3 years caregiving experience',
  },
  {
    image: '/images/driver-req2.png',
    icon2: null,
    text: '3 years caregiving experience',
  },
  {
    image: '/images/driver-req3.png',
    icon2: '/images/icon-verify.png',
    text: 'Good driving record',
  },
  {
    image: '/images/driver-req4.png',
    icon2: null,
    text: 'Background Check, Drug Test & TB Test.',
  },
]

export default function DriverRequirements() {
  return (
    <section className="bg-[#FAF8F0] px-4 sm:px-12 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading bar — bounces in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
          className="bg-[#822C89] rounded-[16px] px-8 py-7 text-center mb-8"
        >
          <h2 className="font-heading font-bold text-[clamp(1.3rem,2.5vw,1.75rem)] text-white m-0 leading-[1.4]">
            What It Takes to Be a Good Driver
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {requirements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotate: i % 2 === 0 ? -4 : 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12, type: 'spring', bounce: 0.35 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -2 : 2, scale: 1.03 }}
              whileTap={{ scale: 0.96, rotate: 0 }}
              className="bg-white rounded-[16px] px-4 py-7 flex flex-col items-center gap-4 text-center shadow-[0_2px_12px_rgba(44,57,121,0.07)] cursor-pointer"
            >
              {/* Image with spin on hover */}
              <motion.div
                className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]"
                whileHover={{ rotate: 8 }}
                whileTap={{ rotate: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image src={item.image} alt={item.text} fill className="object-contain" />
                {item.icon2 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.4, type: 'spring', bounce: 0.6 }}
                    className="absolute top-0 right-0 w-[36px] h-[36px]"
                  >
                    <Image src={item.icon2} alt="verified" fill className="object-contain" />
                  </motion.div>
                )}
              </motion.div>

              {/* Text */}
              <p className="font-heading font-semibold text-[14px] text-[#2C3979] m-0 leading-[1.5]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}