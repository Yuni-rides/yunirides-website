"use client";

import { useState } from "react";
import Image from "next/image";

const sections = [
  {
    number: "1.",
    title: "Definitions",
    content: null,
    bullets: [
      '"Yuni Rides," "we," "our," or "us" refers to Yuni Rides and its affiliated services.',
      '"User" refers to any individual or organization using our services.',
      '"Student" refers to a student authorized to use the Yuni Rides application and transportation services.',
      '"Parent" or "Guardian" refers to a parent or legal guardian responsible for a student.',
      '"Driver" refers to authorized transportation personnel using the Yuni Rides Driver application.',
      '"School" refers to an educational institution utilizing Yuni Rides services.',
      '"Administrator" refers to authorized school staff or transportation personnel responsible for managing transportation operations.',
      '"Super Administrator" refers to personnel authorized to oversee and manage transportation services across the Yuni Rides platform.',
    ],
  },
  {
    number: "2.",
    title: "Nature of Service",
    content:
      "Yuni Rides provides a platform for managing student transportation services, including:",
    bullets: [
      "Ride scheduling and management",
      "Driver assignment",
      "Trip monitoring",
      "Student pickup and drop-off tracking",
      "Real-time ride tracking",
      "Live location sharing",
      "Live video streaming",
      "Ride recording",
      "Transportation notifications",
      "Administrative transportation management",
    ],
    footer:
      "Yuni Rides facilitates transportation management and communication between authorized users. While we strive to provide reliable services, we do not guarantee uninterrupted availability at all times.",
  },
  {
    number: "3.",
    title: "Eligibility",
    content: "To use our services, you must:",
    bullets: [
      "Be at least 18 years old; or",
      "Be a student authorized by a parent, guardian, school, or organization to use the service.",
    ],
    footer:
      "Drivers must possess all licenses, permits, insurance, and authorizations required by applicable laws and regulations.",
  },
  {
    number: "4.",
    title: "Account Registration",
    content:
      "Users may be required to create an account to access certain features. By creating an account, you agree to:",
    bullets: [
      "Provide accurate and complete information",
      "Keep your information current and updated",
      "Maintain the confidentiality of your login credentials",
      "Accept responsibility for activities conducted under your account",
    ],
    footer:
      "You must immediately notify Yuni Rides of any unauthorized access or suspected security breach involving your account.",
  },
  {
    number: "5.",
    title: "Student Use of the Service",
    content: "Students may use the Yuni Rides application to:",
    bullets: [
      "View assigned transportation information",
      "Track ride status",
      "View authorized ride location information",
      "Receive transportation notifications",
      "View pickup and drop-off schedules",
      "Access transportation-related information provided by their school or authorized administrator",
    ],
    footer:
      "Students must use the platform only for its intended transportation and educational purposes. Where required by applicable law, student use of the service may require authorization from a parent, guardian, school, or educational institution.",
  },
  {
    number: "6.",
    title: "Driver Responsibilities",
    content: "Drivers using Yuni Rides Driver agree to:",
    bullets: [
      "Follow all applicable traffic laws and regulations",
      "Maintain valid licenses, permits, and insurance",
      "Operate vehicles safely and responsibly",
      "Accurately update trip statuses",
      "Accept or decline assigned rides promptly",
      "Protect student information and privacy",
      "Use the platform only for authorized transportation activities",
      "Cooperate with approved safety monitoring systems, including location tracking, video streaming, and ride recording technologies",
      "Refrain from unauthorized or unlawful use of the platform",
    ],
    footer:
      "Drivers are solely responsible for their conduct while providing transportation services.",
  },
  {
    number: "7.",
    title: "User Responsibilities",
    content: "Users agree not to:",
    bullets: [
      "Provide false or misleading information",
      "Misuse the platform or its services",
      "Attempt unauthorized access to systems or accounts",
      "Interfere with service operations",
      "Use the platform for unlawful purposes",
      "Upload malicious software, harmful code, or unauthorized content",
      "Copy, record, distribute, or share live streams or recorded ride footage without proper authorization",
    ],
    footer:
      "Users are responsible for ensuring the accuracy of transportation-related information they provide.",
  },
  {
    number: "8.",
    title: "Student Transportation",
    content:
      "Yuni Rides provides tools to assist schools, administrators, drivers, students, and parents in managing transportation services. While we strive to support safe and efficient transportation operations:",
    bullets: [
      "We do not guarantee exact pickup or drop-off times.",
      "Delays may occur due to traffic, weather, road conditions, emergencies, vehicle issues, or operational circumstances.",
      "Transportation schedules may be modified when necessary for safety or operational reasons.",
    ],
  },
  {
    number: "9.",
    title: "Location Services",
    content:
      "The Yuni Rides Driver application may collect and transmit location data during active transportation operations. Location information may be used to:",
    bullets: [
      "Monitor trips",
      "Improve transportation safety",
      "Verify ride completion",
      "Provide real-time transportation updates",
      "Support route management and operational efficiency",
    ],
    footer:
      "By using the service, drivers consent to the collection, transmission, and use of location information necessary for transportation operations.",
  },
  {
    number: "10.",
    title: "Video Streaming and Ride Recording",
    content:
      "To enhance transportation safety, security, and operational oversight, Yuni Rides may utilize live video streaming and recording technologies, including WebRTC or similar technologies. Users acknowledge and agree that:",
    bullets: [
      "Video monitoring may occur during transportation operations.",
      "Video recordings may include drivers, students, passengers, vehicle interiors, and surrounding environments.",
      "Recorded footage may be used for safety reviews, incident investigations, compliance purposes, dispute resolution, training, and operational management.",
      "Unauthorized recording, copying, distribution, publication, or disclosure of video footage is prohibited.",
    ],
    footer:
      "By using Yuni Rides and Yuni Rides Driver, users consent to video streaming and recording as described in these Terms and in the Privacy Policy.",
  },
  {
    number: "11.",
    title: "Notifications and Communications",
    content: "Users may receive:",
    bullets: [
      "Trip updates",
      "Transportation alerts",
      "Service notifications",
      "Administrative communications",
      "Important safety announcements",
    ],
    footer:
      "Users are responsible for maintaining accurate contact information to receive these communications.",
  },
  {
    number: "12.",
    title: "Privacy",
    content:
      "Your use of our services is also governed by our Privacy Policy. By using Yuni Rides and Yuni Rides Driver, you consent to the collection, processing, and use of information as described in our Privacy Policy.",
    bullets: [],
  },
  {
    number: "13.",
    title: "Intellectual Property",
    content:
      "All software, content, trademarks, logos, graphics, designs, and materials associated with Yuni Rides are owned by or licensed to Yuni Rides. Users may not:",
    bullets: [
      "Copy",
      "Modify",
      "Distribute",
      "Reverse engineer",
      "Reproduce",
      "Sell",
      "License",
    ],
    footer:
      "any part of the service without prior written permission from Yuni Rides.",
  },
  {
    number: "14.",
    title: "Service Availability",
    content: "We strive to maintain reliable services but do not guarantee:",
    bullets: [
      "Continuous availability",
      "Error-free operation",
      "Uninterrupted access",
    ],
    footer:
      "Maintenance activities, software updates, technical issues, internet disruptions, or circumstances beyond our control may affect service availability.",
  },
  {
    number: "15.",
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Yuni Rides shall not be liable for:",
    bullets: [
      "Indirect damages",
      "Incidental damages",
      "Consequential damages",
      "Data loss",
      "Business interruption",
      "Transportation delays",
      "Service interruptions",
    ],
    footer:
      "Yuni Rides' total liability shall be limited to the maximum extent permitted under applicable law.",
  },
  {
    number: "16.",
    title: "Indemnification",
    content:
      "You agree to indemnify and hold harmless Yuni Rides, its owners, officers, employees, contractors, affiliates, and partners from any claims, liabilities, damages, losses, or expenses arising from:",
    bullets: [
      "Your use of the services",
      "Violation of these Terms",
      "Violation of applicable laws",
      "Negligent or wrongful conduct",
    ],
  },
  {
    number: "17.",
    title: "Suspension and Termination",
    content: "We reserve the right to suspend or terminate accounts if:",
    bullets: [
      "These Terms are violated",
      "Fraudulent activity is detected",
      "Unauthorized use occurs",
      "Continued use may create security, safety, or operational risks",
    ],
    footer:
      "Termination may occur without prior notice when necessary to protect users, schools, drivers, or the platform.",
  },
  {
    number: "18.",
    title: "Third-Party Services",
    content: "Our platform may integrate with third-party services, including:",
    bullets: [
      "Mapping and navigation services",
      "Push notification services",
      "Cloud hosting providers",
      "Analytics providers",
      "Video streaming providers",
      "Communication service providers",
    ],
    footer:
      "We are not responsible for the content, availability, security, or practices of third-party services.",
  },
  {
    number: "19.",
    title: "Changes to Terms",
    content:
      'We may update these Terms from time to time. Updated Terms will be posted on our website and applications with a revised "Last Updated" date. Continued use of the services following any update constitutes acceptance of the revised Terms.',
    bullets: [],
  },
  {
    number: "20.",
    title: "Governing Law",
    content:
      "These Terms shall be governed by and interpreted in accordance with the laws applicable in the jurisdiction where Yuni Rides operates, without regard to conflict of law principles.",
    bullets: [],
  },
  {
    number: "21.",
    title: "Contact Information",
    content:
      "If you have questions regarding these Terms and Conditions, please contact us:",
    bullets: [],
    footer: "Email: info@yunirides.com | Website: www.yunirides.com",
  },
];

