"use client";

import { useState } from "react";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Does Yuni Rides provide IEP transportation?",
    answer:
      "Yes. IEP transportation is a core part of what we do, not an add-on service. If a student's IEP includes transportation as a related service under IDEA, whatever the plan specifies—a wheelchair-accessible vehicle, door-to-door pickup, a trained aide, a capped ride time—needs to be delivered exactly as written, not approximated. This is a legal obligation on the district's part when transportation is written into the IEP, and it doesn't transfer away just because a private provider is handling the driving. We serve families and districts across Washington, Texas, California, Arizona, and Illinois with this specifically in mind.",
  },
  {
    question: "Is GPS tracking included with Yuni Rides?",
    answer:
      "Yes. Parents and districts can track live location, ETA updates, boarding/drop-off confirmation through our app. Real-time visibility isn't treated as a premium add-on; it's part of the standard service, especially for families managing a child with medical or behavioral needs who want to know exactly where things stand during a ride rather than hoping everything's fine. Tracking on its own isn't the whole answer, though. It's paired with a dispatch team that parents and districts can reach directly, since a map with no context to explain a delay creates more anxiety than it resolves.",
  },
  {
    question: "What states does Yuni Rides serve?",
    answer:
      "Yuni Rides currently operates in Washington, California, Arizona, Texas, and Illinois. Dedicated service pages with local details, including regulatory specifics for each state, are available for Washington, Texas, and Illinois. If your state or city isn't listed on those pages specifically, contact us to check current availability, since service areas are actively expanding and a page not existing yet doesn't necessarily mean we don't serve your area.",
  },
  {
    question: "How are Yuni Rides drivers background checked?",
    answer:
      "All Yuni Rides drivers have to pass a thorough background screening, drug screening, and TB test. However, there’s one more intangible we try to measure in our drivers: the ability to maintain consistency during a routine that varies little from day to day, and a comfort level with kids who may see, think, and communicate differently than most passengers. Beyond background screening, drivers assigned to special needs routes go through additional training on securement systems, recognizing medical distress, and behavioral de-escalation before they're placed on a route—not general passenger-transport training extended to a harder use case. Drivers are also generally kept on the same route consistently rather than rotated, since for many students, particularly those with autism or sensory processing differences, that consistency functions as part of the accommodation itself.",
  },
  {
    question: "Does Yuni Rides serve McKinney-Vento students?",
    answer:
      "Yes. Students experiencing homelessness are entitled to transportation under the McKinney-Vento Homeless Assistance Act, regardless of where they're currently staying within a district, and in some cases across district lines to maintain school stability. This is a separate protection from IEP-based transportation, and a student can qualify under both at the same time. Districts are responsible for coordinating both obligations rather than treating them as competing requirements. Our full breakdown is available in our McKinney-Vento transportation rights guide.",
  },
  {
    question: "What type of vehicles does Yuni Rides use?",
    answer:
      "Vehicles used on special needs routes meet applicable state equipment standards for transporting students with disabilities, not just general passenger vehicle safety requirements. Daily inspection before a route run isn't treated as a formality—it's genuinely the line between a safe ride and a risky one.",
  },
  {
    question: "How do I book Yuni Rides for my school district?",
    answer:
      "Districts can start by booking a consultation or calling 415-535-2155 directly. Many districts start with a defined trial, often the routes hardest to staff internally, before expanding the relationship further, rather than handing over the entire transportation operation at once. Our guide for administrators evaluating transportation contractors covers what to expect from the vetting process on your end as well.",
  },
  {
    question:
      "Does Yuni Rides work directly with school districts, or only with individual families?",
    answer:
      "Both. We contract directly with districts to supplement fixed-route transportation, particularly for special needs and lower-density routes, and we also work directly with families arranging supplemental transportation outside the district's own fleet. Learn more on our About page.",
  },
  {
    question: "Will my child have the same driver every day?",
    answer:
      "Generally, yes. For many students, especially those with autism or sensory processing differences, route and driver consistency functions as part of the accommodation itself, not just an operational preference.",
  },
  {
    question: "How much does Yuni Rides cost?",
    answer:
      "Transportation costs vary depending on factors such as service area, trip frequency, student accommodations, vehicle requirements, and whether services are arranged through a school district or directly with a family. Contact us for a customized quote.",
  },
  {
    question:
      "Can I request a specific type of vehicle or accommodation for my child?",
    answer:
      "Yes, accommodations are set up based on your child's documented needs, typically through the IEP if applicable, or directly during onboarding for families arranging service independently.",
  },
  {
    question:
      "Does Yuni Rides handle transportation for medical or therapy appointments, not just school?",
    answer:
      "Our primary focus is home-to-school and school-to-home transportation, including transportation provided through school districts. Availability for transportation to medical or therapy appointments depends on the service area and transportation arrangement. Please contact our team to discuss your specific needs.",
  },
  {
    question: "How is Yuni Rides different from a general rideshare app?",
    answer:
      "Rideshare apps aren't built for recurring student transportation, they don't guarantee driver consistency, and they have no mechanism for tracking IEP-specific requirements.",
  },
  {
    question: "What happens if my child's transportation needs to change?",
    answer:
      "Transportation needs can change during the school year. Whether your child changes schools, has updated accommodations, or requires a different pickup or drop-off location, we'll work with the family and, when applicable, the school district to determine the best transportation solution.",
  },
  {
    question: "What happens if a driver is unavailable?",
    answer:
      "While we work hard to maintain driver consistency, unexpected situations such as illness or emergencies can occur. When they do, our dispatch team coordinates qualified backup drivers and communicates any necessary updates to families and school districts as quickly as possible.",
  },
  {
    question: "How are parents notified about delays?",
    answer:
      "If weather, traffic, or another unexpected event affects a route, our operations team communicates updates as quickly as possible. Parents can also monitor ride progress through available GPS tracking features where applicable.",
  },
  {
    question: "Is Yuni Rides hiring drivers in my area?",
    answer:
      "Route availability varies by service area. If you're interested in driving work with structured training and a consistent schedule, see current openings.",
  },
];

