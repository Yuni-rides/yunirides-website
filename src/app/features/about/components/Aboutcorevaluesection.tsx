"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/shared/Button";

const values = [
  {
    number: "01",
    title: "Saftey First",
    image: "/images/safety.png",
    description:
      "The safety of the transport is our highest priority. Every journey is handled with the utmost caution, adhering to strict safety protocols and utilizing the latest technology to ensure that child is in safe hands.",
  },
  {
    number: "02",
    title: "Trust",
    image: "/images/trust.png",
    description:
      "We know that every child is unique, and our drivers and staff are trained to provide transportation with care, understanding, and compassion. Our goal is to create an environment where children feel comfortable, supported, and respected during their rides.",
  },
  {
    number: "03",
    title: "Care and compassion",
    image: "/images/care.png",
    description:
      "We know that every child is unique, and our drivers and staff are trained to provide transportation with care, understanding, and compassion.",
  },
  {
    number: "04",
    title: "Reliability",
    image: "/images/reliability.png",
    description:
      "Families depend on us to be on time, every time. Whether it's for school, appointments, or other commitments, we ensure dependable and seamless transportation.",
  },
  {
    number: "05",
    title: "Integrity",
    image: "/images/care.png",
    description:
      "We conduct our business with honesty and transparency. Every member of Yuni Rides is committed to upholding the highest ethical standards.",
  },
  {
    number: "06",
    title: "Professionalism",
    image: "/images/professionalism.png",
    description:
      "Our team of drivers and support staff are highly trained professionals dedicated to providing the best possible service.",
  },
];

export default function AboutCoreValuesSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="bg-[#FAF8F0] px-4 sm:px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-7 rounded-full text-[14px] font-medium font-body">
            Our Core Values
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#EFF2FF] rounded-[24px] p-5 sm:p-8 md:p-12 grid grid-cols-1 lg:grid-cols-[460px_1fr] xl:grid-cols-[520px_1fr] gap-8 lg:gap-16 min-h-[520px]"
        >
          {/* LEFT CONTAINER: Context Canvas Viewer */}
          <div className="flex flex-col justify-between gap-5 order-2 lg:order-1">
            <div className="flex flex-col gap-5">
              {/* Image Card Container: Ab yeh image ke exact aspect ratio ke mutabik scale hoga */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[12/10] overflow-hidden shrink-0 ">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={values[activeIndex].image}
                      alt={values[activeIndex].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="min-h-[85px]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="text-[13.5px] text-[#4A4A6A] leading-[1.8] font-body text-left md:text-justify m-0"
                  >
                    {values[activeIndex].description}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4 lg:mt-auto pt-2 flex-wrap sm:flex-nowrap">
              <Link
                href="/contact-us"
                className="w-full sm:w-auto lg:flex-1 sm:flex-initial"
              >
                <Button
                  label="Contact us"
                  bgColor="bg-yuni-purple"
                  textColor="text-white"
                  borderColor="border-yuni-purple"
                  hoverBgValue="white"
                  hoverTextValue="yuni-purple"
                  width="w-full text-[13.5px] py-3.5 rounded-[12px] justify-center font-semibold"
                />
              </Link>
              <Link
                href="/become-a-driver"
                className="w-full sm:w-auto lg:flex-1 sm:flex-initial"
              >
                <Button
                  label="Become a Driver"
                  bgColor="bg-white"
                  textColor="text-[#4A4A6A]"
                  borderColor="border-[#DDE2FF]"
                  hoverBgValue="yuni-purple"
                  hoverTextValue="white"
                  width="w-full text-[13.5px] py-3.5 rounded-[12px] justify-center font-semibold"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center order-1 lg:order-2 w-full">
            {values.map((value, i) => {
              const isSelected = i === activeIndex;
              return (
                <div key={i} className="w-full">
                  <div
                    className={`h-[1px] w-full transition-colors duration-300 ${
                      isSelected ? "bg-[#822C89]" : "bg-[#D0D4EE]/60"
                    }`}
                  />

                  <button
                    onClick={() => setActiveIndex(i)}
                    type="button"
                    className="w-full flex items-center gap-4 sm:gap-6 py-4 md:py-5 px-1 bg-transparent border-0 outline-none cursor-pointer text-left group transition-all"
                  >
                    <span
                      className={`font-heading font-bold text-[15px] md:text-[16px] min-w-[28px] md:min-w-[36px] transition-all duration-300 ${
                        isSelected
                          ? "text-[#822C89] opacity-100 transform translate-x-0"
                          : "text-transparent opacity-0 -translate-x-2"
                      }`}
                    >
                      {value.number}
                    </span>

                    <span
                      className={`font-heading transition-all duration-300 tracking-wide ${
                        isSelected
                          ? "text-[20px] md:text-[22px] text-[#822C89] font-bold"
                          : "text-[16px] md:text-[18px] text-[#9090B0] font-normal group-hover:text-[#4A4A6A]"
                      }`}
                    >
                      {value.title}
                    </span>
                  </button>
                </div>
              );
            })}
            <div className="h-[1px] w-full bg-[#D0D4EE]/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
