"use client";
import Image from "next/image";

export default function WhyYuniRides() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F0] px-4 sm:px-8 lg:px-[86px] py-[80px] pb-[100px]">

  
      <div className="relative z-[2] text-center mb-12">
        <div className="inline-block bg-[#EFF2FF] rounded-[50px] px-8 py-[10px] mb-6">
          <span className="text-[15px] font-medium text-[#3D1566]" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            Why <strong>Yuni Rides</strong>
          </span>
        </div>
        <p className="text-[15px] text-[#444] leading-[1.75] max-w-[560px] mx-auto text-center px-4" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
          Choosing Yuni Rides means choosing a service that is built on the value of safety, trust, and care. We understand the importance of reliable transportation for children and take our role seriously. Every driver is carefully vetted, trained, and committed to delivering the highest standard of service. With Yuni Rides, you can have peace of mind knowing that your child is in good hands.
        </p>
      </div>


      <div
        className="relative z-[2] flex flex-col md:flex-row items-center overflow-visible rounded-[40px] max-w-[1100px] mx-auto min-h-[360px]"
        style={{ background: "linear-gradient(135deg, #B3359F 0%, #822C89 100%)" }}
      >
        
        <div className="relative w-full md:w-[400px] lg:w-[500px] shrink-0 self-end md:-mb-[4px] max-h-[280px] md:max-h-none">
          <Image
            src="/images/service4.png"
            alt="Yuni Rides team helping family"
            width={1280}
            height={1000}
            className="block object-contain object-bottom w-full"
          />
        </div>

    
        <div className="flex flex-1 flex-col justify-center px-6 md:pl-8 md:pr-[52px] py-8 md:py-12">
          <h2
            className="text-[24px] md:text-[34px] font-bold text-white leading-[1.25] mb-6"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            We taking pride to be helping hand with the love and care
          </h2>
          <p
            className="text-[13.5px] text-white/[0.88] leading-[1.8] mb-8 text-justify"
            style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
          >
            At Yuni Rides, we take great pride in being a helping hand to our communities, offering transportation services with the love and care that every child deserves. Our mission goes beyond just getting children from one place to another — we are committed to making each journey a safe comfortable and compassionate.
          </p>
          <div>
        <button className="btn-primary">Join Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}