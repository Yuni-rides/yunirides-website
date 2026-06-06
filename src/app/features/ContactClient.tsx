// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'

// export default function ContactClient() {
//   const [form, setForm] = useState({
//     firstName: '', lastName: '', contactNumber: '', email: '', message: '',
//   })
//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setSubmitted(true)
//   }

//   return (
//     <main className="w-full min-h-screen bg-yuni-cream overflow-x-hidden font-body mt-26">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">

//         {/* Navy card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full bg-yuni-navy rounded-3xl overflow-hidden"
//         >
//           {/* Hero image */}
//           <div className="px-4 pt-4 md:px-6 md:pt-6">
//             <div className="relative w-full rounded-2xl overflow-hidden aspect-video">
//               <Image src="/images/contact-hero.png" alt="Yuni Rides support" fill className="object-cover object-center" priority />
//               <div className="absolute inset-0 bg-gradient-to-t from-yuni-navy via-yuni-navy/50 to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 text-center px-6 pb-6 md:pb-10">
//                 <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-tight font-heading">
//                   Get in Touch With
//                 </h1>
//                 <p className="text-xl sm:text-2xl md:text-4xl font-bold text-yuni-purple leading-tight mb-2 font-heading">
//                   Yuni Rides
//                 </p>
//                 <p className="text-white/75 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
//                   At Yuni Rides, communication matters. Reach out anytime and our friendly team will make sure you get the help and answers you need.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Contact buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="flex flex-col sm:flex-row gap-3 px-4 md:px-8 pt-4 pb-12"
//           >
//             <motion.a
//               href="tel:4155352155"
//               whileHover={{ y: -2 }}
//               whileTap={{ scale: 0.97 }}
//               className="flex items-center gap-4 bg-yuni-lavender hover:bg-[#e0e5ff] transition-all flex-1 rounded-[40px] px-6 md:px-8 py-5 md:py-7"
//             >
//               <svg className="w-6 h-6 shrink-0 text-yuni-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//               </svg>
//               <span className="text-yuni-navy font-semibold text-base md:text-lg">415-535-2155</span>
//             </motion.a>
//             <motion.a
//               href="mailto:info@yunirides.com"
//               whileHover={{ y: -2 }}
//               whileTap={{ scale: 0.97 }}
//               className="flex items-center gap-4 bg-yuni-lavender hover:bg-[#e0e5ff] transition-all flex-1 rounded-[40px] px-6 md:px-8 py-5 md:py-7"
//             >
//               <svg className="w-6 h-6 shrink-0 text-yuni-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//               </svg>
//               <span className="text-yuni-navy font-semibold text-base md:text-lg">info@yunirides.com</span>
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         {/* Form — lavender rounded box */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="max-w-4xl mx-auto bg-[#EFF2FF] rounded-[32px] -mt-8 px-4 md:px-8 py-6"
//         >
//           <div className="bg-white rounded-[24px] px-6 md:px-12 py-8">
//             <div className="flex justify-center mb-10">
//               <span className="bg-[#EFF2FF] text-yuni-text-mid text-sm px-6 py-2.5 rounded-full">
//                 First, tell us a little about yourself
//               </span>
//             </div>

//             {submitted ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="text-center py-10"
//               >
//                 <h3 className="text-lg font-bold text-yuni-navy mb-2 font-heading">Message Sent!</h3>
//                 <p className="text-yuni-text-mid text-sm">We'll get back to you as soon as possible.</p>
//               </motion.div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div className="relative">
//                     <label className="absolute -top-2.5 left-3 px-1 text-xs text-yuni-text-mid z-10 bg-white">Full Name</label>
//                     <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required
//                       className="w-full border border-yuni-border rounded-lg px-4 py-3.5 text-sm text-yuni-text-dark bg-white outline-none focus:border-yuni-purple transition-all" />
//                   </div>
//                   <div className="relative">
//                     <label className="absolute -top-2.5 left-3 px-1 text-xs text-yuni-text-mid z-10 bg-white">Last name</label>
//                     <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required
//                       className="w-full border border-yuni-border rounded-lg px-4 py-3.5 text-sm text-yuni-text-dark bg-white outline-none focus:border-yuni-purple transition-all" />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div className="relative">
//                     <label className="absolute -top-2.5 left-3 px-1 text-xs text-yuni-text-mid z-10 bg-white">Contact Number</label>
//                     <input type="tel" name="contactNumber" value={form.contactNumber} onChange={handleChange}
//                       className="w-full border border-yuni-border rounded-lg px-4 py-3.5 text-sm text-yuni-text-dark bg-white outline-none focus:border-yuni-purple transition-all" />
//                   </div>
//                   <div className="relative">
//                     <label className="absolute -top-2.5 left-3 px-1 text-xs text-yuni-text-mid z-10 bg-white">Email</label>
//                     <input type="email" name="email" value={form.email} onChange={handleChange} required
//                       className="w-full border border-yuni-border rounded-lg px-4 py-3.5 text-sm text-yuni-text-dark bg-white outline-none focus:border-yuni-purple transition-all" />
//                   </div>
//                 </div>
//                 <div className="relative">
//                   <label className="absolute -top-2.5 left-3 px-1 text-xs text-yuni-text-mid z-10 bg-white">Message</label>
//                   <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
//                     className="w-full border border-yuni-border rounded-lg px-4 py-3.5 text-sm text-yuni-text-dark bg-white outline-none focus:border-yuni-purple transition-all resize-none" />
//                 </div>
//                 <div className="flex justify-end">
//                   <motion.button
//                     type="submit"
//                     whileHover={{ y: -2 }}
//                     whileTap={{ scale: 0.97 }}
//                     className="btn-secondary w-full sm:w-[201px] h-[70px] rounded-[10px] justify-center"
//                   >
//                     Submit
//                   </motion.button>
//                 </div>
//               </form>
//             )}
//           </div>
//         </motion.div>

//       </div>
//     </main>
//   )
// }

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/shared/Button";

// Resuable InputField structure identical to your Driver form
function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  optionalText,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  optionalText?: string;
  required?: boolean;
}) {
  return (
    <fieldset className="border border-[#DDE2FF] rounded-lg px-3 pb-1.5 pt-0 bg-white w-full transition-all duration-200 focus-within:border-[#822C89] focus-within:ring-1 focus-within:ring-[#822C89]/10">
      <legend className="px-1 text-[12px] font-medium font-body text-[#4A4A6A] leading-none select-none">
        {label}
        {optionalText && (
          <span className="text-[#8888AA] font-normal text-[11px] ml-1">
            {optionalText}
          </span>
        )}
      </legend>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete="one-time-code"
        className="w-full h-[36px] bg-transparent text-[13px] text-[#1A1A2E] placeholder-[#8888AA]/60 font-body p-0 m-0 border-none outline-none ring-0 shadow-none outline-transparent focus:outline-none focus:ring-0 focus:border-none focus:outline-transparent focus:shadow-none shadow-transparent [-webkit-appearance:none] [appearance:none] [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_white_inset_!important] [&:-webkit-autofill]:[text-fill-color:#1A1A2E_!important]"
      />
    </fieldset>
  );
}

