"use client";

import Image from "next/image";

export default function AboutMissionCards() {
  return (
    <section className="bg-[#FAF8F0] px-4 sm:px-6 md:px-12 py-16 md:py-24 relative overflow-hidden">
      {/* Dynamic Blob Vector Background */}
      <div
        className="absolute top-0 right-0 w-1/2 h-[60%] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, #E8F4FF 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-[1] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
        {/* CARD 1: Welcome To Yuni Rides */}
        <div className="bg-[#EFF2FF] rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col gap-6 box-border transition-all duration-300 hover:shadow-[0_12px_40px_rgba(44,57,121,0.08)] hover:-translate-y-1 group">
          {/* Inner Image Wrapper matching image_7c5fc4 */}
          <div className="bg-[#FAF8F0] rounded-[24px] w-full h-[220px] sm:h-[260px] shrink-0 flex items-center justify-center relative overflow-hidden">
            <div className="relative w-[85%] h-[85%] transition-transform duration-500 group-hover:scale-[1.04]">
              <Image
                src="/images/about-logo-card.png"
                alt="Welcome to Yuni Rides illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Card Content Text Block */}
          <div className="flex flex-col gap-4 mt-2">
            <h3 className="font-heading font-semibold text-[22px] md:text-[24px] text-[#2C2C4E] m-0 leading-[1.3] tracking-tight">
              Welcome To <span className="font-bold">Yuni Rides</span>
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[#5A5A7A] leading-[1.75] font-body text-left m-0">
              At Yuni Rides, we are committed to providing top-tier, dependable
              transportation services designed specifically for children. With a
              focus on safety, Care, and professionalism, we take pride in
              offering a service that families and communities can trust. Our
              dedicated team ensures every child's journey is secure,
              comfortable, and on time, making us a leader in child-focused
              transportation solution across the nation. Whether it's for school
              or a special appointment, Yuni Rides is here to serve with
              integrity and compassion.
            </p>
          </div>
        </div>

        {/* CARD 2: Love and Care Mission */}
        <div className="bg-[#EFF2FF] rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col gap-6 box-border transition-all duration-300 hover:shadow-[0_12px_40px_rgba(44,57,121,0.08)] hover:-translate-y-1 group">
          {/* Inner Image Wrapper matching image_7c5fc4 */}
          <div className="bg-[#FAF8F0] rounded-[24px] w-full h-[220px] sm:h-[260px] shrink-0 flex items-center justify-center relative overflow-hidden">
            <div className="relative w-[85%] h-[85%] transition-transform duration-500 group-hover:scale-[1.04]">
              <Image
                src="/images/about-family.png"
                alt="Helping hand with love and care illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Card Content Text Block */}
          <div className="flex flex-col gap-4 mt-2">
            <h3 className="font-heading font-semibold text-[22px] md:text-[24px] text-[#2C2C4E] m-0 leading-[1.3] tracking-tight">
              We taking pride to be helping hand with the love and care
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[#5A5A7A] leading-[1.75] font-body text-left m-0">
              At Yuni Rides, we take great pride in being a helping hand to our
              communities, offering transportation services with the love and
              care that every child deserves. Our mission goes beyond just
              getting children from one place to another – we are committed to
              making each journey a safe comfortable and compassionate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
