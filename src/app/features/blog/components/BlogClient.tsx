'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import BlogFilters from '@/app/features/blog/components/BlogFilters'
import BlogBanner from '@/app/features/blog/components/BlogBanner'

const posts = [
  { slug: 'tips-stress-free-school-dropoffs', category: 'Press Release', title: 'Tips for Stress-Free School Dropoffs', excerpt: 'Simple, practical advice for parents and caregivers to make school mornings...', image: '/images/blog1.png' },
  { slug: 'how-yuni-rides-ensures-trusted-journeys', category: 'Press Release', title: 'How Yuni Rides Ensures Trusted Journeys', excerpt: 'Simple, practical advice for parents and caregivers to make school mornings...', image: '/images/blog2.png' },
  { slug: 'select-your-own-schedule', category: 'Press Release', title: 'Select Your Own Schedule', excerpt: 'Learn about our safety guidelines, driver vetting process, and what makes...', image: '/images/blog3.png' },
  { slug: 'helping-build-confidence-through-transportation', category: 'Press Release', title: 'Helping Build Confidence Through Transportation', excerpt: 'Explore how kids grow with independence and confidence when....', image: '/images/blog1.png' },
]

const featuredLeft = {
  slug: 'meet-the-drivers-behind-yuni-rides',
  title: 'Meet the Drivers Behind Yuni Rides',
  excerpt: 'Get to know the people who care, drive, and support our community. Real stories from real Yuni Rides drivers.',
  image: '/images/blog-featured2.png',
}

export default function BlogClient() {
  return (
    <>
      <BlogBanner />

      {/* Editor's Pick */}
      <section className="bg-[#FAF8F0] pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-[1.6rem] text-[#1A1A2E] mb-5"
          >
            Editor&apos;s Pick
          </motion.h2>

          <BlogFilters />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

            {/* LEFT — featured big post */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[240px] md:h-[280px] rounded-[16px] overflow-hidden mb-5 group">
                <Image
                  src={featuredLeft.image}
                  alt={featuredLeft.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="font-heading font-bold text-[1.2rem] text-[#1A1A2E] mb-3">
                {featuredLeft.title}
              </h3>
              <p className="text-[13px] text-[#4A4A6A] leading-[1.7] font-body mb-5">
                {featuredLeft.excerpt}
              </p>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="w-fit">
                <Link href={`/blog/${featuredLeft.slug}`} className="btn-outline">Learn more</Link>
              </motion.div>
            </motion.div>

            {/* RIGHT — 4 small posts */}
            <div className="flex flex-col gap-4">
              {posts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href={`/blog/${post.slug}`} className="grid grid-cols-[90px_1fr] md:grid-cols-[100px_1fr] gap-3 md:gap-4 no-underline items-center group">
                    <div className="relative h-[70px] md:h-[80px] rounded-[10px] overflow-hidden shrink-0">
                      <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.05]" />
                    </div>
                    <div>
                      <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] px-[10px] py-[2px] rounded-full text-[11px] font-body mb-1">
                        {post.category}
                      </span>
                      <p className="font-heading font-semibold text-[13px] md:text-[13.5px] text-[#1A1A2E] m-0 mb-1 leading-[1.3]">
                        {post.title}
                      </p>
                      <p className="text-[12px] text-[#6A6A8A] font-body m-0 leading-[1.5] line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}