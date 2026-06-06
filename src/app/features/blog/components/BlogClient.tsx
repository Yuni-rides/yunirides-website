"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogBanner from "@/app/features/blog/components/BlogBanner";
import { blogPostsList } from "@/app/features/blog/data/blogsMockData";

export default function BlogClient() {
  const featuredLeft = blogPostsList[0];

  const sidePosts = blogPostsList.slice(1);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentSidePosts = sidePosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sidePosts.length / postsPerPage);

  return (
    <>
      <BlogBanner />

      <section className="bg-[#FAF8F0] pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-[1.6rem] text-[#1A1A2E] mb-5"
          >
            Blogs
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* LEFT — Featured Big Post */}
            {featuredLeft && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-[240px] md:h-[280px] rounded-[16px] overflow-hidden mb-5 group">
                  <Image
                    src={featuredLeft.heroImage}
                    alt={featuredLeft.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    priority
                  />
                </div>
                <h3 className="font-heading font-bold text-[1.2rem] text-[#1A1A2E] mb-3">
                  {featuredLeft.title}
                </h3>
                <p className="text-[13px] text-[#4A4A6A] leading-[1.7] font-body mb-5">
                  {featuredLeft.excerpt}
                </p>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-fit"
                >
                  <Link
                    href={`/blog/${featuredLeft.slug}`}
                    className="btn-outline"
                  >
                    Learn more
                  </Link>
                </motion.div>
              </motion.div>
            )}

            <div className="flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <AnimatePresence mode="wait">
                  {currentSidePosts.map((post, i) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="grid grid-cols-[90px_1fr] md:grid-cols-[100px_1fr] gap-3 md:gap-4 no-underline items-center group"
                      >
                        <div className="relative h-[70px] md:h-[80px] rounded-[10px] overflow-hidden shrink-0">
                          <Image
                            src={post.heroImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                          />
                        </div>
                        <div>
                          <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] px-[10px] py-[2px] rounded-full text-[11px] font-body mb-1">
                            Press Release
                          </span>
                          <p className="font-heading font-semibold text-[13px] md:text-[13.5px] text-[#1A1A2E] m-0 mb-1 leading-[1.3] line-clamp-2">
                            {post.title}
                          </p>
                          <p className="text-[12px] text-[#6A6A8A] font-body m-0 leading-[1.5] line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200/60 mt-auto">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`p-2 rounded-full border transition-all ${
                      currentPage === 1
                        ? "text-gray-300 border-gray-200 cursor-not-allowed"
                        : "text-[#822C89] border-[#822C89] hover:bg-[#822C89] hover:text-white"
                    }`}
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <span className="text-[13px] font-body text-[#4A4A6A]">
                    Page <b>{currentPage}</b> of {totalPages}
                  </span>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-full border transition-all ${
                      currentPage === totalPages
                        ? "text-gray-300 border-gray-200 cursor-not-allowed"
                        : "text-[#822C89] border-[#822C89] hover:bg-[#822C89] hover:text-white"
                    }`}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
