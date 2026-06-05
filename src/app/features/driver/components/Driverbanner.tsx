"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/shared/Button";

export default function DriverBanner() {
  return (
    <section className="bg-[#FAF8F0] px-6 sm:px-12 lg:px-20 pt-24 pb-0 relative overflow-hidden min-h-[560px] md:min-h-[640px] flex items-center">
      {/* Light Lavender Gradient Blob Right */}
      <div
        className="absolute top-0 right-0 w-[60%] h-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 600px at 85% 50%, #EFF2FF 0%, transparent 70%)",
        }}
      />

      {/* Dotted Pattern Background Overlay */}
      <div
        className="absolute bottom-0 right-[5%] w-[45%] h-[50%] pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(130,44,137,0.06) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-[1] grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] items-center gap-12 lg:gap-8">
        {/* LEFT COMPONENT — Typographic Brand Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center text-left py-6"
        >
          <h1 className="font-heading font-normal text-[42px] sm:text-[52px] md:text-[56px] text-[#2C2C3E] leading-[1.15] mb-6 tracking-tight">
            Start Your <br className="hidden sm:inline" />
            Journey as a <br />
            <span className="text-yuni-purple font-semibold">
              Yuni Rides
            </span>{" "}
            <br />
            Driver
          </h1>

          <p className="text-[15px] sm:text-[16px] text-[#5A5A75] leading-[1.65] font-body mb-8 max-w-[380px]">
            Help families by delivering safe, caring, and dependable rides for
            kids.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link href="#become-customer" className="inline-block">
              <Button
                label="Become a Rider"
                bgColor="bg-yuni-purple"
                textColor="text-white"
                borderColor="border-white"
                hoverBgValue="white"
                hoverTextValue="yuni-purple"
                width="text-[14px] font-medium font-body px-8 py-3.5"
              />
            </Link>

            <Link href="/contact-us" className="inline-block">
              <Button
                label="Contact Us"
                bgColor="bg-white"
                textColor="text-yuni-purple"
                borderColor="border-[#DDE2FF]"
                hoverBgValue="yuni-purple"
                hoverTextValue="white"
                width="text-[14px] font-semibold font-body px-8 py-3.5"
              />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COMPONENT — Hero Illustration Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[520px] md:-mt-0 -mt-14  flex items-end self-end lg:mt-auto"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/become-driver-hero.png"
              alt="Yunirides drivers with purple car illustration"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
