'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

const inputClass = "w-full pt-[26px] pb-2 px-[14px] rounded-lg border border-[#DDE2FF] text-[13px] text-[#1A1A2E] bg-white font-body outline-none box-border focus:border-[#822C89] focus:ring-1 focus:ring-[#822C89]/10 transition-all"

function FloatLabel({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative">
      <label className="absolute top-2 left-[14px] text-[11px] text-[#8888AA] font-body pointer-events-none z-[1] leading-none">
        {label}
      </label>
      {children}
    </div>
  )
}

function CheckBox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onChange}
      whileTap={{ scale: 0.9 }}
      className={`w-8 h-8 rounded-[6px] border-[1.5px] border-[#DDE2FF] cursor-pointer flex items-center justify-center shrink-0 transition-colors duration-200 ${checked ? 'bg-[#2C3979] border-[#2C3979]' : 'bg-white'}`}
    >
      {checked && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </motion.button>
  )
}

export default function DriverForm() {
  const [form, setForm] = useState({
    fullName: '', email: '', contactNumber: '', city: '',
    vehicleType: '', yearsExperience: '',
    hasSSN: true, hasDrivingLicense: true, usedDrugs: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon.')
  }

  return (
    <section className="bg-[#FAF8F0] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFF2FF] rounded-[40px] px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-7 rounded-full text-[14px] font-medium font-body">
            Become Rider
          </span>
        </motion.div>

        {/* White card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_32px_rgba(44,57,121,0.08)]"
        >

          {/* TOP — illustration + text */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-[2.5rem_2.5rem_2rem] gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[300px]"
            >
              <Image src="/images/driver-illustration.png" alt="Yunirides driver" fill className="object-contain object-left-bottom" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-heading font-extrabold text-[clamp(1.3rem,2.5vw,1.7rem)] text-[#2C3979] leading-[1.35] mb-4">
                Technology meets care - We transport the future
              </h2>
              <p className="text-[13px] text-[#4A4A6A] leading-[1.85] text-justify font-body m-0">
                At Yuni Rides, we are committed to providing top-tier, dependable transportation services designed specifically for children. With a focus on safety, Care, and professionalism, we take pride in offering a service that families and communities can trust. Our dedicated team ensures every child&apos;s journey is secure, comfortable, and on time, making us a leader in child-focused transportation solution across the nation. Whether it&apos;s for school or a special appointment, Yuni Rides is here to serve with integrity and compassion.
              </p>
            </motion.div>
          </div>

          {/* FORM */}
          <div className="p-6 md:p-[2rem_2.5rem_2.5rem]">
            <h3 className="font-heading font-bold text-[1.2rem] text-[#2C3979] mb-[6px]">Start Your Journey</h3>
            <p className="text-[13px] text-[#4A4A6A] font-body mb-6 max-w-[360px] leading-[1.6]">
              Join Yuni Rides and drive change with us! Earn great pay while making a meaningful impact in the lives of disabled children.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <FloatLabel label="Full Name">
                  <input name="fullName" type="text" value={form.fullName} onChange={handleChange} className={inputClass} />
                </FloatLabel>
                <FloatLabel label="Email">
                  <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} />
                </FloatLabel>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <FloatLabel label="Contact Number">
                  <input name="contactNumber" type="tel" value={form.contactNumber} onChange={handleChange} className={inputClass} />
                </FloatLabel>
                <FloatLabel label="Enter your city or town name.">
                  <input name="city" type="text" value={form.city} onChange={handleChange} className={inputClass} />
                </FloatLabel>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <FloatLabel label="What type of vehicle do you have?">
                  <input name="vehicleType" type="text" value={form.vehicleType} onChange={handleChange} className={inputClass} />
                </FloatLabel>
                <FloatLabel label="How many years of experience do you have?">
                  <input name="yearsExperience" type="number" value={form.yearsExperience} onChange={handleChange} className={inputClass} />
                </FloatLabel>
              </div>

              {/* Checkboxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div>
                  <p className="text-[12px] text-[#4A4A6A] font-body mb-[10px]">Do you have SSN or ITN?</p>
                  <div className="flex gap-[10px]">
                    <CheckBox checked={form.hasSSN === true} onChange={() => setForm({ ...form, hasSSN: true })} />
                    <CheckBox checked={form.hasSSN === false} onChange={() => setForm({ ...form, hasSSN: false })} />
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#4A4A6A] font-body mb-[10px]">Do you have a driving license?</p>
                  <div className="flex gap-[10px]">
                    <CheckBox checked={form.hasDrivingLicense === true} onChange={() => setForm({ ...form, hasDrivingLicense: true })} />
                    <CheckBox checked={form.hasDrivingLicense === false} onChange={() => setForm({ ...form, hasDrivingLicense: false })} />
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#4A4A6A] font-body mb-[10px]">Have you ever use any recreational drug before?</p>
                  <div className="flex gap-[10px]">
                    <CheckBox checked={form.usedDrugs === false} onChange={() => setForm({ ...form, usedDrugs: false })} />
                    <CheckBox checked={form.usedDrugs === true} onChange={() => setForm({ ...form, usedDrugs: true })} />
                  </div>
                </div>
              </div>

              {/* Submit */}
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
        </motion.div>
      </div>
        </div>
      </div>
    </section>
  )
}