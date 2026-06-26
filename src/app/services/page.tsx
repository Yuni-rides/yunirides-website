import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StudentsSection from "@/components/shared/StudentsSection";
import BecomeCustomer from "@/components/shared/BecomeCustomer";
import FAQSection from "@/components/shared/FaqSection";
import Button from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Our Services | School & Special Needs Transportation — Yuni Rides",
  description:
    "Yuni Rides offers school district transportation, special needs student rides, McKinney-Vento transport, and IEP-aligned services. Safe, reliable, and technology-driven across WA, CA, AZ, TX, IL.",
  alternates: { canonical: "https://www.yunirides.com/services" },
  openGraph: {
    title: "Student Transportation Services | Yuni Rides",
    description:
      "Safe, reliable, technology-powered transportation services for school districts, special needs students, and McKinney-Vento youth across 5 states.",
    url: "https://www.yunirides.com/services",
    images: [
      {
        url: "https://www.yunirides.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yuni Rides Student Transportation Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Transportation Services | Yuni Rides",
    description:
      "Safe, technology-driven transportation for school districts across WA, CA, AZ, TX, IL.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Student Transportation Services",
  name: "Student Transportation Services",
  description:
    "Safe, technology-driven student transportation for school districts. Specializing in special needs, McKinney-Vento, IEP-aligned, and general education transport.",
  provider: {
    "@type": "Organization",
    name: "Yuni Rides",
    url: "https://www.yunirides.com",
  },
  areaServed: [
    { "@type": "State", name: "Washington" },
    { "@type": "State", name: "California" },
    { "@type": "State", name: "Arizona" },
    { "@type": "State", name: "Texas" },
    { "@type": "State", name: "Illinois" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "District Transportation Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IEP Special Education Transportation",
          description:
            "IDEA-compliant door-to-door transport for students with IEPs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "McKinney-Vento Homeless Student Transport",
          description:
            "Federal compliant transport ensuring school stability for homeless youth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Special Needs Student Transportation",
          description:
            "Wheelchair-accessible vehicles with trained attendant staff.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General Education School Bus Alternative",
          description:
            "Cost-effective route optimization for district general-ed populations.",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Yuni Rides comply with IDEA and IEP transportation requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yuni Rides provides door-to-door transportation as specified in each student's IEP. Our drivers receive specialized training in behavior management, medical needs, and wheelchair securement. We coordinate directly with district special education directors to ensure full IDEA compliance.",
      },
    },
    {
      "@type": "Question",
      name: "What is McKinney-Vento transportation and how does Yuni Rides support it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The McKinney-Vento Act requires districts to transport homeless students to their school of origin. Yuni Rides partners with district liaisons to provide stable, reliable transportation regardless of housing changes, ensuring compliance with federal mandates.",
      },
    },
    {
      "@type": "Question",
      name: "How do school districts start a contract with Yuni Rides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Districts can request a quote through our district inquiry form or call 415-535-2155. We conduct a needs assessment, provide a customized routing plan, and finalize a service agreement with transparent per-student or per-route pricing.",
      },
    },
    {
      "@type": "Question",
      name: "What states does Yuni Rides operate in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yuni Rides currently provides student transportation services in Washington, California, Arizona, Texas, and Illinois, with plans to expand to additional states.",
      },
    },
    {
      "@type": "Question",
      name: "What vehicle and safety standards does Yuni Rides maintain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All vehicles are ADA-compliant with wheelchair lifts, GPS tracking, and two-way communication. Drivers pass background checks, drug screening, and specialized training in student safety and special-needs care.",
      },
    },
  ],
};

