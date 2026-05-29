"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F7F5F0] px-4 sm:px-[37px] pb-[40px]">

 
      <div className="bg-[#EAF0FB] rounded-[16px_16px_0_0] px-6 sm:px-[48px] py-[22px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="m-0 text-[16px] text-[#333]" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
          Sign up today and start earning additional income.
        </p>
        <button className="btn-primary">Join Us</button>
      </div>

      <div className="w-full max-w-7xl mx-auto bg-[#822C89] rounded-[0_0_40px_40px] px-6 sm:px-[64px] pt-[56px] pb-[36px] box-border">

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white/[0.12] rounded-[14px] px-6 sm:px-[32px] py-[22px] mb-[56px] gap-4">
          <span className="text-white text-[18px] whitespace-nowrap" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            Subscribe to our newsletter
          </span>
          <div className="flex gap-3 w-full sm:flex-1 sm:max-w-[540px]">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-5 py-[14px] rounded-[10px] border-[1.5px] border-white/40 bg-white/[0.08] text-white text-[14px] outline-none placeholder:text-white/50"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
            />
            <button className="px-6 sm:px-9 py-[14px] rounded-[10px] border-none bg-[#F5F0E8] text-[#3D1566] text-[14.5px] font-semibold cursor-pointer whitespace-nowrap transition-all duration-200 hover:bg-white active:scale-95"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
              Submit
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 items-start">

          <div className="flex flex-col">
            <Image
              src="/images/logowhite.png"
              alt="Yuni Rides"
              width={180}
              height={72}
              className="object-contain object-left"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="font-black text-[28px] sm:text-[38px] text-white leading-[1.15] mt-8 sm:mt-[48px] m-0 uppercase tracking-[0.01em]"
              style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif" }}>
              SAFE AND<br />RELIABLE SCHOOL<br />TRANSPORTATION
            </p>
          </div>

         
          <div className="grid grid-cols-3 border-l border-white/[0.25] border-r border-white/[0.25] px-4 sm:px-[32px]">
            {/* Nav col 1 */}
            <div className="flex flex-col gap-6">
              {["Home", "Services", "About"].map((item, i) => (
                <Link key={item} href={`/${item.toLowerCase()}`}
                  className={`text-[15px] no-underline transition-all duration-200 ${i === 0 ? 'text-white font-semibold' : 'text-white/[0.65] font-normal'} hover:text-white`}
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                  {item}
                </Link>
              ))}
            </div>
         
            <div className="flex flex-col gap-6 border-l border-white/[0.25] pl-4 sm:pl-6">
              {["Become A Driver", "Careers", "Blog"].map((item) => (
                <Link key={item} href="#"
                  className="text-white/[0.65] text-[15px] no-underline font-normal transition-all duration-200 hover:text-white"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                  {item}
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col gap-6 border-l border-white/[0.25] pl-4 sm:pl-6">
              <Link href="/contact"
                className="text-white/[0.65] text-[15px] no-underline font-normal transition-all duration-200 hover:text-white"
                style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                Contact
              </Link>
            </div>
          </div>

     
          <div className="md:pl-4">
            <p className="text-white text-[18px] font-semibold m-0 mb-6" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
              Contact Us:
            </p>
            <div className="flex flex-col gap-4 mb-9">
              <a href="tel:4155352155"
                className="flex items-center gap-[14px] text-white no-underline text-[15px] transition-all duration-200 hover:text-white/80"
                style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                415-535-2155
              </a>
              <a href="mailto:info@yunirides.com"
                className="flex items-center gap-[14px] text-white no-underline text-[15px] transition-all duration-200 hover:text-white/80"
                style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                info@yunirides.com
              </a>
            </div>

      
            <div className="flex gap-4">
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", stroke: false },
                { label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z", stroke: false },
                { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", stroke: false },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-[44px] h-[44px] rounded-[10px] bg-white/15 flex items-center justify-center no-underline transition-all duration-200 hover:bg-white/30 hover:scale-110 active:scale-95">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d={s.path} /></svg>
                </a>
              ))}
              <a href="#" aria-label="Instagram"
                className="w-[44px] h-[44px] rounded-[10px] bg-white/15 flex items-center justify-center no-underline transition-all duration-200 hover:bg-white/30 hover:scale-110 active:scale-95">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

    
        <div className="border-t border-white/[0.20] pt-6 text-center">
          <p className="text-white/[0.60] text-[13px] m-0" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            Yunirides® is a registered trademark | © 2025 Yunirides | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}