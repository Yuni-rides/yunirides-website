"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DriverForm from "@/components/shared/DriverForm";
import BecomeCustomer from "@/components/shared/BecomeCustomer";
import Button from "@/components/shared/Button";

export default function VelpBanner() {
  const [activeForm, setActiveForm] = useState<"driver" | "rider">("driver");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

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
                  At Yuni Rides, communication matters. Reach out anytime and
                  our friendly team will make sure you get the help and answers
                  you need.
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
              <svg
                className="w-6 h-6 shrink-0 text-yuni-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="text-yuni-navy font-semibold text-base md:text-lg">
                415-535-2155
              </span>
            </motion.a>

            <motion.a
              href="mailto:info@yunirides.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 bg-yuni-lavender hover:bg-[#e0e5ff] transition-all flex-1 rounded-[40px] px-6 md:px-8 py-5 md:py-7"
            >
              <svg
                className="w-6 h-6 shrink-0 text-yuni-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span className="text-yuni-navy font-semibold text-base md:text-lg">
                info@yunirides.com
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row mt-12 gap-4 justify-center">
          <Button
            label="Become a Driver"
            onClick={() => setActiveForm("driver")}
            bgColor={activeForm === "driver" ? "bg-yuni-purple" : "bg-white"}
            textColor={activeForm === "driver" ? "text-white" : "text-yuni-purple"}
            borderColor="border-yuni-purple"
            hoverBgValue={activeForm === "driver" ? "white" : "yuni-purple"}
            hoverTextValue={activeForm === "driver" ? "yuni-purple" : "white"}
            width="sm"
          />
          <Button
            label="Get a Ride"
            onClick={() => setActiveForm("rider")}
            bgColor={activeForm === "rider" ? "bg-yuni-purple" : "bg-white"}
            textColor={activeForm === "rider" ? "text-white" : "text-yuni-purple"}
            borderColor="border-yuni-purple"
            hoverBgValue={activeForm === "rider" ? "white" : "yuni-purple"}
            hoverTextValue={activeForm === "rider" ? "yuni-purple" : "white"}
          />
        </div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {activeForm === "driver" && (
              <motion.div
                key="driver-form-pane"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                 className="md:-mt-20 -mt-10"
              >
                <DriverForm source="Velp Page" />
              </motion.div>
            )}

            {activeForm === "rider" && (
              <motion.div
                key="rider-form-pane"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="md:-mt-20 -mt-10"
              >
                <BecomeCustomer source="Velp Page" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
