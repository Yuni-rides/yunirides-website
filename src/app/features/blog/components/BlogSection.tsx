'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: 'Building Trust Through Safe Student Transportation',
    date: '12/1/2026',
    excerpt: 'Discover how Yuni Rides prioritizes safety, care, and reliability....',
    image: '/images/blog1.png',
    slug: 'building-trust-safe-student-transportation',
  },
  {
    title: 'Caring Transportation for Every Stage of Life',
    date: '12/1/2026',
    excerpt: 'From children to seniors, Yuni Rides delivers safe, respectful....',
    image: '/images/blog2.png',
    slug: 'caring-transportation-every-stage',
  },
  {
    title: 'How Technology Makes Student Transportation Safer',
    date: '12/1/2026',
    excerpt: 'Explore how real-time tracking, clear communication, and smart....',
    image: '/images/blog3.png',
    slug: 'technology-student-transportation-safer',
  },
]

export default function BlogSection() {
  return (
    <section className="bg-[#FAF8F0] pt-15 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-1.75 px-7 rounded-full text-[14px] font-medium font-body mb-[14px]">
            Blog
          </span>
          <h2 className="font-heading font-bold text-[clamp(1.5rem,3vw,2rem)] text-[#2C3979] m-0">
            Insights &amp; Stories from Yuni Rides
          </h2>
        </motion.div>

        {/* Purple container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#822C89] rounded-[40px] p-6 md:p-[32px_32px_28px] w-full box-border"
        >
          {/* Blog cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-[20px] overflow-hidden flex flex-col shadow-[0_4px_16px_rgba(0,0,0,0.1)] group cursor-pointer"
              >
                <div className="p-[20px_20px_16px]">
                  <p className="font-heading font-bold text-[18px] md:text-[20px] text-[#353637] leading-6.75 m-0 mb-2.5">
                    {post.title}
                  </p>
                  <div className="inline-flex items-center gap-1.5 bg-[#E5EAFF] rounded-md px-2.5 py-1 mb-2.5">
                    <span className="text-[11px]">📅</span>
                    <span className="text-[12px] text-[#4A4A6A] font-body font-medium">{post.date}</span>
                  </div>
                  <p className="text-[15px] md:text-[17px] text-[#353637] leading-6 font-body m-0 text-justify">
                    {post.excerpt}
                  </p>
                </div>

                <div className="relative h-50 md:h-56.75 shrink-0 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <Link
                    href={`/blog/${post.slug}`}
                    className="absolute top-4 left-4 z-2 inline-block bg-[#822C89] hover:bg-[#6B2272] text-white rounded-[10px] px-[22px] py-[10px] text-[13px] font-semibold font-body no-underline shadow-[0_2px_8px_rgba(0,0,0,0.3)] whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                  >
                    Read Article
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom strip — hidden on mobile */}
          <div className="hidden sm:grid grid-cols-3 gap-5 relative">
            {blogPosts.map((post, i) => (
              <motion.div
                key={`strip-${post.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/12 rounded-xl px-4 py-3"
              >
                <p className="text-white text-[12.5px] font-semibold font-body m-0 leading-[1.4]">
                  {post.title}
                </p>
              </motion.div>
            ))}

          
          </div>

          {/* See more — mobile only */}
          <div className="sm:hidden flex justify-center mt-4">
            <Link
              href="/blog"
              className="inline-block bg-[#5C1F6B] text-white rounded-full px-7.5 py-2.75 text-[13px] font-semibold font-body no-underline"
            >
              See more Articles
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  )
}