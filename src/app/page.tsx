"use client";
import Image from "next/image";
import CoreValues from "@/components/CoreValues";
import MapSection from '@/components/MapSection';
import BecomeCustomer from '@/components/BecomeCustomer';
import WhyYuniRides from "@/components/WhyYuniRides";
import WhyChoosing from "@/components/WhyChoosing";
import StudentsSection from "@/components/StudentsSection";
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import VideoSection from '@/components/VideoSection';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">

      <section className="relative w-full min-h-[713px] overflow-hidden">

        {/* LEFT — Text panel */}
        <div className="bg-[linear-gradient(145deg,#EDE9F5_0%,#F0EBF8_60%,#E8E4F2_100%)] p-[52px_48px_48px_52px] flex flex-col justify-center relative z-[1] w-[1274px] min-h-[552px] rounded-[40px] shadow-[0_8px_48px_rgba(61,21,102,0.06)] ml-[86px] mt-[16px]">

          <h1 className="text-[42px] font-bold text-[#2a377a] leading-[1.22] mb-[18px] max-w-[380px] font-heading">
            Technology meets care -{" "}
            <span className="text-[#2a377a]">We transport the future</span>
          </h1>

          <p className="text-[15px] text-[#555] leading-[1.6] mb-[36px] max-w-[320px] font-body">
            Technology-driven, caring transportation service trusted by families across the U.S.
          </p>

          <div className="flex items-center gap-[16px]">
            <button className="bg-[linear-gradient(135deg,#6B2FA0_0%,#8B44C4_100%)] text-white border-none rounded-[10px] px-[28px] py-[14px] text-[15px] font-semibold cursor-pointer shadow-[0_6px_20px_rgba(107,47,160,0.40)] tracking-[0.01em] hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(107,47,160,0.50)] transition-all duration-150 font-body">
              Become A Driver
            </button>
          </div>

          <div className="flex gap-[8px] mt-[32px]">
            {[true, false, false, false].map((active, i) => (
              <div
                key={i}
                className={`h-[10px] rounded-[5px] transition-all cursor-pointer ${active ? 'w-[28px] bg-[#6B2FA0]' : 'w-[10px] bg-[#C9B8DC]'}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — Image */}
        <div className="absolute w-[795px] h-[713px] top-0 right-0 overflow-hidden rounded-[40px] z-[2]">
          <Image
            src="/images/hero.png"
            alt="Yuni Rides driver assisting elderly passenger"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

      </section>

      <CoreValues />
      <MapSection />
      <BecomeCustomer />
      <WhyYuniRides />
      <WhyChoosing />
      <StudentsSection />
      <TestimonialsSection />
      <BlogSection />
      <VideoSection />
    </main>
  );
}