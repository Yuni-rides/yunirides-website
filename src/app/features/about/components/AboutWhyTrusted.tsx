"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/shared/Button";

export default function AboutWhyTrusted() {
  return (
    <section className="bg-[#FAF8F0] px-4 md:px-[40px] lg:px-[79px] py-14 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[80%] md:w-[52%] h-[40%] md:h-[52%] bg-[#EFF2FF] rounded-[0_0_80%_0] z-0 pointer-events-none opacity-80 md:opacity-100" />

      <div className="max-w-7xl mx-auto relative z-[1] flex flex-col gap-8 md:gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[60px] items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex flex-col items-start"
          >
            <div className="bg-[#EFF2FF] w-full md:w-[444px] min-h-[100px] md:h-[160px] rounded-[24px] md:rounded-[30px] mb-6 md:mb-8 flex items-center  py-5 md:py-0">
              <h2 className="font-heading font-bold text-[26px] md:text-[clamp(1.3rem,2vw,1.75rem)] text-[#1A1A2E] leading-[1.3] m-0">
                Why Yuni Rides Is
                <br />
                the Trusted Choice
              </h2>
            </div>

            <div className="flex flex-row items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
              <Link
                href="/contact-us"
                className="flex-1 sm:flex-initial w-full sm:w-[180px]"
              >
                <Button
                  label="Contact us"
                  bgColor="bg-yuni-purple"
                  textColor="text-white"
                  borderColor="border-yuni-purple"
                  hoverBgValue="white"
                  hoverTextValue="yuni-purple"
                  width="w-full text-sm font-semibold py-4 md:py-[18px] rounded-[12px] md:rounded-[14px] shadow-sm justify-center"
                />
              </Link>

              <a
                href="tel:4155352155"
                className="flex-1 sm:flex-initial w-full sm:w-[190px]"
              >
                <Button
                  label="415-535-2155"
                  bgColor="bg-white"
                  textColor="text-yuni-purple"
                  borderColor="border-[#DDE2FF] md:border-yuni-purple"
                  hoverBgValue="yuni-purple"
                  hoverTextValue="white"
                  width="w-full text-sm font-semibold py-4 md:py-[18px] rounded-[12px] md:rounded-[14px] shadow-sm justify-center"
                  icon={
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-1"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  }
                />
              </a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="text-[14px] md:text-[13.5px] text-[#4A4A6A] leading-[1.8] md:leading-[1.9] font-body text-left md:text-justify pt-1 md:pt-2 m-0"
          >
            Choosing Yuni Rides means partnering with a transportation service
            built on safety, trust, and genuine care. We understand how critical
            reliable transportation is for children, and we take that
            responsibility seriously. Every driver is carefully vetted,
            professionally trained, and dedicated to delivering the highest
            standard of service—so families can have complete peace of mind
            knowing their child is in safe, capable hands.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.005 }}
          className="relative w-full h-[250px] sm:h-[400px] md:h-[600px] lg:h-[720px] rounded-[24px] md:rounded-[37px] overflow-hidden shadow-[0_8px_32px_rgba(44,57,121,0.08)] mt-2 md:mt-0"
        >
          <Image
            src="/images/about-why.png"
            alt="Yuni Rides driver safely transporting a child to school"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