export default function TermsClient() {
  return (
    <main className="w-full min-h-screen bg-yuni-cream overflow-x-hidden font-body">
      <section
        className="mx-4 max-w-7xl md:mx-auto mt-24 md:mt-[8rem] rounded-2xl md:rounded-3xl overflow-hidden relative min-h-[140px] sm:min-h-[180px] md:min-h-80"
        style={{
          background:
            "linear-gradient(135deg, #2C3979 0%, #191E59 50%, #211553 100%)",
        }}
      >
        <div className="relative z-10 px-6 sm:px-10 md:px-16 py-8 sm:py-12 md:py-20 w-full md:max-w-[55%] flex items-center min-h-[140px] sm:min-h-[180px] md:min-h-80">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight font-heading">
            Terms & Condition
          </h1>
        </div>

        <div className="absolute right-0 top-0 w-[50%] h-full hidden md:block">
          <Image
            src="/images/terms-hero.png"
            alt="Terms and Conditions"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-y-0 left-0 w-32"
            style={{
              background: "linear-gradient(to right, #191E59, transparent)",
            }}
          />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-12 bg-[#EFF2FF] my-6 md:my-12 rounded-3xl md:rounded-[40px]">
        <div className="mb-8 md:mb-10">
          <p className="text-[#353637] leading-relaxed text-sm md:text-base">
            Welcome to Yuni Rides. These Terms and Conditions ("Terms") govern
            your use of the Yuni Rides and Yuni Rides Driver mobile
            applications, website, and related transportation management
            services.
          </p>
          <p className="text-[#353637] leading-relaxed mt-3 text-sm md:text-base">
            By accessing or using our services, you agree to be bound by these
            Terms. If you do not agree with these Terms, you must not use our
            services.
          </p>
        </div>

        <hr className="border-gray-200 mb-8 md:mb-10" />

        <div className="space-y-8 md:space-y-10">
          {sections.map((section) => (
            <div key={section.number}>
              <h3 className="text-base md:text-xl font-bold text-[#2C3979] mb-2 md:mb-3 font-heading">
                {section.number} {section.title}
              </h3>

              {section.content && (
                <p className="text-[#353637] leading-relaxed mb-2 md:mb-3 text-sm md:text-base">
                  {section.content}
                </p>
              )}

              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-1.5 md:space-y-2 mb-2 md:mb-3">
                  {section.bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#2C3979] shrink-0" />
                      <span className="text-[#353637] leading-relaxed text-sm md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="text-[#353637] leading-relaxed mt-2 md:mt-3 text-sm md:text-base">
                  {section.footer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
          <p className="text-[#353637] leading-relaxed text-sm md:text-base">
            By accessing or using Yuni Rides and Yuni Rides Driver, you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms and Conditions.
          </p>
        </div>
      </div>
    </main>
  );
}
