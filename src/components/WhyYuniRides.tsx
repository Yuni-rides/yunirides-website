"use client";

import Image from "next/image";

export default function WhyYuniRides() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F0] px-[86px] py-[80px] pb-[100px]">

      {/* ── Section Header ── */}
      <div className="relative z-[2] text-center mb-12">

        {/* Pill badge */}
        <div className="inline-block bg-[#EFF2FF] rounded-[50px] px-8 py-[10px] mb-6">
          <span className="text-[15px] font-medium text-[#3D1566]" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            Why <strong>Yuni Rides</strong>
          </span>
        </div>

        {/* Paragraph */}
        <p className="text-[15px] text-[#444] leading-[1.75] max-w-[560px] mx-auto text-center" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
          Choosing Yuni Rides means choosing a service that is built on the
          value of safety, trust, and care. We understand the importance of
          reliable transportation for children and take our role seriously.
          Every driver is carefully vetted, trained, and committed to
          delivering the highest standard of service. With Yuni Rides, you
          can have peace of mind knowing that your child is in good hands.
        </p>
      </div>

      {/* ── Main Purple Card ── */}
      <div className="relative z-[2] flex items-center overflow-visible rounded-[40px] min-h-[360px] max-w-[1100px] mx-auto"
        style={{ background: "linear-gradient(135deg, #B3359F 0%, #822C89 100%)" }}
      >
        {/* Illustration */}
        <div className="relative w-[500px] shrink-0 self-end -mb-[4px]">
          <Image
            src="/images/service4.png"
            alt="Yuni Rides team helping family"
            width={1280}
            height={1000}
            className="block object-contain object-bottom-left"
          />
        </div>

        {/* Right text content */}
        <div className="flex flex-1 flex-col justify-center py-12 pl-8 pr-[52px]">
          <h2 className="text-[34px] font-bold text-white leading-[1.25] mb-6" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
            We taking pride to be helping hand with the love and care
          </h2>

          <p className="text-[13.5px] text-white/[0.88] leading-[1.8] mb-8 text-justify max-w-[503px]" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            At Yuni Rides, we take great pride in being a helping hand to our
            communities, offering transportation services with the love and
            care that every child deserves. Our mission goes beyond just
            getting children from one place to another — we are committed to
            making each journey a safe comfortable and compassionate.
          </p>

          {/* Join Us button */}
          <div>
            <button className="bg-[#3D1566] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.32)] active:scale-95 text-white border-none rounded-xl px-10 py-[14px] text-[15px] font-semibold cursor-pointer shadow-[0_4px_18px_rgba(0,0,0,0.25)] transition-all duration-150"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}