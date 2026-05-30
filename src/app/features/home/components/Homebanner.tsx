"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    image: '/images/hero.png',
    alt: 'Yuni Rides driver assisting elderly passenger',
    heading: 'Technology meets care –',
    headingSpan: 'We transport the future',
    subtext: 'Technology-driven, caring transportation service trusted by families across the U.S.',
    button: 'Become A Driver',
  },
  {
    image: '/images/blog1.png',
    alt: 'Safe rides for every child',
    heading: 'Safe Rides for',
    headingSpan: 'Every Child, Every Day',
    subtext: 'Reliable, on-time transportation that parents trust and children feel comfortable with.',
    button: 'Our Services',
  },
  {
    image: '/images/blog2.png',
    alt: 'Caring transportation you can trust',
    heading: 'Caring Transportation',
    headingSpan: 'You Can Trust',
    subtext: 'From school runs to medical appointments — we handle every journey with compassion.',
    button: 'Learn More',
  },
  {
    image: '/images/blog3.png',
    alt: 'Safety first always',
    heading: 'Safety First,',
    headingSpan: 'Always',
    subtext: 'Every driver is vetted, trained, and committed to the highest standards of safety.',
    button: 'Join Us',
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
    }, 2000);
    return () => clearInterval(timer);
  }, [paused, active]);

  const goToSlide = (indexOrFn: number | ((prev: number) => number)) => {
    setAnimating(true);
    setTimeout(() => {
      setActive(typeof indexOrFn === 'function' ? indexOrFn(active) : indexOrFn);
      setAnimating(false);
    }, 300);
  };

  const current = slides[active];

  return (

    <div
      className="relative w-full  bg-yuni-cream"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      
      <div className="hidden md:block relative w-full min-h-[638px]">

     
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full min-h-[838px]">

    
          <div
            className="
              absolute top-21.5 left-0 z-10
              w-[62%]
              h-[452px]
              rounded-[40px]
              bg-[linear-gradient(145deg,#EDE9F5_0%,#F0EBF8_60%,#E8E4F2_100%)]
              shadow-[0_8px_48px_rgba(61,21,102,0.06)]
              flex flex-col justify-center
              px-13 py-12
            "
          >
            <div
              className={`transition-all duration-300 ${
                animating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
              }`}
            >
              <h1 className="text-[42px] font-bold text-[#2a377a] leading-[1.22] mb-4 max-w-[380px] font-heading">
                {current.heading}{' '}
                <span className="text-[#2a377a]">{current.headingSpan}</span>
              </h1>
              <p className="text-[15px] text-[#555] leading-[1.6] mb-9 max-w-[320px] font-body">
                {current.subtext}
              </p>
            </div>

            <button className="btn-primary w-fit">{current.button}</button>

            <div className="flex gap-2 mt-8">
              {slides.map((_, i) => (
                <div
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-2.5 rounded-[5px] transition-all cursor-pointer ${
                    i === active ? 'w-7 bg-[#6B2FA0]' : 'w-2.5 bg-[#C9B8DC]'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

        <div
          className="
            absolute top-0 right-0 z-20
            w-[52%]
            h-full min-h-[638px]
            overflow-hidden
            rounded-bl-[40px]
          "
        >
          <Image
            src={current.image}
            alt={current.alt}
            fill
            className={`object-cover object-center transition-opacity duration-500 ${
              animating ? 'opacity-0' : 'opacity-100'
            }`}
            priority
          />
        </div>

      </div>
      {/* ─── end DESKTOP ───────────────────────────────────────────── */}


     
      <div className="flex flex-col md:hidden px-4 pt-8 pb-8 gap-6">

        <div className="bg-[linear-gradient(145deg,#EDE9F5_0%,#F0EBF8_60%,#E8E4F2_100%)] rounded-[28px] p-8 flex flex-col justify-center shadow-[0_8px_48px_rgba(61,21,102,0.06)]">
          <div
            className={`transition-all duration-300 ${
              animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            <h1 className="text-[28px] font-bold text-[#2a377a] leading-tight mb-4 font-heading">
              {current.heading}{' '}
              <span className="text-[#2a377a]">{current.headingSpan}</span>
            </h1>
            <p className="text-[14px] text-[#555] leading-[1.6] mb-6 font-body">
              {current.subtext}
            </p>
          </div>
          <button className="btn-primary w-fit">{current.button}</button>
          <div className="flex gap-2 mt-6">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-2.5 rounded-[5px] transition-all cursor-pointer ${
                  i === active ? 'w-7 bg-[#6B2FA0]' : 'w-2.5 bg-[#C9B8DC]'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative w-full h-[300px] rounded-[28px] overflow-hidden">
          <Image
            src={current.image}
            alt={current.alt}
            fill
            className={`object-cover object-top transition-opacity duration-500 ${
              animating ? 'opacity-0' : 'opacity-100'
            }`}
            priority
          />
        </div>

      </div>
      

    </div>
  );
}