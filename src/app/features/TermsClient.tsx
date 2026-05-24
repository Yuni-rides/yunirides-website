"use client";

import { useState } from "react";
import Image from "next/image";

const SECTIONS = [
  {
    id: "acceptance",
    title: "Acceptance of Terms.",
    content: [
      "By accessing or using the <strong>Yuni Rides</strong> platform, website, or mobile application, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services.",
      "<strong>Yuni Rides</strong> reserves the right to modify these terms at any time. Continued use of the platform after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  {
    id: "services",
    title: "Services Overview.",
    content: [
      "Yuni Rides provides a technology platform that connects riders with independent driver partners. We do not directly provide transportation services.",
      "Our platform enables users to request rides, track drivers, process payments, and communicate through the Yuni Rides application.",
    ],
  },
  {
    id: "driver-responsibilities",
    title: "Driver Responsibilities.",
    content: [
      "Drivers must maintain a valid driver's license, insurance, and vehicle registration at all times while using the platform.",
      "Drivers are responsible for maintaining professional conduct, vehicle cleanliness, and adherence to all traffic laws and Yuni Rides policies.",
    ],
  },
  {
    id: "rider-responsibilities",
    title: "Rider Responsibilities.",
    content: [
      "Riders must treat drivers with respect and refrain from any behavior that could be considered harassment or abuse.",
      "Riders are responsible for ensuring accurate pickup and drop-off information and being ready at the scheduled pickup time.",
    ],
  },
  {
    id: "payment",
    title: "Payment & Fees.",
    content: [
      "All payments are processed securely through the Yuni Rides platform. Fares are calculated based on distance, time, and applicable surge pricing.",
      "Yuni Rides reserves the right to update pricing structures with reasonable notice to users.",
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation Policy.",
    content: [
      "Riders may cancel a ride request within 2 minutes of booking without incurring a fee. Cancellations after this period may result in a cancellation charge.",
      "Drivers who frequently cancel accepted rides may face account suspension or termination.",
    ],
  },
  {
    id: "account-suspension",
    title: "Account Suspension.",
    content: [
      "Yuni Rides reserves the right to suspend or terminate accounts that violate these Terms & Conditions or engage in fraudulent activity.",
      "Users may appeal account suspensions by contacting our support team within 30 days of the suspension notice.",
    ],
  },
  {
    id: "safety",
    title: "Safety & Liability.",
    content: [
      "Yuni Rides implements safety features including real-time tracking, emergency assistance, and rating systems to ensure user safety.",
      "Yuni Rides is not liable for any damages, losses, or injuries arising from the use of our platform beyond what is covered by our insurance policies.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy Reference.",
    content: [
      "Your use of the Yuni Rides platform is also governed by our Privacy Policy, which is incorporated into these Terms & Conditions by reference.",
      "We collect and process personal data in accordance with applicable data protection laws and our Privacy Policy.",
    ],
  },
  {
    id: "contact",
    title: "Contact Information.",
    content: [
      "For questions about these Terms & Conditions, please contact us at info@yunirides.com or call 415-535-2155.",
      "Our support team is available Monday through Friday, 9 AM to 6 PM PST.",
    ],
  },
];

export default function TermsClient() {
  const [activeSection, setActiveSection] = useState("acceptance");

  const currentSection = SECTIONS.find((s) => s.id === activeSection) || SECTIONS[0];

  return (
    <main className="w-full min-h-screen bg-yuni-cream overflow-x-hidden font-body">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
<section className="mx-4 mt-4 bg-yuni-navy rounded-3xl overflow-hidden relative min-h-70 md:min-h-80">      
      <div className="relative z-10 px-8 md:px-16 py-14 md:py-20 max-w-[55%] flex items-center h-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white! leading-tight font-heading">
            Terms & Condition
          </h1>
        </div>
        {/* Right image */}
        <div className="absolute right-0 top-0 w-[50%] h-full">
          <Image
            src="/images/terms-hero.png"
            alt="Terms and Conditions"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to from-yuni-navy to-transparent" />
        </div>
      </section>

      {/* ── CONTENT SECTION ──────────────────────────────────────────────── */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-8 pb-16">
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">

          {/* ── LEFT: Table of Contents ── */}
          <div className="w-full md:w-72 shrink-0">
            <div className="bg-yuni-lavender rounded-2xl px-5 py-6 sticky top-4">
              <h2 className="text-base font-bold text-yuni-navy mb-4 font-heading">
                On this Page
              </h2>
              <ul className="space-y-1">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                        activeSection === section.id
                          ? "bg-yuni-navy text-white font-semibold"
                          : "text-yuni-text-mid hover:text-yuni-navy"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        activeSection === section.id ? "bg-white" : "bg-yuni-text-mid"
                      }`} />
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="flex-1 flex flex-col gap-4">

            {/* Active section content card */}
            <div className="bg-yuni-lavender rounded-2xl px-6 md:px-8 py-8">
              <h2 className="text-base font-bold text-yuni-navy mb-4 font-heading">
                {currentSection.title}
              </h2>
              <div className="space-y-4">
                {currentSection.content.map((para, i) => (
                  <p
                    key={i}
                    className="text-sm text-yuni-text-mid leading-relaxed text-justify"
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            </div>

            {/* Have a Question card */}
            <div className="bg-yuni-lavender rounded-2xl px-6 md:px-8 py-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-yuni-navy mb-1 font-heading">
                  Have a Question?
                </h3>
                <p className="text-sm text-yuni-text-mid">
                  Our support team is available to assist you.
                </p>
              </div>
              <a
                href="tel:4155352155"
                className="shrink-0 flex items-center gap-2 bg-yuni-navy hover:bg-[#232e63] !text-white font-semibold text-sm px-5 py-3 rounded-lg transition-all duration-200 whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                415-535-2155
              </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}