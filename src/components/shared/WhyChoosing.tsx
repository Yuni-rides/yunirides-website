"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const categories = [
  {
    id: "districts",
    title: "School Districts:",
    shortTitle: "Districts",
    image: "/images/school.png",
    description:
      "School districts trust Yuni Rides for consistent, dependable transportation solutions that put student safety and well-being first. Our streamlined operations, transparent reporting, and strong commitment to inclusive and special-needs transportation—powered by innovative technology—make us a trusted partner in supporting student success.",
  },
  {
    id: "healthcare",
    title: "Hospitals & Healthcare Facilities:",
    shortTitle: "Healthcare",
    image: "/images/hospital.png",
    description:
      "Hospitals and healthcare facilities trust Yuni Rides to provide safe, reliable, and compassionate transportation for patients and families. We support medical appointments, therapy sessions, and specialized care needs with professional drivers, strict safety standards, and technology-enabled coordination—ensuring every journey is timely, secure, and stress-free.",
  },
  {
    id: "parents",
    title: "Parents, Students & Guardians:",
    shortTitle: "Parents",
    image: "/images/parents.png",
    description:
      "Yuni Rides gives parents and guardians confidence through safe, transparent, and child-focused transportation—every ride, every day. Our solutions are designed around the peace of mind that families expect when trusting us with their loved ones.",
  },
];

export default function WhyChoosing() {
  const [activeTab, setActiveTab] = useState("districts");
  const activeData =
    categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section className="bg-[#F7F5F0] pt-[60px] pb-[80px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-[36px] md:mb-[48px] px-4"
      >
        <h2 className="font-heading text-[26px] md:text-[28px] font-bold text-[#2D0F54] m-0">
          Why choosing{" "}
          <span className="border-b-2 border-[#6B2FA0] pb-[2px] text-[#2D0F54]">
            Yuni Rides
          </span>
        </h2>
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* DESKTOP VIEW — Preserving your original visual structure intact */}
      {/* ---------------------------------------------------------------- */}
      <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-col gap-[22px]">
        {/* Row 1 — image left, text right */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-row items-stretch gap-[22px]"
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-[302px] h-[235px] rounded-[40px] overflow-hidden shrink-0 relative shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
          >
            <Image
              src="/images/school.png"
              alt="School Districts"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 h-[235px] rounded-[40px] bg-[#A1AF80] p-[28px_36px] flex flex-col justify-center box-border"
          >
            <h3 className="font-heading text-[20px] font-bold text-yuni-navy m-0 mb-[10px]">
              {categories[0].title}
            </h3>
            <p className="font-body text-[14px] text-[#353637] leading-[1.75] m-0 text-justify">
              School districts trust <strong>Yuni Rides</strong> for consistent,
              dependable transportation solutions that put student safety and
              well-being first. Our streamlined operations, transparent
              reporting, and strong commitment to inclusive and special-needs
              transportation—powered by innovative technology—make us a trusted
              partner in supporting student success.
            </p>
          </motion.div>
        </motion.div>

        {/* Row 2 — text left, image right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-row items-stretch gap-[22px]"
        >
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 h-[235px] rounded-[40px] bg-[#A1AF80] p-[28px_36px] flex flex-col justify-center box-border"
          >
            <h3 className="font-heading text-[20px] font-bold text-yuni-navy m-0 mb-[10px]">
              {categories[1].title}
            </h3>
            <p className="font-body text-[14px] text-[#353637] leading-[1.75] m-0 text-justify">
              Hospitals and healthcare facilities trust{" "}
              <strong>Yuni Rides</strong> to provide safe, reliable, and
              compassionate transportation for patients and families. We support
              medical appointments, therapy sessions, and specialized care needs
              with professional drivers, strict safety standards, and
              technology-enabled coordination—ensuring every journey is timely,
              secure, and stress-free for both patients and care teams.
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-[302px] h-[235px] rounded-[40px] overflow-hidden shrink-0 relative shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
          >
            <Image
              src="/images/hospital.png"
              alt="Hospitals & Healthcare"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Row 3 — image, text, cta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-row items-start gap-[22px]"
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-[302px] h-[235px] rounded-[40px] overflow-hidden shrink-0 relative shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
          >
            <Image
              src="/images/parents.png"
              alt="Parents, Students & Guardians"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-[628px] h-[235px] rounded-[40px] bg-[#A1AF80] p-[28px_32px] flex flex-col justify-center box-border shrink-0"
          >
            <h3 className="font-heading text-[20px] font-bold text-yuni-navy m-0 mb-[10px]">
              {categories[2].title}
            </h3>
            <p className="font-body text-[14px] text-[#353637] leading-[1.75] m-0 text-justify">
              <strong>Yuni Rides</strong> gives parents and guardians confidence
              through safe, transparent, and child-focused transportation—every
              ride, every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-[302px] shrink-0 flex flex-col gap-[24px] pt-[78px]"
          >
            <p className="font-heading text-[25px] font-bold text-[#2D0F54] m-0 leading-[1.3]">
              What are you thinking of?
            </p>
            <Link href={"/contact-us"}>
              <Button
                label="Discuss with Us"
                bgColor="bg-yuni-purple"
                textColor="text-white"
                borderColor="border-yuni-purple"
                hoverBgValue="white"
                width="w-full"
                hoverTextValue="yuni-purple"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* MOBILE VIEW — Premium Segmented Controls & Animated Frame       */}
      {/* ---------------------------------------------------------------- */}
      <div className="block md:hidden px-4">
        {/* Sliding Segment Control Tab */}
        <div className="flex bg-[#EAE8E0] p-1.5 rounded-[24px] mb-[28px] relative overflow-hidden justify-between items-center">
          {categories.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 py-3 text-center rounded-[18px] text-[13px] font-heading font-bold transition-colors duration-300 z-10 ${
                  isSelected ? "text-white" : "text-[#2D0F54]/70"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeMobileTabIndicator"
                    className="absolute inset-0 bg-[#6B2FA0] rounded-[18px] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.shortTitle}
              </button>
            );
          })}
        </div>

        {/* Tab Card Presentation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-4"
          >
            {/* Aspect Ratio Controlled Fixed Image Box */}
            <div className="w-full aspect-[4/3] max-h-[220px] rounded-[32px] overflow-hidden relative shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
              <Image
                src={activeData.image}
                alt={activeData.shortTitle}
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw"
              />
            </div>

            {/* Content Display Card */}
            <div className="rounded-[32px] bg-[#A1AF80] p-[24px_24px] shadow-sm">
              <h3 className="font-heading text-[18px] font-bold text-yuni-navy m-0 mb-[8px]">
                {activeData.title}
              </h3>
              <p className="font-body text-[13.5px] text-[#2F3031] leading-[1.65] m-0 text-justify">
                {activeData.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Isolated Clean CTA Footer for Mobile */}
        <div className="mt-[40px] bg-white rounded-[32px] p-6 text-center border border-[#EAE8E0] shadow-sm">
          <p className="font-heading text-[20px] font-bold text-[#2D0F54] mb-4">
            What are you thinking of?
          </p>
          <Link href={"/contact-us"} className="block">
            <Button
              label="Discuss with Us"
              bgColor="bg-yuni-purple"
              textColor="text-white"
              borderColor="border-yuni-purple"
              hoverBgValue="white"
              width="w-full"
              hoverTextValue="yuni-purple"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
