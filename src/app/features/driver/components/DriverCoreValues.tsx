"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    icons: ["/images/icon-schedule.png", "/images/icon-clock.png"],
    title: "Select Your Own Schedule",
    description:
      "Flexible hours, flexible income. Choose rides that suit your lifestyle.",
  },
  {
    icons: ["/images/icon-earn.png", "/images/icon-clock.png"],
    title: "Earn Money in Your Free Time",
    description:
      "Get paid for rides you complete, during the hours that work for you.",
  },
  {
    icons: ["/images/icon-difference.png"],
    title: "Create a Difference",
    description:
      "Make a positive impact on the lives of families, youth, and children in your community.",
  },
  {
    icons: ["/images/icon-support.png"],
    title: "Support Team",
    description:
      "Our dedicated support team is always available to assist you.",
  },
];

export default function DriverCoreValues() {
  return (
    <section className="bg-[#FAF8F0] px-4 sm:px-12 py-6 relative overflow-hidden">
      {/* Blobs */}
      <div
        className="absolute top-0 right-0 w-[60%] h-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at 80% 50%, #EFF2FF 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[40%] h-[50%] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 400px 300px at 20% 80%, #EFF2FF 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-[1]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-7 rounded-full text-[14px] font-medium font-body">
            Our Core Values
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -4,
                boxShadow: "0 8px 32px rgba(44,57,121,0.13)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-[16px] px-8 py-7 flex items-center gap-6 shadow-[0_2px_16px_rgba(44,57,121,0.07)] cursor-pointer"
            >
              <div className="relative shrink-0">
                <div className="relative w-[70px] h-[70px]">
                  <Image
                    src={item.icons[0]}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                {item.icons[1] && (
                  <div className="absolute -bottom-2 -right-3 w-[32px] h-[32px]">
                    <Image
                      src={item.icons[1]}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-heading font-bold text-[16px] text-[#1A1A2E] mb-2 leading-[1.3]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#4A4A6A] leading-[1.7] font-body m-0">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
