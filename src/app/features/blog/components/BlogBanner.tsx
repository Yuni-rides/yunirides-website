"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/shared/Button";
import Link from "next/link";

const featuredPost = {
  slug: "why-safe-rides-matter-for-kids",
  title: "Why Safe Rides Matter for Kids",
  excerpt:
    "Discover how child-focused transportation makes a difference in families' daily lives — from safety standards to peace of mind.",
  image: "/images/blog-featured.png",
  time: "6 mins ago",
};

export default function BlogBanner() {
  return (
    <section className="bg-[#FAF8F0] px-4 sm:px-6 lg:px-8 pb-12 pt-6 mt-26">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-[#2C3979] rounded-[40px] overflow-hidden flex flex-col gap-8 p-6 md:p-10 shadow-[0_12px_40px_rgba(44,57,121,0.15)]"
      >
        {/* TOP — Hero Content Grid Asset Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Frame — Image Asset Control */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative w-full overflow-hidden rounded-[30px] h-[260px] sm:h-[360px] md:h-[460px] shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
          >
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center items-start gap-4 md:pl-6 py-2"
          >
            <span className="inline-block bg-white/15 text-white/90 backdrop-blur-sm px-4 py-[6px] rounded-full text-[12px] font-medium font-body tracking-wide select-none">
              {featuredPost.time}
            </span>

            <h1 className="font-heading font-extrabold text-[clamp(1.6rem,3.5vw,2.6rem)] text-white leading-[1.25] m-0">
              {featuredPost.title}
            </h1>

            <p className="font-body text-[14px] md:text-[15px] text-white/80 leading-[1.75] max-w-[540px] m-0">
              {featuredPost.excerpt}
            </p>

            {/* Replaced generic <a> Link with your verified core Custom Button wrapper */}
            <div className="mt-2">
              <Link href={"/about"}>
                <Button
                  label="Learn more"
                  bgColor="bg-yuni-purple"
                  textColor="text-white"
                  borderColor="border-yuni-purple"
                  hoverBgValue="white"
                  hoverTextValue="yuni-purple"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full bg-[#EFF2FF] rounded-[32px] px-6 md:px-10 py-6 md:py-0 md:h-[120px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)]"
        >
          <p className="font-heading font-bold text-[20px] sm:text-[24px] md:text-[26px] text-[#2C3979] m-0 tracking-tight text-center md:text-left">
            Don&apos;t Feed the Algorithm?
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:flex-1 md:max-w-[520px] items-center">
            {/* Unified Custom Fieldset Border Input wrapper to match BecomeCustomer layout pattern */}
            <fieldset className="border border-[#DDE2FF] focus-within:border-[#822C89] focus-within:ring-1 focus-within:ring-[#822C89]/10 rounded-xl px-3 pb-1.5 pt-0 bg-white w-full transition-all duration-200 shadow-sm">
              <legend className="px-1 text-[11px] font-semibold font-body text-[#4A4A6A] leading-none select-none">
                Email Address
              </legend>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full h-[36px] bg-transparent text-[13px] text-[#1A1A2E] placeholder-[#8888AA]/50 font-body outline-none border-none p-0 mt-0.5 focus:ring-0"
              />
            </fieldset>

            <div className="w-full sm:w-auto shrink-0">
              <Button
                label="Submit"
                bgColor="bg-[#2C3979]"
                textColor="text-white"
                borderColor="border-[#2C3979]"
                hoverBgValue="white"
                hoverTextValue="[#2C3979]"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
