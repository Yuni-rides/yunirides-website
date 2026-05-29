'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { question: '1. What states does Yuni Rides operate in?', answer: 'Yuni Rides currently operates in Washington state including cities like Seattle, Tacoma, Bellevue, Renton, and more. We are expanding rapidly across the U.S.' },
  { question: '2. How does Yuni Rides ensure the safety of my child?', answer: 'We conduct thorough background checks on all drivers, use real-time GPS tracking, and require regular vehicle inspections to ensure every ride is safe.' },
  { question: '3. Are your drivers trained to work with children?', answer: 'Yes! All our drivers are specially trained to work with children including those with special needs. They are compassionate, patient, and certified.' },
  { question: '4. Can I track my child\'s ride?', answer: 'Absolutely! Our app provides real-time GPS tracking so parents can monitor their child\'s ride from pickup to drop-off at all times.' },
  { question: '5. How can I book a ride with Yuni Rides?', answer: 'You can book a ride through our website by filling out the Start Your Journey form, or by calling us directly at 415-535-2155.' },
  { question: '6. What type of vehicles do you use?', answer: 'We use clean, well-maintained sedans, SUVs, and accessible vans equipped to accommodate children including those with special needs.' },
]

function FAQCard({ faq, index, openIndex, setOpenIndex, width }: {
  faq: { question: string; answer: string }
  index: number
  openIndex: number | null
  setOpenIndex: (i: number | null) => void
  width: string
}) {
  const isOpen = openIndex === index
  return (
    <motion.div
      style={{ width }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <motion.button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        whileTap={{ scale: 0.98 }}
        className={`w-full border-none cursor-pointer flex items-center justify-between gap-2 px-[14px] py-3 text-left shadow-[0_2px_10px_rgba(44,57,121,0.09)] ${
          isOpen ? 'bg-[#2C3979] rounded-[14px_14px_0_0]' : 'bg-white rounded-[14px]'
        }`}
      >
        <span className={`font-heading font-semibold text-[12px] flex-1 leading-[1.4] ${isOpen ? 'text-white' : 'text-[#2C3979]'}`}>
          {faq.question}
        </span>
        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isOpen ? 'bg-white/20' : 'bg-[#EFF2FF]'}`}>
          {isOpen ? <Minus size={10} color="white" /> : <Plus size={10} color="#2C3979" />}
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-[#2C3979] rounded-[0_0_14px_14px] px-[14px] pt-[6px] pb-3 overflow-hidden"
          >
            <p className="text-[11px] text-white/90 leading-[1.75] font-body m-0 text-justify">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#FAF8F0] px-4 md:px-[40px] lg:px-[79px] pt-[60px] pb-[80px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[460px_1fr] gap-[40px] items-start">

        {/* LEFT — illustration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pt-5 hidden md:block"
        >
          {/* ? bubble big */}
          <div className="absolute top-0 left-[70px] w-[54px] h-[54px] rounded-full bg-[#E5EAFF] flex items-center justify-center text-[26px] text-[#822C89] font-bold z-10">
            ?
          </div>
          {/* ? small */}
          <div className="absolute top-[62px] left-[48px] text-[16px] text-[#822C89] font-bold opacity-50">
            ?
          </div>
          {/* FAQ pill */}
          <div className="absolute top-[82px] left-[80px] bg-white rounded-[20px] px-[18px] py-[6px] text-[14px] font-semibold text-[#2C3979] font-heading shadow-[0_2px_8px_rgba(44,57,121,0.1)] z-10">
            FAQ
          </div>

          {/* Illustration */}
          <div className="relative w-[440px] h-[500px] mt-[80px] -ml-5">
            <Image
              src="/images/faq-illustration.png"
              alt="FAQ"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </motion.div>

        {/* RIGHT — FAQ cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-5"
        >
          {/* DESKTOP — scattered layout */}
          <div className="hidden md:block">
            <div className="flex gap-5 mb-4">
              <FAQCard faq={faqs[0]} index={0} openIndex={openIndex} setOpenIndex={setOpenIndex} width="210px" />
              <div className="ml-[30px]">
                <FAQCard faq={faqs[1]} index={1} openIndex={openIndex} setOpenIndex={setOpenIndex} width="230px" />
              </div>
            </div>
            <div className="flex justify-center mb-4 pl-[60px]">
              <FAQCard faq={faqs[2]} index={2} openIndex={openIndex} setOpenIndex={setOpenIndex} width="220px" />
            </div>
            <div className="flex gap-5 mb-4">
              <FAQCard faq={faqs[3]} index={3} openIndex={openIndex} setOpenIndex={setOpenIndex} width="210px" />
              <div className="ml-5">
                <FAQCard faq={faqs[4]} index={4} openIndex={openIndex} setOpenIndex={setOpenIndex} width="220px" />
              </div>
            </div>
            <div className="flex justify-center pl-[30px]">
              <FAQCard faq={faqs[5]} index={5} openIndex={openIndex} setOpenIndex={setOpenIndex} width="210px" />
            </div>
          </div>

          {/* MOBILE — stack */}
          <div className="flex md:hidden flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQCard key={i} faq={faq} index={i} openIndex={openIndex} setOpenIndex={setOpenIndex} width="100%" />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}