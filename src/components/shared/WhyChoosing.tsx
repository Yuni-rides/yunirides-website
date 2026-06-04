"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./Button";

export default function WhyChoosing() {
  return (
    <section className="bg-[#F7F5F0] pt-[60px] pb-[80px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-[48px] px-4"
      >
        <h2 className="font-heading text-[26px] font-bold text-[#2D0F54] m-0">
          Why choosing{" "}
          <span className="border-b-2 border-[#6B2FA0] pb-[2px] text-[#2D0F54]">
            Yuni Rides
          </span>
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[22px]">
        {/* Row 1 — image left, text right */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-stretch gap-[22px]"
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-[302px] h-[220px] md:h-[235px] rounded-[40px] overflow-hidden shrink-0 relative shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
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
            className="flex-1 min-h-[180px] md:h-[235px] rounded-[40px] bg-[#A1AF80] p-[24px_28px] md:p-[28px_36px] flex flex-col justify-center box-border"
          >
            <h3 className="font-heading text-[18px] md:text-[20px] font-bold text-yuni-navy m-0 mb-[10px]">
              School Districts:
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
          className="flex flex-col-reverse md:flex-row items-stretch gap-[22px]"
        >
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 min-h-[180px] md:h-[235px] rounded-[40px] bg-[#A1AF80] p-[24px_28px] md:p-[28px_36px] flex flex-col justify-center box-border"
          >
            <h3 className="font-heading text-[18px] md:text-[20px] font-bold text-yuni-navy m-0 mb-[10px]">
              Hospitals &amp; Healthcare Facilities:
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
            className="w-full md:w-[302px] h-[220px] md:h-[235px] rounded-[40px] overflow-hidden shrink-0 relative shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
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
          className="flex flex-col md:flex-row items-start gap-[22px]"
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-[302px] h-[220px] md:h-[235px] rounded-[40px] overflow-hidden shrink-0 relative shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
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
            className="w-full md:flex-1 lg:w-[628px] min-h-[180px] md:h-[235px] rounded-[40px] bg-[#A1AF80] p-[24px_28px] md:p-[28px_32px] flex flex-col justify-center box-border lg:shrink-0"
          >
            <h3 className="font-heading text-[18px] md:text-[20px] font-bold text-yuni-navy m-0 mb-[10px]">
              Parents, Students &amp; Guardians.
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
            className="w-full md:w-[302px] shrink-0 flex flex-col gap-[24px] md:pt-[78px]"
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
    </section>
  );
}
