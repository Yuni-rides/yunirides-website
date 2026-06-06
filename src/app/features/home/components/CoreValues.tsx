"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const coreValues = [
  {
    title: "Safety First",
    description:
      "The safety of the transport is our highest priority. Every journey is handled with the utmost caution, adhering to strict safety protocols and utilizing the latest technology to ensure that child is in safe hands.",
    image: "/images/safety.png",
    purple: false,
  },
  {
    title: "Trust",
    description:
      "We understand the responsibility that comes with transporting children. We strive to build a strong, trusting relationship with families and communities by consistently delivering on our promises of reliability and care.",
    image: "/images/trust.png",
    purple: true,
  },
  {
    title: "Care and Compassion",
    description:
      "We know that every child is unique, and our drivers and staff are trained to provide transportation with care, understanding, and compassion. Our goal is to create an environment where children feel comfortable, supported, and respected during their rides.",
    image: "/images/care.png",
    purple: false,
  },
  {
    title: "Reliability",
    description:
      "Families depend on us to be on time, every time. Whether it's for school, appointments, or other commitments, we ensure that our transportation are dependable and seamless.",
    image: "/images/reliability.png",
    purple: true,
  },
  {
    title: "Integrity",
    description:
      "We conduct our business with honesty and transparency. From our drivers to our operational staff, every member of Yuni Rides is committed to upholding the highest ethical standards.",
    image: "/images/integrity.png",
    purple: false,
  },
  {
    title: "Professionalism",
    description:
      "Our team of drivers and support staff are highly trained professionals dedicated to providing the best possible service. We believe in a level of professionalism that reflects the trust placed in us by parents, schools, and communities.",
    image: "/images/professionalism.png",
    purple: true,
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

interface CoreValueItem {
  title: string;
  description: string;
  image: string;
  purple: boolean;
}

const CARD_W = 380;
const CARD_H = 300;
const IMG_W = 380;
const IMG_H = 300;
const FLOAT = 38;
const OVERLAP = 40;
const ROW_H = CARD_H + FLOAT;

function TextLeftRow({ item }: { item: CoreValueItem }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="
        hidden md:flex items-start relative
        opacity-0 -translate-x-10
        transition-all duration-700 ease-out
        [&.revealed]:opacity-100 [&.revealed]:translate-x-0
      "
    >
      <div
        className="
          relative z-10
          bg-yuni-white rounded-[40px]
          w-[380px] min-h-[300px] shrink-0
          flex flex-col justify-center
          px-[44px] py-[36px]
          mt-[38px]
        "
      >
        <h3 className="font-heading font-semibold text-[25px] leading-[32px] text-yuni-navy mb-[10px]">
          {item.title}
        </h3>
        <p className="font-body font-light text-[15px] leading-[24px] text-justify text-yuni-text-mid mb-[20px]">
          {item.description}
        </p>
        <Link href={"/about"}>
          <button className="btn-primary">See More</button>
        </Link>
      </div>

      <div
        className="
          relative z-20
          w-[380px] min-h-[300px] shrink-0
          rounded-[40px] overflow-hidden
          -ml-[40px] mt-[0px]
          transition-transform duration-300 hover:scale-[1.02]
        "
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

function ImageLeftRow({ item }: { item: CoreValueItem }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="
        hidden md:block relative overflow-hidden
        opacity-0 translate-x-[40px]
        transition-all duration-700 ease-out
        [&.revealed]:opacity-100 [&.revealed]:translate-x-0
      "
      style={{ height: `${ROW_H}px` }}
    >
      <div className="inset-x-8 -top-10 -bottom-10 pointer-events-none z-0">
        <div className="inset-0 bg-yuni-lavender [clip-path:polygon(0_25%,100%_0%,100%_75%,0%_100%)]" />
      </div>

      <div
        className="absolute z-20 rounded-[40px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
        style={{
          width: `${IMG_W}px`,
          height: `${IMG_H}px`,
          right: `${CARD_W - OVERLAP}px`,
          top: "0px",
        }}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      <div
        className="absolute z-10 bg-yuni-purple rounded-[40px] flex flex-col justify-center"
        style={{
          width: `${CARD_W}px`,
          height: `${CARD_H}px`,
          right: "0px",
          top: `${FLOAT}px`,
          padding: "36px 44px 36px 60px",
        }}
      >
        <h3 className="font-heading font-bold text-[18px] text-yuni-white mb-[10px] leading-[24px]">
          {item.title}
        </h3>
        <p
          className="font-body text-yuni-white/90 mb-[24px] text-justify"
          style={{ fontWeight: 300, fontSize: "15px", lineHeight: "24px" }}
        >
          {item.description}
        </p>
        <div className="flex justify-end">
          <Link href={"/about"}>
            <button
              className={item.purple ? "btn-card-outline" : "btn-primary"}
            >
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CoreValues() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <section className="md:pt-20 pt-4   bg-yuni-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center md:mb-18 mb-8">
          <span className="inline-block bg-yuni-card text-yuni-text-mid py-[6px] px-[22px] rounded-full text-[13px] font-medium mb-[14px] font-body">
            About Us
          </span>
          <h2 className="font-heading font-bold text-[clamp(1.5rem,2.8vw,2rem)] text-yuni-navy mb-[10px] block">
            About Our Core Values
          </h2>
          <p className="text-yuni-text-mid text-[13px] max-w-[400px] mx-auto leading-[1.7] font-body">
            The principles that guide every journey, every child, and every
            family we serve.
          </p>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex flex-col gap-[80px] overflow-hidden">
          {coreValues.map((item, i) =>
            i % 2 === 0 ? (
              <TextLeftRow key={item.title} item={item} />
            ) : (
              <ImageLeftRow key={item.title} item={item} />
            ),
          )}
        </div>

        <div className="block md:hidden overflow-hidden px-2" ref={emblaRef}>
          <div className="flex gap-5">
            {coreValues.map((item) => (
              <div
                key={item.title}
                className="flex-[0_0_88%] min-w-[280px] max-w-[340px] flex flex-col select-none"
              >
                {/* Content Box Container */}
                <div
                  className={`rounded-[28px] px-[26px] py-[28px] flex flex-col flex-grow shadow-sm min-h-[250px] justify-between ${
                    item.purple
                      ? "bg-yuni-purple text-yuni-white"
                      : "bg-yuni-white"
                  }`}
                >
                  <div>
                    <h3
                      className={`font-heading font-bold text-[18px] leading-snug mb-[10px] ${
                        item.purple ? "text-yuni-white" : "text-yuni-navy"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`font-body font-light text-[14px] leading-[22px] text-justify ${
                        item.purple
                          ? "text-yuni-white/90"
                          : "text-yuni-text-mid"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`mt-[18px] ${item.purple ? "flex justify-end" : "block"}`}
                  >
                    <Link href={"/about"}>
                      <button
                        className={
                          item.purple ? "btn-card-outline" : "btn-primary"
                        }
                      >
                        See More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
