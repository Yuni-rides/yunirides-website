'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const featuredPost = {
  slug: 'why-safe-rides-matter-for-kids',
  title: 'Why Safe Rides Matter for Kids',
  excerpt: "Discover how child-focused transportation makes a difference in families' daily lives — from safety standards to peace of mind.",
  image: '/images/blog-featured.png',
  time: '6 mins ago',
}

export default function BlogBanner() {
  return (
    <section className="bg-[#FAF8F0] px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-7xl mx-auto bg-[#2C3979] rounded-[40px] overflow-hidden flex flex-col gap-6 p-6 md:p-8"
      >
        {/* TOP — hero grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full overflow-hidden rounded-[30px] h-[280px] md:h-[587px]"
          >
            <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover" priority />
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center gap-5 px-2 md:px-8 py-4 md:py-6"
          >
            <span className="inline-block bg-white/15 text-white px-4 py-[5px] rounded-full text-[12px] font-body w-fit">
              {featuredPost.time}
            </span>
            <h1 className="heading-xl text-white m-0">{featuredPost.title}</h1>
            <p className="body-lg text-white/85 m-0">{featuredPost.excerpt}</p>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="w-fit">
              <Link href={`/blog/${featuredPost.slug}`} className="btn-primary">Learn more</Link>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM — subscribe bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full bg-[#E5EAFF] rounded-[40px] px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-0 md:h-[133px]"
        >
          <p className="font-heading font-normal text-[20px] md:text-[30px] leading-[1.3] md:leading-[53px] text-[#4A4A6A] m-0">
            Don&apos;t Feed the Algorithm?
          </p>
          <div className="flex gap-2 w-full sm:flex-1 sm:max-w-[500px]">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-[14px] py-[10px] rounded-lg border border-[#DDE2FF] text-[13px] font-body outline-none focus:border-[#822C89] transition-all bg-white"
            />
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary shrink-0 w-[120px] md:w-[201px] h-[44px] md:h-[70px] rounded-[10px]"
            >
              Submit
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}