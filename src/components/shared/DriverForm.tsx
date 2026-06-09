

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/shared/Button";

interface DriverFormProps {
  source?: string;
}

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

function CheckBox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div
      onClick={onChange}
      className="flex items-center gap-3 cursor-pointer select-none group py-1"
    >
      <motion.div
        whileTap={{ scale: 0.92 }}
        className={`w-6 h-6 rounded-[6px] border-[1.5px] cursor-pointer flex items-center justify-center shrink-0 transition-all duration-200 ${
          checked
            ? "bg-[#2C3979] border-[#2C3979] shadow-[0_2px_8px_rgba(44,57,121,0.15)]"
            : "bg-white border-[#DDE2FF] group-hover:border-[#2C3979]/40"
        }`}
      >
        {checked && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </motion.div>
      <span className="text-[13px] font-body text-[#4A4A6A] group-hover:text-[#1A1A2E] transition-colors duration-150">
        {label}
      </span>
    </div>
  );
}

export default function DriverForm({ source = "General Website" }: DriverFormProps) {
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
    vehicleType: "",
    yearsExperience: "",
    hasSSN: true,
    hasDrivingLicense: true,
    usedDrugs: false,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null); // Clear previous status messages

    try {
      const response = await fetch("/api/driver-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(form),
        body: JSON.stringify({ ...form, source }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setNotification({
          message: "Thank you! Your application has been dispatched successfully.",
          type: "success",
        });
        setForm({
          fullName: "",
          email: "",
          contactNumber: "",
          city: "",
          vehicleType: "",
          yearsExperience: "",
          hasSSN: true,
          hasDrivingLicense: true,
          usedDrugs: false,
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
    <section className="bg-[#FAF8F0] py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="bg-[#EFF2FF] rounded-[40px] px-6 md:px-12 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-7 rounded-full text-[14px] font-medium font-body">
              Become A Driver
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_32px_rgba(44,57,121,0.08)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-[2.5rem_2.5rem_2rem] gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-[240px] md:h-[300px] w-full"
              >
                <Image
                  src="/images/driver-illustration.png"
                  alt="Yunirides driver illustration profile"
                  fill
                  className="object-contain object-left-bottom"
                />
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
                  At Yuni Rides, we are committed to providing top-tier,
                  dependable transportation services designed specifically for
                  children. With a focus on safety, Care, and professionalism,
                  we take pride in offering a service that families and
                  communities can trust. Our dedicated team ensures every
                  child&apos;s journey is secure, comfortable, and on time,
                  making us a leader in child-focused transportation solution
                  across the nation. Whether it&apos;s for school or a special
                  appointment, Yuni Rides is here to serve with integrity and
                  compassion.
                </p>
              </motion.div>
            </div>

            <div className="p-6 md:p-[2rem_2.5rem_2.5rem]">
              <h3 className="font-heading font-bold text-[1.2rem] text-[#2C3979] mb-[6px]">
                Start Your Journey
              </h3>
              <p className="text-[13px] text-[#4A4A6A] font-body mb-8 max-w-[360px] leading-[1.6] m-0">
                Join Yuni Rides and drive change with us! Earn great pay while
                making a meaningful impact in the lives of disabled children.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <InputField
                    label="Full Name"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <InputField
                    label="Contact Number"
                    name="contactNumber"
                    type="tel"
                    value={form.contactNumber}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                  <InputField
                    label="Enter your city or town name."
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Search city..."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <InputField
                    label="What type of vehicle do you have?"
                    name="vehicleType"
                    value={form.vehicleType}
                    onChange={handleChange}
                    placeholder="e.g. Sedan, SUV"
                  />
                  <InputField
                    label="How many years of experience do you have?"
                    name="yearsExperience"
                    type="number"
                    value={form.yearsExperience}
                    onChange={handleChange}
                    placeholder="e.g. 5"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-[#FAF8F0]/50 p-5 rounded-xl border border-[#EFF2FF]">
                  <div className="flex flex-col gap-2">
                    <p className="text-[12px] font-semibold text-[#4A4A6A] font-body m-0">
                      Do you have SSN or ITN?
                    </p>
                    <div className="flex flex-col gap-1.5 mt-1">
                      <CheckBox
                        label="Yes, I have an SSN/ITN"
                        checked={form.hasSSN === true}
                        onChange={() => setForm({ ...form, hasSSN: true })}
                      />
                      <CheckBox
                        label="No"
                        checked={form.hasSSN === false}
                        onChange={() => setForm({ ...form, hasSSN: false })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-[12px] font-semibold text-[#4A4A6A] font-body m-0">
                      Do you have a driving license?
                    </p>
                    <div className="flex flex-col gap-1.5 mt-1">
                      <CheckBox
                        label="Yes, valid driver license"
                        checked={form.hasDrivingLicense === true}
                        onChange={() =>
                          setForm({ ...form, hasDrivingLicense: true })
                        }
                      />
                      <CheckBox
                        label="No"
                        checked={form.hasDrivingLicense === false}
                        onChange={() =>
                          setForm({ ...form, hasDrivingLicense: false })
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-[12px] font-semibold text-[#4A4A6A] font-body m-0">
                      Have you ever used any recreational drug?
                    </p>
                    <div className="flex flex-col gap-1.5 mt-1">
                      <CheckBox
                        label="No, never"
                        checked={form.usedDrugs === false}
                        onChange={() => setForm({ ...form, usedDrugs: false })}
                      />
                      <CheckBox
                        label="Yes, I have"
                        checked={form.usedDrugs === true}
                        onChange={() => setForm({ ...form, usedDrugs: true })}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 items-end mt-4">
                  <Button
                    label={loading ? "Submitting..." : "Submit Application"}
                    disabled={loading}
                    bgColor={loading ? "bg-gray-400" : "bg-yuni-purple"}
                    textColor="text-white"
                    borderColor={
                      loading ? "border-gray-400" : "border-yuni-purple"
                    }
                    hoverBgValue={loading ? "bg-gray-400" : "white"}
                    hoverTextValue={loading ? "text-white" : "yuni-purple"}
                    type="submit"
                    width="w-full sm:w-[220px] h-[50px] text-[14px] font-medium font-body rounded-xl justify-center"
                  />

                  {/* Inline Framer Motion Feedback Status Alert */}
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
      </div>
    </section>
  );
}
