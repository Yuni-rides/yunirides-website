"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  optionalText,
  required = false,
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
    <fieldset className="border border-[#DDE2FF] rounded-lg px-3 pb-2 pt-0 focus-within:border-[#822C89] focus-within:ring-1 focus-within:ring-[#822C89]/10 transition-all bg-white w-full">
      <legend className="px-1 text-[12px] font-medium font-body text-[#4A4A6A] leading-none match-edges">
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
        className="w-full h-[38px] bg-transparent text-[13px] text-[#1A1A2E] placeholder-[#8888AA]/60 font-body outline-none border-none p-0 mt-0.5 focus:ring-0"
      />
    </fieldset>
  );
}

export default function BecomeCustomer() {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    city: "",
    childFirstName: "",
    age: "",
    numberOfChildren: "",
    specialNeeds: "",
  });

  // 5 seconds dynamic clean handler
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);

    try {
      const response = await fetch("/api/customer-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setNotification({
          message: "Thank you! Your request has been dispatched successfully.",
          type: "success",
        });
        setForm({
          fullName: "",
          email: "",
          contactNumber: "",
          city: "",
          childFirstName: "",
          age: "",
          numberOfChildren: "",
          specialNeeds: "",
        });
      } else {
        setNotification({
          message: `Submission failed: ${data.error || "Mail Server Mismatch"}`,
          type: "error",
        });
      }
    } catch (err) {
      console.error(err);
      setNotification({
        message: "Network Error. Please verify your connection status.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="md:py-20 py-12 bg-[#FAF8F0]">
      <div className="md:max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#EFF2FF] rounded-[40px] px-6 md:px-12 py-12"
        >
          {/* Label */}
          <div className="text-center md:mb-8 mb-4">
            <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-7 rounded-full text-[14px] font-medium font-body">
              Become A Customer
            </span>
          </div>

          {/* White card */}
          <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_32px_rgba(44,57,121,0.08)]">
            {/* TOP — illustration + text */}
            <div className="flex flex-col md:grid md:grid-cols-2 items-center p-6 md:p-[2.5rem_2.5rem_2rem] gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-[220px] w-full"
              >
                <Image
                  src="/images/driver-illustration.png"
                  alt="Yunirides driver with child"
                  fill
                  className="object-contain object-left-center"
                />
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
                  At Yuni Rides, we are committed to providing top-tier,
                  dependable transportation services designed specifically for
                  children. With a focus on safety, Care, and professionalism,
                  we take pride in offering a service that families and
                  communities can trust. Our dedicated team ensures every
                  child&apos;s journey is secure, comfortable, and on time,
                  making us a leader in child-focused transportation solution
                  across the nation.
                </p>
              </motion.div>
            </div>

            {/* FORM */}
            <div className="p-6 md:p-[2rem_2.5rem_2.5rem]">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4 flex-wrap">
                <div>
                  <h3 className="font-heading font-bold text-[1.2rem] text-[#2C3979] mb-1">
                    Start Your Journey
                  </h3>
                  <p className="text-[12px] text-[#4A4A6A] font-body max-w-[320px] leading-[1.6] m-0">
                    Join Yuni Rides and drive change with us! Earn great pay
                    while making a meaningful impact in the lives of disabled
                    children.
                  </p>
                </div>
                <span className="bg-[#E5EAFF] text-[#4A4A6A] py-2 px-4 rounded-[10px] text-[13px] font-medium font-body shrink-0 shadow-[0_2px_8px_rgba(44,57,121,0.02)]">
                  Parent / Guardian
                </span>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <InputField
                    label="Full Name"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <InputField
                    label="Contact Number"
                    name="contactNumber"
                    type="tel"
                    value={form.contactNumber}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                  <InputField
                    label="Enter your city or town name."
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Search city..."
                    required
                  />
                </div>

                {/* Section Divider Matching Image Line */}
                <div className="relative flex items-center mb-6">
                  <span className="text-[14px] font-bold text-[#2C3979] font-heading pr-4 bg-white z-10 whitespace-nowrap">
                    Child Information
                  </span>
                  <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#E5EAFF] z-0" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <InputField
                    label="Child's First Name"
                    name="childFirstName"
                    value={form.childFirstName}
                    onChange={handleChange}
                    placeholder="Child name"
                  />
                  <InputField
                    label="Age"
                    name="age"
                    type="number"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="e.g. 8"
                  />
                </div>

                <div className="w-full sm:w-1/2 mb-5 pr-0 sm:pr-2">
                  <InputField
                    label="Number of Children Needing Transport"
                    name="numberOfChildren"
                    type="number"
                    value={form.numberOfChildren}
                    onChange={handleChange}
                    placeholder="1"
                  />
                </div>

                {/* Textarea Fieldset */}
                <div className="mb-6">
                  <fieldset className="border border-[#DDE2FF] rounded-lg px-3 pb-2 pt-0 focus-within:border-[#822C89] focus-within:ring-1 focus-within:ring-[#822C89]/10 transition-all bg-white w-full">
                    <legend className="px-1 text-[12px] font-medium font-body text-[#4A4A6A] leading-none">
                      Special Needs or Care Requirements{" "}
                      <span className="text-[#8888AA] font-normal text-[11px] ml-1">
                        (Optional)
                      </span>
                    </legend>
                    <textarea
                      name="specialNeeds"
                      value={form.specialNeeds}
                      onChange={handleChange}
                      placeholder="Any specific care requirements or medical notes..."
                      rows={4}
                      className="w-full bg-transparent text-[13px] text-[#1A1A2E] placeholder-[#8888AA]/60 font-body outline-none border-none p-0 mt-1.5 focus:ring-0 resize-none"
                    />
                  </fieldset>
                </div>

                {/* Status Layout and Button Wrapper */}
                <div className="flex flex-col gap-4 items-end mt-8">
                  <Button
                    label={loading ? "Sending..." : "Submit"}
                    bgColor={loading ? "bg-gray-400" : "bg-yuni-purple"}
                    textColor="text-white"
                    borderColor={
                      loading ? "border-gray-400" : "border-yuni-purple"
                    }
                    hoverBgValue={loading ? "bg-gray-400" : "white"}
                    hoverTextValue={loading ? "text-white" : "yuni-purple"}
                    type="submit"
                    disabled={loading}
                  />

                  {/* Dynamic Alert Panel with 5s Fading Limit */}
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
                          <span className="truncate">
                            {notification.message}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
