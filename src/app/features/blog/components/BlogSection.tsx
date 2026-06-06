"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { blogPostsList } from "@/app/features/blog/data/blogsMockData";

export default function BlogSection() {
  const allBlogs = blogPostsList;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#FAF8F0] pt-15 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
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

        {/* Purple Outer Box Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-yuni-purple rounded-[40px] p-6 md:p-[32px_24px_28px] lg:p-[32px_32px_28px] w-full box-border"
        >
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing mb-5"
            ref={emblaRef}
          >
            <div className="flex backface-hidden -ml-5">
              {allBlogs.map((post, i) => (
                <div
                  key={post.slug}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-5 box-border"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white rounded-[20px] overflow-hidden flex flex-col h-[450px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] group cursor-pointer w-full"
                  >
                    <div className="p-[20px_20px_16px] flex flex-col flex-grow">
                      <p className="font-heading font-bold text-[18px] md:text-[20px] text-[#353637] leading-tight m-0 mb-2.5 line-clamp-2">
                        {post.title}
                      </p>
                      <div className="inline-flex items-center gap-1.5 bg-[#E5EAFF] rounded-md px-2.5 py-1 mb-2.5 w-fit">
                        <span className="text-[12px] text-[#4A4A6A] font-body font-medium">
                          📅 {post.date}
                        </span>
                      </div>
                      <p className="text-[14px] md:text-[15px] text-[#353637] leading-relaxed font-body m-0 text-justify line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="relative h-52 shrink-0 overflow-hidden mt-auto">
                      <Image
                        src={post.heroImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                      <Link
                        href={`/blog/${post.slug}`}
                        className="absolute top-4 left-4 z-2 inline-block bg-yuni-purple hover:bg-[#6B2272] !text-white rounded-[10px] px-[22px] py-[10px] text-[13px] font-semibold font-body no-underline shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                      >
                        Read Article
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Indicators / Track Strips */}
          <div className="hidden sm:grid grid-cols-3 gap-5 relative">
            {allBlogs.slice(0, 3).map((post, i) => (
              <motion.div
                key={`strip-${post.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => emblaApi && emblaApi.scrollTo(i)}
                className={`cursor-pointer rounded-xl px-4 py-3 border transition-all duration-300 ${
                  selectedIndex % 3 === i
                    ? "bg-white/20 border-white/40 shadow-sm"
                    : "bg-white/12 border-transparent"
                }`}
              >
                <p className="text-white text-[12.5px] font-semibold font-body m-0 leading-tight line-clamp-1">
                  {post.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile See More CTA */}
          <div className="hidden flex justify-center mt-4">
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
  );
}