export default function FaqsClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleCount, setVisibleCount] = useState<number>(7);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <main className="w-full min-h-screen bg-[#FFFDF6] font-body py-6 md:py-10 px-3 sm:px-4 md:px-8">
      {/* SECTION BANNER - Desktop Layout Exactly Same, Mobile Adapted */}
      <section
        className="mx-2 sm:mx-4 max-w-7xl md:mx-auto mt-16 sm:mt-20 md:mt-[7rem] rounded-2xl md:rounded-3xl overflow-hidden relative min-h-[140px] sm:min-h-[180px] md:min-h-80"
        style={{
          background:
            "linear-gradient(135deg, #2C3979 0%, #191E59 50%, #211553 100%)",
        }}
      >
        <div className="flex justify-between items-center sm:justify-center px-4 sm:px-8 md:px-16">
          <div className="relative z-10 py-6 sm:py-12 md:py-20 w-full flex items-center min-h-[140px] sm:min-h-[180px] md:min-h-80">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight font-heading">
              FAQ
            </h1>
          </div>

          <div className="relative w-[120px] h-[120px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] flex-shrink-0">
            <Image
              src="/images/faq-hero.png"
              alt="FAQ Graphic"
              fill
              sizes="(max-width: 640px) 120px, (max-width: 768px) 240px, 300px"
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </section>

      {/* INNER CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        {/* Introduction Text */}
        <div className="text-[#333] space-y-2 px-2">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base pt-4 sm:pt-8">
            Whether you&apos;re a parent looking for transportation for a child
            with an IEP or a district administrator evaluating a partner, the
            questions tend to come down to the same handful of things: is this
            safe, is this compliant, what does it actually cost, and where do
            you operate? Here are direct answers to the questions we hear most,
            without the vague reassurance language that makes most
            transportation FAQs useless.
          </p>
        </div>

        {/* FAQ Accordions List */}
        <div className="space-y-3 sm:space-y-4 pt-2">
          {faqData.slice(0, visibleCount).map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#EAEFFD] rounded-xl sm:rounded-2xl border border-[#D5E0FA] transition-all duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-[#2C3979] font-bold text-sm sm:text-base md:text-lg">
                    {item.question}
                  </span>

                  <span className="text-[#2C3979] text-xl sm:text-2xl font-bold flex-shrink-0">
                    {isOpen ? (
                      <div className="w-4 sm:w-5 h-[3px] bg-[#2C3979] rounded-full"></div>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-[#55607A] text-xs sm:text-sm md:text-base leading-relaxed border-t border-transparent">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < faqData.length && (
          <div className="flex justify-center pt-2 sm:pt-4">
            <button
              onClick={handleLoadMore}
              className="bg-[#2C3979] hover:bg-[#1E2756] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm transition-colors shadow-md cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}

        {/* Still Have Questions Footer Box */}
        <div className="bg-[#EAEFFD] rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center space-y-2 sm:space-y-3 mt-6 sm:mt-8 border border-[#D5E0FA]">
          <h3 className="text-lg sm:text-xl font-bold text-[#131742]">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            If you didn&apos;t find what you were looking for here, reach out
            directly. Parents and districts can book a consultation or call{" "}
            <a
              href="tel:4155352155"
              className="font-bold text-[#2C3979] underline"
            >
              415-535-2155
            </a>{" "}
            to talk through specific needs that a general FAQ page can&apos;t
            fully cover.
          </p>
        </div>
      </div>
    </main>
  );
}
