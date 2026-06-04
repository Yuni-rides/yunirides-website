'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CareerBanner() {
  const scrollToJobs = () => {
    document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      className="relative w-full bg-[#2C3979] overflow-hidden rounded-[40px] mt-26 mx-auto"
      style={{ height: '717px', maxWidth: '1438px'}}
    >

      {/* DESKTOP */}
      <div className="hidden md:block relative w-full h-full pb-8 ">

        {/* Right image — full height, right half */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        className="object-cover object-left"
        >
          <Image
            src="/images/careers-hero.png"
            alt="Drive Your Future Forward"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#2C3979] to-transparent" />
        </motion.div>

        {/* Left text — Figma: left:110px, top:127px (centered in 717px hero) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute z-10 flex flex-col"
          style={{ left: '110px', top: '127px', width: '622px' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-hero mb-6"
          >
            Drive Your <br />Future Forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-lg text-white/75 mb-8 max-w-[380px]"
          >
            Turn every mile into opportunity. Join a driver-first platform designed to give you freedom, fair earnings, and the respect you deserve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileTap={{ scale: 0.97 }}
            className="w-fit"
          >
            <button onClick={scrollToJobs} className="btn-primary">
              See Open Position
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* MOBILE */}
      <div className="flex md:hidden flex-col h-full">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[260px]"
        >
          <Image
            src="/images/careers-hero.png"
            alt="Drive Your Future Forward"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#2C3979] to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-6 pt-6 pb-10"
        >
          <h1 className="heading-hero mb-4">
            Drive Your <br />Future Forward.
          </h1>
          <p className="body-lg text-white/70 mb-6">
            Turn every mile into opportunity. Join a driver-first platform designed to give you freedom, fair earnings, and the respect you deserve.
          </p>
          <motion.div whileTap={{ scale: 0.97 }} className="w-fit">
            <button onClick={scrollToJobs} className="btn-primary">See Open Position</button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}