'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const students = [
  { label: 'Mckinney-Vento &\nFoster Youth',   image: '/images/service1.png', purple: true  },
  { label: 'Youth with special\nneeds',         image: '/images/service2.png', purple: false },
  { label: 'Continuing\ntechnical education',   image: '/images/service3.png', purple: true  },
  { label: 'General\neducation',                image: '/images/service4.png', purple: false },
]

export default function StudentsSection() {
  return (
    <section className="bg-[#FAF8F0] pt-[60px] pb-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#E5EAFF] rounded-[16px] px-[40px] py-[20px] text-center max-w-[580px] mx-auto mb-[52px]"
        >
          <h2 className="font-heading font-bold text-[clamp(1.3rem,2.5vw,1.75rem)] text-[#2C3979] m-0 leading-[1.4]">
            We get all students<br />where they need to go.
          </h2>
        </motion.div>

        {/* 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] justify-items-center">
          {students.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full max-w-[300px] flex flex-col items-center group"
            >
              {/* Illustration */}
              <motion.div
                whileHover={{ y: -8 }}
                whileTap={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-[190px] h-[195px] relative z-[2] -mb-[55px] shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-contain object-bottom"
                />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: '0 8px 28px rgba(0,0,0,0.13)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`w-full h-[210px] rounded-[20px] flex items-end justify-center pb-[36px] px-[20px] relative z-[1] box-border ${item.purple ? 'bg-[#822C89]' : 'bg-[#E5EAFF]'}`}
              >
                <p className={`font-heading font-semibold text-[15px] m-0 text-center leading-[1.5] whitespace-pre-line ${item.purple ? 'text-white' : 'text-[#2C3979]'}`}>
                  {item.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}