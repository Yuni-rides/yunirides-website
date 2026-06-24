"use client";

import Image from "next/image";

const sections = [
  {
    title: "About Our Services",
    content:
      "Yuni Rides provides student transportation management services, including:",
    bullets: [
      "Student pick-up and drop-off scheduling",
      "Driver assignment and ride management",
      "Real-time ride tracking",
      "Live ride monitoring",
      "Video streaming and ride recording",
      "Trip status updates and notifications",
      "Communication between authorized users",
      "Administrative management of transportation operations",
    ],
    footer:
      "Our services are provided through Yuni Rides (for students, parents, and guardians), Yuni Rides Driver (for drivers), and the Yuni Rides website and administrative portal.",
  },
  {
    title: "Information We Collect",
    content: null,
    bullets: [],
    subsections: [
      {
        subtitle: "Personal Information",
        content: "We may collect:",
        bullets: [
          "Full name",
          "Email address",
          "Phone number",
          "Profile information",
          "Emergency contact information",
        ],
      },
      {
        subtitle: "Student Information",
        content:
          "To provide transportation services, we may collect information relating to students, including:",
        bullets: [
          "Full name",
          "Student identification number (if provided by the school)",
          "School information",
          "Assigned transportation details",
          "Pickup and drop-off locations",
          "Ride history and trip status information",
          "Attendance-related transportation records",
        ],
        footer:
          "Student information is collected solely for transportation management, safety, communication, and operational purposes.",
      },
      {
        subtitle: "Driver Information",
        content: "For drivers using Yuni Rides Driver, we may collect:",
        bullets: [
          "Full name",
          "Contact information",
          "Driver identification information",
          "Vehicle information",
          "Ride acceptance and completion records",
        ],
      },
      {
        subtitle: "Location Information",
        content:
          "We may collect real-time location information from driver devices to:",
        bullets: [
          "Track active trips",
          "Monitor route progress",
          "Verify pickups and drop-offs",
          "Improve transportation safety",
          "Provide live ride updates to authorized users",
        ],
        footer:
          "Location tracking is only used as necessary to provide transportation services.",
      },
      {
        subtitle: "Video and Ride Monitoring Information",
        content:
          "During active transportation services, Yuni Rides may collect, transmit, stream, and record video using technologies such as WebRTC or similar communication technologies. Video data may include:",
        bullets: [
          "Drivers",
          "Students",
          "Vehicle interiors",
          "Transportation activities",
          "Surrounding environments visible to the camera",
        ],
        footer:
          "Video monitoring is used solely for student safety, driver safety, ride monitoring, incident investigation, service quality assurance, and security and operational oversight.",
      },
      {
        subtitle: "Device Information",
        content: "We may automatically collect:",
        bullets: [
          "Device type",
          "Operating system",
          "App version",
          "IP address",
          "Log and diagnostic information",
        ],
      },
    ],
  },
  {
    title: "How We Use Information",
    content: "We use collected information to:",
    bullets: [
      "Provide transportation services",
      "Assign rides to drivers",
      "Allow drivers to accept or decline rides",
      "Manage pickup and drop-off operations",
      "Track trip progress",
      "Send notifications and alerts",
      "Communicate with users",
      "Improve service quality",
      "Ensure safety and security",
      "Monitor transportation activities",
      "Provide live ride monitoring",
      "Investigate incidents, complaints, or disputes",
      "Maintain transportation security",
      "Comply with legal obligations",
      "Provide customer support",
    ],
  },
  {
    title: "Sharing of Information",
    content: "We do not sell personal information.",
    subsections: [
      {
        subtitle: "Schools and Authorized Administrators",
        content:
          "Information may be shared with schools and authorized transportation administrators to manage transportation services.",
        bullets: [],
      },
      {
        subtitle: "Drivers",
        content:
          "Drivers may receive information necessary to perform assigned transportation services, including:",
        bullets: [
          "Student name",
          "Pickup location",
          "Drop-off location",
          "Trip details",
        ],
      },
      {
        subtitle: "Authorized Ride Monitoring Users",
        content:
          "During active transportation services, certain information may be visible to authorized users, including:",
        bullets: [
          "Parents and guardians",
          "Students (where applicable)",
          "School administrators",
          "Transportation administrators",
          "Super administrators",
        ],
        footer:
          "This information may include ride status, trip progress, driver's real-time location, and live video streams where such features are enabled.",
      },
      {
        subtitle: "Service Providers",
        content:
          "We may share information with trusted third-party providers that help us operate our services, including:",
        bullets: [
          "Cloud hosting providers",
          "Analytics providers",
          "Notification services",
          "Video streaming service providers",
          "Customer support providers",
        ],
      },
      {
        subtitle: "Legal Requirements",
        content:
          "We may disclose information when required by law, regulation, court order, or government request.",
        bullets: [],
      },
    ],
  },
  {
    title: "Location Data",
    content:
      "The Yuni Rides Driver application may collect location data while the application is in use and, where permitted by device settings, during active transportation services. Location information is used solely for:",
    bullets: [
      "Route tracking",
      "Trip monitoring",
      "Student safety",
      "Operational management",
      "Providing real-time transportation updates",
    ],
    footer:
      "During an active transportation trip, the driver's real-time location may be visible to authorized users, including parents, students, schools, transportation administrators, and super administrators, for the purpose of monitoring trip progress, improving safety, providing estimated arrival information, and ensuring efficient transportation operations.",
  },
  {
    title: "Video Streaming and Recording",
    content:
      "Yuni Rides may utilize live video streaming and recording technologies, including WebRTC, during active transportation operations. Live video streams and recorded footage may be accessible to authorized users, including:",
    bullets: [
      "Transportation administrators",
      "School administrators",
      "Super administrators",
      "Other personnel authorized by Yuni Rides or participating schools",
    ],
    footer:
      "Video recordings may include images of drivers, students, vehicle interiors, and surrounding environments. Recorded footage may be retained for safety, security, operational, legal, compliance, or incident investigation purposes and protected using reasonable security measures.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable administrative, technical, and organizational safeguards to protect personal information from:",
    bullets: [
      "Unauthorized access",
      "Disclosure",
      "Alteration",
      "Loss",
      "Misuse",
    ],
    footer:
      "However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Data Retention",
    content: "We retain information only for as long as necessary to:",
    bullets: [
      "Provide our services",
      "Maintain transportation records",
      "Resolve disputes",
      "Meet legal obligations",
      "Enforce our agreements",
    ],
    footer:
      "When information is no longer required, it will be securely deleted or anonymized.",
  },
  {
    title: "Children's Privacy",
    content:
      "Our services involve transportation management for students. Student information is collected and processed only for authorized transportation purposes and under the direction of schools, parents, guardians, or authorized administrators.",
    bullets: [],
    footer:
      "Students may use the Yuni Rides application as part of transportation services provided through their school or authorized organization. Information relating to students is collected only as necessary to provide transportation services and is handled with appropriate safeguards designed to protect student privacy and security. We do not knowingly collect personal information directly from children without appropriate authorization.",
  },
  {
    title: "User Rights",
    content: "Depending on applicable laws, users may have the right to:",
    bullets: [
      "Access their information",
      "Correct inaccurate information",
      "Request deletion of information",
      "Request restrictions on processing",
      "Withdraw consent where applicable",
    ],
    footer:
      "To exercise these rights, please contact us using the information below.",
  },
  {
    title: "Third-Party Services",
    content: "Our applications and website may use third-party services for:",
    bullets: [
      "Maps and navigation",
      "Push notifications",
      "Analytics",
      "Cloud storage",
      "Video streaming services",
      "Communication services",
    ],
    footer:
      "These third parties may process information according to their own privacy policies.",
  },
  {
    title: "Changes to This Privacy Policy",
    content:
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after updates indicates acceptance of the revised Privacy Policy.',
    bullets: [],
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions regarding this Privacy Policy or our data practices, please contact us:",
    bullets: [],
    footer: "Email: info@yunirides.com",
  },
];

