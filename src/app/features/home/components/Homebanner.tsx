"use client";

import Button from "@/components/shared/Button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/homeBanner2.png",
    alt: "Yuni Rides driver assisting elderly passenger",
    heading: "Technology meets care - We transport the future",
    subtext:
      "Technology-driven, caring transportation service trusted by families across the U.S.",
    button: "Become A Driver",
    link: "/become-a-driver", 
  },
  {
    image: "/images/hero.png",
    alt: "Safe rides for every child",
    heading: "Safe Rides for Every Child, Every Day",
    subtext:
      "Reliable, on-time transportation that parents trust and children feel comfortable with.",
    button: "Our Services",
    link: "/services", 
  },
  {
    image: "/images/blog2.png",
    alt: "Caring transportation you can trust",
    heading: "Caring Transportation You Can Trust",
    subtext:
      "From school runs to medical appointments — we handle every journey with compassion.",
    button: "Learn More",
    link: "/about", 
  },
  {
    image: "/images/services-hero.png",
    alt: "Safety first always",
    heading: "Safety First, Always",
    subtext:
      "Every driver is vetted, trained, and committed to the highest standards of safety.",
    button: "Join Us",
    link: "/contact-us", 
  },
];

export default function HomeBanner() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      goToSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [paused, active]);

  const goToSlide = (indexOrFn: number | ((prev: number) => number)) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(
        typeof indexOrFn === "function" ? indexOrFn(active) : indexOrFn,
      );
      setAnimating(false);
    }, 300);
  };

  const current = slides[active];

  return (
    <div
      className="relative w-full bg-[#FDFBF4]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ─── DESKTOP VIEW ────────────────────────────────────────── */}
      <div className="hidden md:flex w-full h-[620px] lg:h-[680px] relative items-stretch overflow-hidden">
        {/* Left Wrapper - Handles Top & Left Whitespace Gaps */}
        <div className="w-[48%] pl-6 sm:pl-16 lg:pl-[86px] pt-[150px] pr-2 z-0">
          {/* Card Component */}
          <div className="bg-[#EFF2FF] w-full h-full rounded-l-[40px] px-12 pb-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(61,21,102,0.02)]">
            <div
              className={`flex-1 pt-16 transition-all duration-300 ${
                animating
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <h1 className="text-[36px] lg:text-[40px] font-bold text-yuni-navy leading-[1.2] tracking-tight mb-5 font-heading">
                {current.heading}
              </h1>
              <p className="para-hero pt-4">{current.subtext}</p>
            </div>

            {/* Button and Center Aligned Indicators */}
            <div className="flex flex-col gap-6 items-start w-full">
              <Link href={current.link} className="no-underline">
                <Button
                  label={current.button}
                  bgColor="bg-yuni-purple"
                  textColor="text-white"
                  borderColor="border-yuni-purple"
                  hoverBgValue="white"
                  hoverTextValue="yuni-purple"
                  width="sm"
                />
              </Link>

              {/* Dots perfectly center aligned relative to the button structure */}
              <div className="flex gap-2 justify-center w-full max-w-[200px] mx-auto md:mx-0 md:pl-12">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === active ? "w-8 bg-[#2A377A]" : "w-2 bg-[#2A377A]/20"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Area Image */}
        <div className="absolute top-0 right-0 w-[55%] h-full z-10 rounded-bl-[40px] overflow-hidden">
          <Image
            src={current.image}
            alt={current.alt}
            fill
            className={`object-cover object-center transition-opacity duration-500 ${
              animating ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
        </div>
      </div>
      {/* ─── END DESKTOP ────────────────────────────────────────── */}

      {/* ─── MOBILE VIEW ────────────────────────────────────────── */}
      <div className="flex flex-col md:hidden w-full px-4 pb-6 pt-24 gap-4">
         <div className="relative w-full h-[240px] rounded-[24px] overflow-hidden">
          <Image
            src={current.image}
            alt={current.alt}
            fill
            className={`object-cover object-center transition-opacity duration-300 ${
              animating ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
        </div>
        <div className="bg-[#EDEBF7] rounded-[24px] p-6 flex flex-col">
          <div
            className={`transition-all duration-300 ${
              animating
                ? "opacity-0 translate-y-1"
                : "opacity-100 translate-y-0"
            }`}
          >
            <h1 className="text-[26px] font-bold text-[#2A377A] leading-tight mb-3 font-heading">
              {current.heading}
            </h1>
            <p className="text-[14px] text-[#555555] leading-[1.5] mb-6 font-body">
              {current.subtext}
            </p>
          </div>

          {/* Shared Button on Mobile */}
          <Button
            label={current.button}
            bgColor="bg-yuni-purple"
            textColor="text-white"
            borderColor="border-yuni-purple"
            hoverBgValue="white"
            hoverTextValue="yuni-purple"
          />

          <div className="flex gap-1.5 mt-6 justify-center w-full">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-[#2A377A]" : "w-1.5 bg-[#2A377A]/20"
                }`}
              />
            ))}
          </div>
        </div>

       
      </div>
      {/* ─── END MOBILE ────────────────────────────────────────── */}
    </div>
  );
}