export default function ContactClient() {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  // 5 seconds automatic cleanup hook
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);

    try {
      const response = await fetch("/api/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setNotification({
          message: "Thank you! Your message has been sent successfully.",
          type: "success",
        });
        setForm({
          firstName: "",
          lastName: "",
          contactNumber: "",
          email: "",
          message: "",
        });
      } else {
        setNotification({
          message: `Submission failed: ${data.error || "Mail Delivery Mismatch"}`,
          type: "error",
        });
      }
    } catch (err) {
      console.error(err);
      setNotification({
        message: "Something went wrong. Please verify your connection setup.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-yuni-cream overflow-x-hidden font-body mt-26">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
        
        {/* Navy Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-yuni-navy rounded-3xl overflow-hidden"
        >
          <div className="px-4 pt-4 md:px-6 md:pt-6">
            <div className="relative w-full rounded-2xl overflow-hidden aspect-video">
              <Image
                src="/images/contact-hero.png"
                alt="Yuni Rides support"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yuni-navy via-yuni-navy/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 text-center px-6 pb-6 md:pb-10">
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-tight font-heading">
                  Get in Touch With
                </h1>
                <p className="text-xl sm:text-2xl md:text-4xl font-bold text-yuni-purple leading-tight mb-2 font-heading">
                  Yuni Rides
                </p>
                <p className="text-white/75 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
                  At Yuni Rides, communication matters. Reach out anytime and our friendly team will make sure you get the help and answers you need.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 px-4 md:px-8 pt-4 pb-12"
          >
            <motion.a
              href="tel:4155352155"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 bg-yuni-lavender hover:bg-[#e0e5ff] transition-all flex-1 rounded-[40px] px-6 md:px-8 py-5 md:py-7"
            >
              <svg className="w-6 h-6 shrink-0 text-yuni-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="text-yuni-navy font-semibold text-base md:text-lg">415-535-2155</span>
            </motion.a>

            <motion.a
              href="mailto:info@yunirides.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 bg-yuni-lavender hover:bg-[#e0e5ff] transition-all flex-1 rounded-[40px] px-6 md:px-8 py-5 md:py-7"
            >
              <svg className="w-6 h-6 shrink-0 text-yuni-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="text-yuni-navy font-semibold text-base md:text-lg">info@yunirides.com</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Contact Form Wrapper Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-[#EFF2FF] rounded-[32px] -mt-8 px-4 md:px-8 py-6"
        >
          <div className="bg-white rounded-[24px] px-6 md:px-12 py-8">
            <div className="flex justify-center mb-10">
              <span className="bg-[#EFF2FF] text-[#4A4A6A] text-sm px-6 py-2.5 rounded-full font-medium font-body">
                First, tell us a little about yourself
              </span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <InputField
                  label="First Name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <InputField
                  label="Contact Number"
                  name="contactNumber"
                  type="tel"
                  value={form.contactNumber}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  required={false}
                  optionalText="(Optional)"
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                />
              </div>

              {/* Message Field formatted with matching fieldset wrapper styling */}
              <div className="mb-6">
                <fieldset className="border border-[#DDE2FF] rounded-lg px-3 pb-2 pt-0 bg-white w-full transition-all duration-200 focus-within:border-[#822C89] focus-within:ring-1 focus-within:ring-[#822C89]/10">
                  <legend className="px-1 text-[12px] font-medium font-body text-[#4A4A6A] leading-none select-none">
                    Message
                  </legend>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full bg-transparent text-[13px] text-[#1A1A2E] placeholder-[#8888AA]/60 font-body pt-1.5 m-0 border-none outline-none ring-0 shadow-none focus:outline-none focus:ring-0 focus:border-none resize-none"
                  />
                </fieldset>
              </div>

              {/* Submission Controls & Notifications */}
              <div className="flex flex-col gap-4 items-end mt-4">
                <Button
                  label={loading ? "Submitting..." : "Submit Message"}
                  disabled={loading}
                  bgColor={loading ? "bg-gray-400" : "bg-yuni-purple"}
                  textColor="text-white"
                  borderColor={loading ? "border-gray-400" : "border-yuni-purple"}
                  hoverBgValue={loading ? "bg-gray-400" : "white"}
                  hoverTextValue={loading ? "text-white" : "yuni-purple"}
                  type="submit"
                  width="w-full sm:w-[220px] h-[50px] text-[14px] font-medium font-body rounded-xl justify-center"
                />

                {/* Inline Alert Feedback layer matching Driver component setup */}
                <div className="w-full sm:w-[400px] h-[40px] relative">
                  <AnimatePresence mode="wait">
                    {notification && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute w-full px-4 py-2.5 rounded-lg border text-[12px] font-body font-medium flex items-center shadow-sm ${
                          notification.type === "success"
                            ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                            : "bg-rose-50 border-rose-200 text-rose-700"
                        }`}
                      >
                        <span className="mr-2 text-[14px]">
                          {notification.type === "success" ? "✓" : "✕"}
                        </span>
                        <span className="truncate">{notification.message}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}


