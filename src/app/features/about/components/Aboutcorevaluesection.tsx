'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const values = [
  { number: '01', title: 'Saftey First', image: '/images/safety.png', description: 'The safety of the transport is our highest priority. Every journey is handled with the utmost caution, adhering to strict safety protocols and utilizing the latest technology to ensure that child is in safe hands.' },
  { number: '02', title: 'Trust', image: '/images/trust.png', description: 'We know that every child is unique, and our drivers and staff are trained to provide transportation with care, understanding, and compassion. Our goal is to create an environment where children feel comfortable, supported, and respected during their rides.' },
  { number: '03', title: 'Care and compassion', image: '/images/care.png', description: 'We know that every child is unique, and our drivers and staff are trained to provide transportation with care, understanding, and compassion.' },
  { number: '04', title: 'Reliability', image: '/images/reliability.png', description: "Families depend on us to be on time, every time. Whether it's for school, appointments, or other commitments, we ensure dependable and seamless transportation." },
  { number: '05', title: 'Integrity', image: '/images/care.png', description: 'We conduct our business with honesty and transparency. Every member of Yuni Rides is committed to upholding the highest ethical standards.' },
  { number: '06', title: 'Professionalism', image: '/images/professionalism.png', description: 'Our team of drivers and support staff are highly trained professionals dedicated to providing the best possible service.' },
]

export default function AboutCoreValuesSection() {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <section className="bg-[#FAF8F0] px-4 sm:px-12 py-16">
      <div className="max-w-[1200px] mx-auto">

        {/* Label */}
        <div className="text-center mb-8">
          <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-7 rounded-full text-[14px] font-medium font-body">
            Our Core Values
          </span>
        </div>

        {/* Main container */}
        <div className="bg-[#EFF2FF] rounded-[24px] p-6 md:p-10 grid grid-cols-1 md:grid-cols-[480px_1fr] gap-8 md:gap-12 min-h-[500px]">

          {/* LEFT — Image + description + buttons */}
          <div className="flex flex-col gap-5">
            {/* Image */}
            <div className="relative w-full h-[210px] rounded-[16px] overflow-hidden shrink-0">
              <Image
                src={values[activeIndex].image}
                alt={values[activeIndex].title}
                fill
                className="object-cover transition-opacity duration-300"
              />
            </div>

            {/* Description */}
            <p className="text-[12.5px] text-[#4A4A6A] leading-[1.85] font-body text-justify m-0 transition-all duration-300">
              {values[activeIndex].description}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-auto pt-4 flex-wrap">
              <Link href="/contact" className="btn-secondary">
                Contact us
              </Link>
              <Link href="/become-a-driver" className="btn-outline">
                Become a Rider
              </Link>
            </div>
          </div>

          {/* RIGHT — Values list */}
          <div className="flex flex-col justify-center">
            {values.map((value, i) => (
              <div key={i}>
                <div className={`h-px ${i === activeIndex ? 'bg-[#822C89]' : 'bg-[#D0D4EE]'} transition-colors duration-300`} />
                <button
                  onClick={() => setActiveIndex(i)}
                  className="w-full flex items-center gap-3 px-2 py-4 bg-transparent border-none cursor-pointer text-left group"
                >
                  <span className={`font-heading font-bold text-[16px] text-[#822C89] min-w-[36px] transition-opacity duration-200 ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
                    {value.number}
                  </span>
                  <span className={`font-heading transition-all duration-200 ${i === activeIndex ? 'font-bold text-[20px] text-[#822C89]' : 'font-normal text-[17px] text-[#9090B0] group-hover:text-[#822C89]/60'}`}>
                    {value.title}
                  </span>
                </button>
              </div>
            ))}
            <div className="h-px bg-[#D0D4EE]" />
          </div>

        </div>
      </div>
    </section>
  )
}