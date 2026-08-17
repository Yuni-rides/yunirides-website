"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/shared/Button";

export default function ServicesHero() {
  return (
    <section className="bg-[#FAF8F0] px-4 sm:px-6 pb-8 mt-26">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-[40px] overflow-hidden bg-[#2D0F54] md:bg-transparent h-auto md:h-[580px] flex flex-col justify-between p-6 pb-4 md:p-0"
        >
          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/services-hero.png"
              alt="Yuni Rides driver safely transporting a child to school"
              fill
              className="object-cover object-center opacity-90 md:opacity-100"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 md:to-black/40" />
          </div>

          {/* Heading Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative z-[2] mt-6 mb-12 md:my-0 md:absolute md:top-1/2 md:left-12 md:-translate-y-[60%] max-w-[520px]"
          >
            <h1 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[clamp(1.8rem,4vw,3rem)] text-white leading-[1.15] m-0 [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
              Transportation
              <br />
              Designed Around Care,
              <br />
              Safety &amp; Trust
            </h1>
          </motion.div>

          {/* Bottom White Panel Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="relative z-[2] w-full bg-white rounded-[24px] md:rounded-[16px] px-5 py-6 md:px-7 md:py-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 md:gap-4 shadow-[0_12px_32px_rgba(0,0,0,0.15)] md:absolute md:bottom-7 md:left-7 md:right-7 md:w-auto"
          >
            <p className="text-[14px] md:text-[13.5px] text-[#4A4A6A] leading-[1.65] font-body m-0 max-w-full md:max-w-[400px]">
              Reliable, technology-powered transportation services built to
              support children, families, schools, and healthcare communities.
            </p>

            <div className="flex flex-row gap-3 shrink-0 w-full md:w-auto">
              <Link href="#become-customer" className="flex-1 md:flex-initial">
                <Button
                  label="Request a Ride"
                  bgColor="bg-white"
                  textColor="text-yuni-purple"
                  borderColor="border-yuni-purple"
                  hoverBgValue="yuni-purple"
                  hoverTextValue="white"
                  width="w-full text-sm py-3 md:py-2.5 md:px-5"
                />
              </Link>

              <Link href="/become-a-driver" className="flex-1 md:flex-initial">
                <Button
                  label="Become a Driver"
                  bgColor="bg-yuni-purple"
                  textColor="text-white"
                  borderColor="border-yuni-purple"
                  hoverBgValue="white"
                  hoverTextValue="yuni-purple"
                  width="w-full text-sm py-3 md:py-2.5 md:px-5"
                />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
