"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactClient() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="w-full min-h-screen bg-yuni-cream overflow-x-hidden font-body">
      <div className="w-full px-4 md:px-8 lg:px-16 pt-4 pb-10">

        {/* ── NAVY CARD — everything inside ─────────────────────────────── */}
        <div className="w-full bg-yuni-navy rounded-3xl overflow-hidden">

          {/* Image */}
          <div className="px-4 pt-4 md:px-6 md:pt-6">
            <div className="relative w-full rounded-2xl overflow-hidden aspect-video">
              <Image
                src="/images/contact-hero.png"
                alt="Yuni Rides support"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to from-yuni-navy via-yuni-navy/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 text-center px-6 pb-6 md:pb-10">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight font-heading">
                  Get in Touch With
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yuni-purple leading-tight mb-2 font-heading">
                  Yuni Rides
                </p>
                <p className="text-white/75 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
                  At Yuni Rides, communication matters. Reach out anytime and our friendly team will make sure you get the help and answers you need.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons — lavender bg, full width */}
             <div className="flex flex-col sm:flex-row gap-3 px-50 pt-2 pb-16">            <a
              href="tel:4155352155"
              className="flex items-center gap-4 bg-yuni-lavender hover:bg-[#e0e5ff] transition-all flex-1 rounded-[40px] px-8 py-7"
            >
              <svg className="w-6 h-6 shrink-0 text-yuni-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="text-yuni-navy font-semibold text-lg">415-535-2155</span>
            </a>
            <a
              href="mailto:info@yunirides.com"
              className="flex items-center gap-4 bg-yuni-lavender hover:bg-[#e0e5ff] transition-all flex-1 rounded-[40px] px-8 py-7"
            >
              <svg className="w-6 h-6 shrink-0 text-yuni-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="text-yuni-navy font-semibold text-lg">info@yunirides.com</span>
            </a>
          </div>

          </div> {/* navy card band */}

        {/* Form — bahar, cream bg pe */}
       <div className="max-w-4xl mx-auto bg-yuni-lavender rounded-4xl -mt-8 px-4 py-6">
         <div className="mx-25 bg-yuni-white rounded-4xl px-8 md:px-12 py-8">
              <div className="flex justify-center mb-10">
                <span className="bg-yuni-lavender text-yuni-text-mid text-sm px-6 py-2.5 rounded-full">
                  First, tell us a little about yourself
                </span>
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <h3 className="text-lg font-bold text-yuni-navy mb-2 font-heading">Message Sent!</h3>
                  <p className="text-yuni-text-mid text-sm">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="absolute -top-2.5 left-3 px-1 text-xs text-yuni-text-mid z-10 bg-white">Full Name</label>
                      <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required
                        className="w-full border border-yuni-border rounded-lg px-4 py-3.5 text-sm text-yuni-text-dark bg-white outline-none focus:border-yuni-purple transition-all" />
                    </div>
                    <div className="relative">
                      <label className="absolute -top-2.5 left-3 px-1 text-xs text-yuni-text-mid z-10 bg-white">Last name</label>
                      <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required
                        className="w-full border border-yuni-border rounded-lg px-4 py-3.5 text-sm text-yuni-text-dark bg-white outline-none focus:border-yuni-purple transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="absolute -top-2.5 left-3 px-1 text-xs text-yuni-text-mid z-10 bg-white">Contact Number</label>
                      <input type="tel" name="contactNumber" value={form.contactNumber} onChange={handleChange}
                        className="w-full border border-yuni-border rounded-lg px-4 py-3.5 text-sm text-yuni-text-dark bg-white outline-none focus:border-yuni-purple transition-all" />
                    </div>
                    <div className="relative">
                      <label className="absolute -top-2.5 left-3 px-1 text-xs text-yuni-text-mid z-10 bg-white">Email</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required
                        className="w-full border border-yuni-border rounded-lg px-4 py-3.5 text-sm text-yuni-text-dark bg-white outline-none focus:border-yuni-purple transition-all" />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="absolute -top-2.5 left-3 px-1 text-xs text-yuni-text-mid z-10 bg-white">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
                      className="w-full border border-yuni-border rounded-lg px-4 py-3.5 text-sm text-yuni-text-dark bg-white outline-none focus:border-yuni-purple transition-all resize-none" />
                  </div>
                  <div className="flex justify-end">
                    <button type="submit"
                      className="bg-yuni-navy hover:bg-[#232e63] text-white font-semibold text-sm px-10 py-3 rounded-lg transition-all duration-200">
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          </div>
    </main>
  );
}