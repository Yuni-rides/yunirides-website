"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does Yuni Rides comply with IDEA and IEP transportation requirements?",
    answer:
      "Yuni Rides provides door-to-door transportation as specified in each student's IEP. Our drivers receive specialized training in behavior management, medical needs, and wheelchair securement. We coordinate directly with district special education directors to ensure full IDEA compliance.",
  },
  {
    question: "What is McKinney-Vento transportation and how does Yuni Rides support it?",
    answer:
      "The McKinney-Vento Act requires districts to transport homeless students to their school of origin. Yuni Rides partners with district liaisons to provide stable, reliable transportation regardless of housing changes, ensuring compliance with federal mandates.",
  },
  {
    question: "How do school districts start a contract with Yuni Rides?",
    answer:
      "Districts can request a quote through our district inquiry form or call 415-535-2155. We conduct a needs assessment, provide a customized routing plan, and finalize a service agreement with transparent per-student or per-route pricing.",
  },
  {
    question: "What states does Yuni Rides operate in?",
    answer:
      "Yuni Rides currently provides student transportation services in Washington, California, Arizona, Texas, and Illinois, with plans to expand to additional states.",
  },
  {
    question: "What vehicle and safety standards does Yuni Rides maintain?",
    answer:
      "All vehicles are ADA-compliant with wheelchair lifts, GPS tracking, and two-way communication. Drivers pass background checks, drug screening, and specialized training in student safety and special-needs care.",
  },
];

interface FAQCardProps {
  faq: { question: string; answer: string };
  index: number;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
  className?: string;
}

function FAQCard({
  faq,
  index,
  openIndex,
  setOpenIndex,
  className = "",
}: FAQCardProps) {
  const isOpen = openIndex === index;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`absolute transition-all duration-300 ${className}`}
      style={{ zIndex: isOpen ? 50 : 10 }}
    >
      <motion.button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        whileTap={{ scale: 0.98 }}
        aria-expanded={isOpen}
        className={`w-full border-none cursor-pointer flex items-center justify-between gap-2 px-4 py-[10px] text-left shadow-[0_4px_15px_rgba(44,57,121,0.08)] transition-colors duration-200 ${
          isOpen
            ? "bg-[#2C3979] rounded-[12px_12px_0_0]"
            : "bg-white rounded-[12px]"
        }`}
      >
        <span
          className={`font-heading font-semibold text-[13px] flex-1 leading-[1.4] ${isOpen ? "text-white" : "text-[#2C3979]"}`}
        >
          {faq.question}
        </span>
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isOpen ? "bg-white/20" : "bg-[#EFF2FF]"}`}
        >
          {isOpen ? (
            <Minus size={11} color="white" />
          ) : (
            <Plus size={11} color="#2C3979" />
          )}
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="bg-[#2C3979] rounded-[0_0_12px_12px] px-4 pt-[4px] pb-4 overflow-hidden shadow-[0_10px_25px_rgba(44,57,121,0.15)]"
          >
            <p className="text-[12px] text-white/95 leading-[1.6] font-body m-0 text-left">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <span className="sr-only">{faq.answer}</span>
      )}
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  return (
    <section className="bg-[#FAF8F0] px-4 py-12 md:py-10 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center md:mb-8 mb-4 hidden md:block">
          <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-7 rounded-full text-[14px] font-medium font-body">
            FAQs
          </span>
        </div>

        <div className="hidden md:block relative w-full h-[520px]">
          <div className="absolute left-[5%] bottom-5 w-[360px] h-[380px] z-0">
            <div className="absolute -top-12 left-6 w-[64px] h-[64px] rounded-full bg-[#E5EAFF] flex items-center justify-center text-[32px] text-[#822C89] font-bold shadow-sm">
              ?
            </div>
            <div className="absolute top-[28px] -left-4 text-[22px] text-[#822C89] font-bold opacity-30">
              ?
            </div>
            <div className="absolute top-[32px] left-[68px] bg-white rounded-full px-5 py-2 text-[14px] font-bold text-[#2C3979] font-heading shadow-[0_4px_12px_rgba(44,57,121,0.06)]">
              FAQ
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/images/faq-illustration.png"
                alt="Yuni Rides frequently asked questions"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

          <FAQCard faq={faqs[0]} index={0} openIndex={openIndex} setOpenIndex={setOpenIndex} className="w-[260px] left-[26%] top-[25px]" />
          <FAQCard faq={faqs[1]} index={1} openIndex={openIndex} setOpenIndex={setOpenIndex} className="w-[280px] right-[4%] top-[110px]" />
          <FAQCard faq={faqs[2]} index={2} openIndex={openIndex} setOpenIndex={setOpenIndex} className="w-[340px] left-[34%] top-[165px]" />
          <FAQCard faq={faqs[3]} index={3} openIndex={openIndex} setOpenIndex={setOpenIndex} className="w-[290px] right-[2%] bottom-[60px]" />
          <FAQCard faq={faqs[4]} index={4} openIndex={openIndex} setOpenIndex={setOpenIndex} className="w-[310px] left-[32%] bottom-[35px]" />
        </div>

        <div className="flex md:hidden flex-col gap-4 max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#E5EAFF] text-[#822C89] text-xs font-bold rounded-full px-3 py-1">
              FAQ
            </span>
            <h2 className="text-[#2C3979] font-heading font-bold text-lg">
              Frequently Asked Questions
            </h2>
          </div>

          {faqs.map((faq, i) => (
            <div key={i} className="relative static">
              <FAQCard
                faq={faq}
                index={i}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
                className="relative top-0 left-0 right-0 w-full"
              />
              {openIndex === i && (
                <div className="h-[10px] pointer-events-none invisible" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}