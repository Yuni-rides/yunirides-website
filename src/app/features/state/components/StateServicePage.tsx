"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { StateService } from "../../data/statesData";
import Button from "@/components/shared/Button";
import BecomeCustomer from "@/components/shared/BecomeCustomer";
import FAQSection from "@/components/shared/FaqSection";

export default function StateServicePage({ data }: { data: StateService }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="bg-[#FAF8F0] px-4 sm:px-6 pb-8 pt-6 mt-26">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-[40px] overflow-hidden bg-[#2D0F54] md:bg-transparent h-auto md:h-[560px] flex flex-col justify-between p-6 pb-6 md:p-0 shadow-[0_12px_40px_rgba(45,15,84,0.15)]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full z-0"
            >
              <Image
                src={data.heroImage}
                alt={data.heroTitle}
                fill
                className="object-cover object-center opacity-90 md:opacity-100"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 md:to-black/40" />
            </motion.div>

            <div className="relative z-[2] mt-6 mb-10 md:my-0 md:absolute md:top-1/2 md:left-12 md:-translate-y-[65%] max-w-[580px]">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[clamp(2rem,4vw,3.2rem)] text-white leading-[1.15] m-0 [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]"
              >
                {data.heroTitle}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/90 font-body text-[14px] md:text-[15px] leading-[1.6] mt-4 max-w-[500px] [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]"
              >
                {data.heroSubtitle}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative z-[2] w-full bg-white/95 backdrop-blur-md rounded-[24px] md:rounded-[20px] p-5 md:px-8 md:py-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 md:gap-6 shadow-[0_12px_32px_rgba(0,0,0,0.15)] md:absolute md:bottom-7 md:left-7 md:right-7 md:w-auto overflow-hidden"
            >
              <p className="text-[13.5px] md:text-[14px] text-[#4A4A6A] leading-[1.6] font-body m-0 max-w-full md:max-w-[560px]">
                {data.heroCardText}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto items-stretch sm:items-center">
                <Link
                  href="#become-customer"
                  className="w-full sm:w-auto flex-1 md:flex-initial"
                >
                  <Button
                    label="Request a Ride"
                    bgColor="bg-white"
                    textColor="!text-yuni-purple"
                    borderColor="border-yuni-purple"
                    hoverBgValue="yuni-purple"
                    hoverTextValue="white"
                    width="w-full text-[13px] py-3 md:py-2.5 px-4 md:px-5 rounded-[10px] whitespace-nowrap"
                  />
                </Link>

                <Link
                  href="/become-a-driver"
                  className="w-full sm:w-auto flex-1 md:flex-initial"
                >
                  <Button
                    label="Become a Driver"
                    bgColor="bg-yuni-navy"
                    textColor="!text-white"
                    borderColor="border-yuni-navy"
                    hoverBgValue="yuni-purple"
                    hoverTextValue="white"
                    width="w-full text-[13px] py-3 md:py-2.5 px-4 md:px-5 rounded-[10px] whitespace-nowrap"
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cities We Service */}
      <section className="bg-[#FAF8F0] pt-8 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-[#EEF1FF] rounded-[28px] p-6 sm:p-10 border border-[#E0E5FB] shadow-xs"
          >
            {/* Dynamic Section Title */}
            <motion.h2
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-heading font-semibold text-[22px] sm:text-[26px] text-[#2C3260] tracking-tight mb-1"
            >
              Cities We Serve in {data.stateName}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-[13px] sm:text-[14px] text-[#52577A] font-body mb-8"
            >
              Yuni Rides currently provides special needs student transportation
              across:
            </motion.p>

            {/* City Badges Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mb-8"
            >
              {data.cities.map((city) => (
                <motion.div
                  key={city}
                  variants={badgeVariants}
                  whileHover={{ scale: 1.04, backgroundColor: "#D7C4FF" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center py-2.5 px-3 rounded-full bg-[#E0D3FF] text-[#5A1F87] text-[14px] font-body font-semibold shadow-xs border border-[#D5C2FE]/60 text-center transition-colors cursor-pointer"
                >
                  {city}
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Callout Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-[#FFFDF5] rounded-[20px] flex items-stretch gap-4 border border-[#FAF1DE] overflow-hidden"
            >
              <div className="w-[15px] bg-[#AC258C] shrink-0 rounded-l-[20px]" />
              <p className="text-[13px] sm:text-[13.5px] text-[#4A4D68] font-body px-2 py-8 leading-[1.65] my-auto">
                If your district or family is located in the greater Puget Sound
                area and you don&apos;t see your specific city listed, contact
                us directly — our service areas are expanding.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Know Your Rights / IEP Section */}
      <section className="bg-[#FAF8F0] py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-[#EEF1FF] text-[#3D4580] text-[13px] font-body font-medium px-5 py-1.5 rounded-full mb-5"
          >
            Know Your Rights
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-heading font-semibold text-[24px] sm:text-[32px] text-[#3D4580] leading-[1.25] tracking-tight max-w-2xl mx-auto mb-2"
          >
            {data.spedTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-[13.5px] sm:text-[14.5px] text-[#60658B] font-body mb-10"
          >
            {data.spedSubtitle}
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left"
          >
            {data.knowledgeCards.map((card) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#EEF1FF]/80 hover:bg-[#EEF1FF] rounded-[22px] p-3.5 sm:p-4 flex flex-row items-center gap-4 border border-[#E1E6FA] transition-all shadow-xs"
              >
                <div className="relative w-[120px] sm:w-[155px] h-[120px] sm:h-[185px] shrink-0 rounded-[16px] overflow-hidden bg-slate-200">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex-1 pr-1 sm:pr-2">
                  <h3 className="font-heading font-bold text-[15px] sm:text-[16px] text-[#2C3260] leading-[1.25] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12px] text-[#52577A] font-body leading-[1.55]">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who Chooses & Trusts Us */}
      <section className="bg-[#FAF8F0] py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#EEF1FF] text-[#48538E] text-[14px] sm:text-[15px] font-body font-medium px-6 py-2 rounded-full mb-6"
          >
            Why {data.stateName} Trusts Us
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-[28px] sm:text-[36px] text-[#2C3260] tracking-tight mb-3"
          >
            {data.whyTrustUsTitle || "Districts & Families Choose Yuni Rides"}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[14px] sm:text-[16px] text-[#52577A] font-body max-w-2xl mx-auto mb-12"
          >
            {data.whyTrustUsSubtitle ||
              "Compliance is built into how we operate — not added afterward."}
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex md:grid md:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-6 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {data.whyTrustUsCards?.map((card, idx) => (
              <motion.div
                key={card.title || idx}
                variants={cardVariants}
                className={`snap-center shrink-0 w-[82vw] sm:w-[280px] md:w-auto rounded-[32px] p-6 sm:p-7 flex flex-col items-center text-center shadow-xs border transition-all ${
                  card.isPurple
                    ? "bg-[#712A88] text-white border-transparent"
                    : "bg-[#EEF1FF] text-[#2C3260] border-[#E1E6FA]"
                }`}
              >
                {/* Graphic / Illustration Box */}
                <div className="relative w-full h-[140px] sm:h-[150px] mb-6 flex items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Card Title */}
                <h3
                  className={`font-heading font-bold text-[18px] sm:text-[20px] leading-[1.25] mb-3 ${
                    card.isPurple ? "text-white" : "text-[#2C3260]"
                  }`}
                >
                  {card.title}
                </h3>

                {/* Card Description */}
                <p
                  className={`font-body text-[12.5px] sm:text-[13.5px] leading-[1.6] ${
                    card.isPurple ? "text-white/85" : "text-[#52577A]"
                  }`}
                >
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div id="become-customer">
        <BecomeCustomer />
      </div>

      <FAQSection />
    </>
  );
}
