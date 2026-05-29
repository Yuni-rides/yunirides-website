'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

function FloatLabel({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative">
      <label className="absolute top-2 left-[14px] text-[11px] text-[#8888AA] z-[1] pointer-events-none font-body leading-none">
        {label}
      </label>
      {children}
    </div>
  )
}

const inputClass = "w-full pt-[26px] pb-2 px-[14px] rounded-lg border border-[#DDE2FF] text-[13px] text-[#1A1A2E] bg-white font-body outline-none box-border focus:border-[#822C89] focus:ring-1 focus:ring-[#822C89]/10 transition-all"

export default function BecomeCustomer() {
  const [form, setForm] = useState({
    fullName: '', email: '', contactNumber: '', city: '',
    childFirstName: '', age: '', numberOfChildren: '', specialNeeds: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon.')
  }

  return (
    <section className="py-20 bg-[#FAF8F0]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Lavender rounded box — Figma: 1280x1861, radius:40px, #EFF2FF */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#EFF2FF] rounded-[40px] px-6 md:px-12 py-12"
        >
          {/* Label */}
          <div className="text-center mb-8">
            <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-7 rounded-full text-[14px] font-medium font-body">
              Become A Customer
            </span>
          </div>

          {/* White card */}
          <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_32px_rgba(44,57,121,0.08)]">

            {/* TOP — illustration + text */}
            <div className="flex flex-col md:grid md:grid-cols-2 items-center p-6 md:p-[2.5rem_2.5rem_2rem] gap-8"
>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-[220px] w-full"
              >
                <Image src="/images/driver-illustration.png" alt="Yunirides driver with child" fill className="object-contain object-left-center" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="font-heading font-extrabold text-[clamp(1.2rem,2.5vw,1.5rem)] text-[#2C3979] leading-[1.35] mb-4">
                  Technology meets care - We transport the future
                </h2>
                <p className="text-[12px] text-[#4A4A6A] leading-[1.85] text-justify font-body">
                  At Yuni Rides, we are committed to providing top-tier, dependable transportation services designed specifically for children. With a focus on safety, Care, and professionalism, we take pride in offering a service that families and communities can trust. Our dedicated team ensures every child&apos;s journey is secure, comfortable, and on time, making us a leader in child-focused transportation solution across the nation.
                </p>
              </motion.div>
            </div>

            {/* FORM */}
            <div className="p-6 md:p-[2rem_2.5rem_2.5rem]">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4 flex-wrap">
                <div>
                  <h3 className="font-heading font-bold text-[1.2rem] text-[#2C3979] mb-1">Start Your Journey</h3>
                  <p className="text-[12px] text-[#4A4A6A] font-body max-w-[320px] leading-[1.6] m-0">
                    Join Yuni Rides and drive change with us! Earn great pay while making a meaningful impact in the lives of disabled children.
                  </p>
                </div>
                <span className="bg-[#E5EAFF] text-[#4A4A6A] py-2 px-4 rounded-[10px] text-[13px] font-medium font-body shrink-0">
                  Parent / Guardian
                </span>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <FloatLabel label="Full Name">
                    <input name="fullName" type="text" value={form.fullName} onChange={handleChange} className={inputClass} />
                  </FloatLabel>
                  <FloatLabel label="Email">
                    <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} />
                  </FloatLabel>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <FloatLabel label="Contact Number">
                    <input name="contactNumber" type="tel" value={form.contactNumber} onChange={handleChange} className={inputClass} />
                  </FloatLabel>
                  <FloatLabel label="Enter your city or town name.">
                    <input name="city" type="text" value={form.city} onChange={handleChange} className={inputClass} />
                  </FloatLabel>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <p className="text-[14px] font-semibold text-[#2C3979] font-heading m-0 whitespace-nowrap">Child Information</p>
                  <div className="flex-1" style={{ height: '1px', background: '#E5EAFF' }} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <FloatLabel label="Child's First Name">
                    <input name="childFirstName" type="text" value={form.childFirstName} onChange={handleChange} className={inputClass} />
                  </FloatLabel>
                  <FloatLabel label="Age">
                    <input name="age" type="number" value={form.age} onChange={handleChange} className={inputClass} />
                  </FloatLabel>
                </div>

                <div className="w-full sm:w-1/2 mb-4">
                  <FloatLabel label="Number of Children Needing Transport">
                    <input name="numberOfChildren" type="number" value={form.numberOfChildren} onChange={handleChange} className={inputClass} />
                  </FloatLabel>
                </div>

                <div className="mb-6">
                  <FloatLabel label="Special Needs or Care Requirements (Optional)">
                    <textarea name="specialNeeds" value={form.specialNeeds} onChange={handleChange} rows={3}
                      className={`${inputClass} resize-none pt-7`} />
                  </FloatLabel>
                </div>

                <div className="flex justify-end">
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-secondary w-full sm:w-[201px] h-[70px] rounded-[10px] justify-center"
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}