const services = [
  {
    title: "School District Transportation",
    image: "/images/service-school.png",
    features: [
      "Vetted & trained drivers",
      "Reliable daily school routes",
      "Live ride tracking & streaming",
      "Special-needs accommodations",
    ],
    active: true,
  },
  {
    title: "Healthcare & Facilities",
    image: "/images/service-healthcare.png",
    features: [
      "Trained, professional drivers",
      "On-time appointment transport",
      "Patient-first, compassionate care",
      "Secure & coordinated rides",
    ],
    active: false,
  },
  {
    title: "Parents & Guardian",
    image: "/images/service-parents.png",
    features: [
      "Safe, child-focused transportation",
      "Real-time ride updates",
      "Trusted, background-checked drivers",
      "Clear pickup & drop-off communication",
    ],
    active: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-[#FAF8F0] px-4 sm:px-6 pb-8 mt-26">
        <div className="max-w-7xl mx-auto">
          {/* 
          Mobile par height auto ho jayegi aur components stack honge.
          Desktop (md) par fixed height aur absolute positioning active ho jayegi.
        */}
          <div className="relative rounded-[40px] overflow-hidden bg-[#2D0F54] md:bg-transparent h-auto md:h-[500px] flex flex-col justify-between p-6 pb-4 md:p-0">
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src="/images/services-hero.png"
                alt="Yuni Rides driver safely transporting a child to school"
                fill
                className="object-cover object-center opacity-90 md:opacity-100"
                priority
              />
              {/* Smooth overlay targeting text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 md:to-black/40" />
            </div>

            {/* Heading Block */}
            <div className="relative z-[2] mt-6 mb-12 md:my-0 md:absolute md:top-1/2 md:left-12 md:-translate-y-[60%] max-w-[520px]">
              <h1 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[clamp(1.8rem,4vw,3rem)] text-white leading-[1.15] m-0 [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
                Transportation
                <br />
                Designed Around Care,
                <br />
                Safety &amp; Trust
              </h1>
            </div>

            {/* 
            Bottom White Panel Card 
            Mobile par naturally niche dynamic layer par position karega without overlapping text.
          */}
            <div className="relative z-[2] w-full bg-white rounded-[24px] md:rounded-[16px] px-5 py-6 md:px-7 md:py-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 md:gap-4 shadow-[0_12px_32px_rgba(0,0,0,0.15)] md:absolute md:bottom-7 md:left-7 md:right-7 md:w-auto">
              {/* Description Text */}
              <p className="text-[14px] md:text-[13.5px] text-[#4A4A6A] leading-[1.65] font-body m-0 max-w-full md:max-w-[400px]">
                Reliable, technology-powered transportation services built to
                support children, families, schools, and healthcare communities.
              </p>

              {/* Buttons Row */}
              <div className="flex flex-row gap-3 shrink-0 w-full md:w-auto">
                <Link
                  href="#become-customer"
                  className="flex-1 md:flex-initial"
                >
                  <Button
                    label="Request a Ride"
                    bgColor="bg-white"
                    textColor="text-yuni-purple"
                    borderColor="border-yuni-purple"
                    hoverBgValue="yuni-purple"
                    hoverTextValue="white"
                    width="w-full text-sm py-3 md:py-2.5 md:px-5"
                  />
                </Link>

                <Link
                  href="/become-a-driver"
                  className="flex-1 md:flex-initial"
                >
                  <Button
                    label="Become a Driver"
                    bgColor="bg-yuni-purple"
                    textColor="text-white"
                    borderColor="border-yuni-purple"
                    hoverBgValue="white"
                    hoverTextValue="yuni-purple"
                    width="w-full text-sm py-3 md:py-2.5 md:px-5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F0] px-4 sm:px-6 py-[5rem] relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-[50%] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse, rgba(130,44,137,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-[1]">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-7 rounded-full text-[14px] font-medium font-body mb-4">
              Our Transportation Services
            </span>
            <p className="text-[15px] text-[#4A4A6A] font-body m-0">
              From daily school rides to specialized care transportation...
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {services.map((service) => (
              <div
                key={service.title}
                className={`w-full max-w-[411px] rounded-[15px] overflow-hidden flex flex-col bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_36px_rgba(44,57,121,0.15)] group ${
                  service.active
                    ? "shadow-[0_0_0_2px_#2C3979,0_8px_32px_rgba(44,57,121,0.15)] border-2 border-[#2C3979]"
                    : "shadow-[0_4px_20px_rgba(44,57,121,0.08)] border border-[#EEF0FF]"
                }`}
              >
                <div className="relative h-[200px] shrink-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    priority={service.active}
                  />
                </div>

                <div className="p-[20px_22px] flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-[16px] text-[#1A1A2E] mb-3">
                      {service.title}
                    </h3>
                    <ul className="list-none p-0 m-0 mb-6">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-[12.5px] text-[#4A4A6A] font-body mb-[6px] leading-[1.5]"
                        >
                          <span className="text-[#822C89] font-bold text-[13px] shrink-0">
                            ✓
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact-us" className="w-full block">
                    {service.active ? (
                      <Button
                        label="Get Started"
                        bgColor="bg-yuni-purple"
                        textColor="text-white"
                        borderColor="border-yuni-purple"
                        hoverBgValue="white"
                        hoverTextValue="yuni-purple"
                        width="w-full text-[13px] py-2.5 rounded-[10px]"
                      />
                    ) : (
                      <Button
                        label="Get Started"
                        bgColor="bg-white"
                        textColor="text-[#4A4A6A]"
                        borderColor="border-[#DDE2FF]"
                        hoverBgValue="yuni-purple"
                        hoverTextValue="white"
                        width="w-full text-[13px] py-2.5 rounded-[10px]"
                      />
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StudentsSection />

      <div id="become-customer">
        <BecomeCustomer />
      </div>

      <FAQSection />
    </>
  );
}
