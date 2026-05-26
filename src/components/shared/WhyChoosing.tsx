"use client";
import Image from "next/image";

export default function WhyChoosing() {
  return (
    <section className="bg-[#F7F5F0] pt-[60px] pb-[80px]">


      <div className="text-center mb-[48px] px-4">
        <h2 className="text-[26px] font-bold text-[#2D0F54] m-0" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
          Why choosing{" "}
          <span className="border-b-2 border-[#6B2FA0] pb-[2px] text-[#2D0F54]">Yuni Rides</span>
        </h2>
      </div>


      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-[79px] flex flex-col gap-[22px]">

        <div className="flex flex-col md:flex-row items-stretch gap-[22px]">
          <div className="w-full md:w-[302px] h-[220px] md:h-[235px] rounded-[40px] overflow-hidden shrink-0 relative shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
            <Image src="/images/school.png" alt="School Districts" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="flex-1 min-h-[180px] md:h-[235px] rounded-[40px] bg-[#8B9B6A] p-[24px_28px] md:p-[28px_36px] flex flex-col justify-center box-border transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <h3 className="text-[18px] md:text-[20px] font-bold text-[#1a1a1a] m-0 mb-[10px]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>School Districts:</h3>
            <p className="text-[12.5px] text-[#1a1a1a] leading-[1.75] m-0 text-justify" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
              School districts trust <strong>Yuni Rides</strong> for consistent, dependable transportation solutions that put student safety and well-being first. Our streamlined operations, transparent reporting, and strong commitment to inclusive and special-needs transportation—powered by innovative technology—make us a trusted partner in supporting student success.
            </p>
          </div>
        </div>

    
        <div className="flex flex-col-reverse md:flex-row items-stretch gap-[22px]">
          <div className="flex-1 min-h-[180px] md:h-[235px] rounded-[40px] bg-[#8B9B6A] p-[24px_28px] md:p-[28px_36px] flex flex-col justify-center box-border transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <h3 className="text-[18px] md:text-[20px] font-bold text-[#1a1a1a] m-0 mb-[10px]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>Hospitals &amp; Healthcare Facilities:</h3>
            <p className="text-[12.5px] text-[#1a1a1a] leading-[1.75] m-0 text-justify" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
              Hospitals and healthcare facilities trust <strong>Yuni Rides</strong> to provide safe, reliable, and compassionate transportation for patients and families. We support medical appointments, therapy sessions, and specialized care needs with professional drivers, strict safety standards, and technology-enabled coordination—ensuring every journey is timely, secure, and stress-free for both patients and care teams.
            </p>
          </div>
          <div className="w-full md:w-[302px] h-[220px] md:h-[235px] rounded-[40px] overflow-hidden shrink-0 relative shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
            <Image src="/images/hospital.png" alt="Hospitals & Healthcare" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

      
        <div className="flex flex-col md:flex-row items-start gap-[22px]">
          <div className="w-full md:w-[302px] h-[220px] md:h-[235px] rounded-[40px] overflow-hidden shrink-0 relative shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
            <Image src="/images/parents.png" alt="Parents, Students & Guardians" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="w-full md:flex-1 lg:w-[628px] min-h-[180px] md:h-[235px] rounded-[40px] bg-[#8B9B6A] p-[24px_28px] md:p-[28px_32px] flex flex-col justify-center box-border lg:shrink-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <h3 className="text-[18px] md:text-[20px] font-bold text-[#1a1a1a] m-0 mb-[10px]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>Parents, Students &amp; Guardians.</h3>
            <p className="text-[12.5px] text-[#1a1a1a] leading-[1.75] m-0 text-justify" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
              <strong>Yuni Rides</strong> gives parents and guardians confidence through safe, transparent, and child-focused transportation—every ride, every day.
            </p>
          </div>
    
          <div className="w-full md:w-[302px] shrink-0 flex flex-col gap-[14px] md:pt-[46px]">
            <p className="text-[20px] font-bold text-[#2D0F54] m-0 leading-[1.3]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>What are you thinking of?</p>
          <button className="btn-primary w-full md:w-[302px] h-[70px]">
           Discuss with Us
          </button>
          </div>
        </div>

      </div>
    </section>
  );
}