export default function PrivacyClient() {
  return (
    <main className="w-full min-h-screen bg-yuni-cream overflow-x-hidden font-body">
      <section
        className="mx-4 max-w-7xl md:mx-auto mt-24 md:mt-[8rem] rounded-2xl md:rounded-3xl overflow-hidden relative min-h-[140px] sm:min-h-[180px] md:min-h-80"
        style={{
          background:
            "linear-gradient(135deg, #2C3979 0%, #191E59 50%, #211553 100%)",
        }}
      >
        <div className="relative z-10 px-6 sm:px-10 md:px-16 py-8 sm:py-12 md:py-20 w-full md:max-w-[55%] flex items-center justify-center md:justify-start min-h-[140px] sm:min-h-[180px] md:min-h-80">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight font-heading">
            Privacy Policy
          </h1>
        </div>

        <div className="absolute right-0 top-0 w-[50%] h-full hidden md:block">
          <Image
            src="/images/privacy-hero.png"
            alt="Privacy Policy"
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
            Welcome to Yuni Rides. We are committed to protecting the privacy
            and security of our users, including students, parents, guardians,
            drivers, schools, and administrators who use our services.
          </p>
          <p className="text-[#353637] leading-relaxed mt-3 text-sm md:text-base">
            This Privacy Policy explains how Yuni Rides, including the Yuni
            Rides and Yuni Rides Driver mobile applications and related website,
            collects, uses, stores, and protects personal information.
          </p>
          <p className="text-[#353637] leading-relaxed mt-3 text-sm md:text-base">
            By using our services, you agree to the practices described in this
            Privacy Policy.
          </p>
        </div>

        <hr className="border-gray-200 mb-8 md:mb-10" />

        <div className="space-y-8 md:space-y-10">
          {sections.map((section) => (
            <div>
              <h3 className="text-base md:text-xl font-bold text-[#2C3979] mb-2 md:mb-3 font-heading">
                {section.title}
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

              {"subsections" in section && section.subsections && (
                <div className="space-y-4 md:space-y-6 mt-3 md:mt-4">
                  {section.subsections.map((sub, si) => (
                    <div
                      key={si}
                      className="pl-3 md:pl-4 border-l-2 border-[#2C3979]/20"
                    >
                      <h4 className="text-sm md:text-base font-semibold text-[#2C3979] mb-1.5 md:mb-2 font-heading">
                        {sub.subtitle}
                      </h4>
                      {sub.content && (
                        <p className="text-[#353637] leading-relaxed mb-2 text-sm md:text-base">
                          {sub.content}
                        </p>
                      )}
                      {sub.bullets && sub.bullets.length > 0 && (
                        <ul className="space-y-1.5 md:space-y-2 mb-2">
                          {sub.bullets.map((item, bi) => (
                            <li
                              key={bi}
                              className="flex items-start gap-2 md:gap-3"
                            >
                              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#2C3979] shrink-0" />
                              <span className="text-[#353637] leading-relaxed text-sm md:text-base">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {"footer" in sub && sub.footer && (
                        <p className="text-[#353637] leading-relaxed text-xs md:text-sm mt-1">
                          {sub.footer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {section.footer && (
                <p className="text-[#353637] leading-relaxed mt-2 md:mt-3 text-sm md:text-base">
                  {section.footer.includes("Email:") ? (
                    <>
                      Email:{" "}
                      <a
                        href="mailto:info@yunirides.com"
                        className="text-[#2C3979] font-medium hover:underline transition-all"
                      >
                        info@yunirides.com
                      </a>
                    </>
                  ) : (
                    section.footer
                  )}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
          <p className="text-[#353637] leading-relaxed text-sm md:text-base">
            By using Yuni Rides and Yuni Rides Driver, you acknowledge that you
            have read and understood this Privacy Policy and agree to its terms.
          </p>
        </div>
      </div>
    </main>
  );
}
