'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const coreValues = [
  { title: 'Safety First', description: 'The safety of the transport is our highest priority. Every journey is handled with the utmost caution, adhering to strict safety protocols and utilizing the latest technology to ensure that child is in safe hands.', image: '/images/safety.png', purple: false },
  { title: 'Trust', description: 'We understand the responsibility that comes with transporting children. We strive to build a strong, trusting relationship with families and communities by consistently delivering on our promises of reliability and care.', image: '/images/trust.png', purple: true },
  { title: 'Care and Compassion', description: 'We know that every child is unique, and our drivers and staff are trained to provide transportation with care, understanding, and compassion. Our goal is to create an environment where children feel comfortable, supported, and respected during their rides.', image: '/images/care.png', purple: false },
  { title: 'Reliability', description: "Families depend on us to be on time, every time. Whether it's for school, appointments, or other commitments, we ensure that our transportation are dependable and seamless.", image: '/images/reliability.png', purple: true },
  { title: 'Integrity', description: 'We conduct our business with honesty and transparency. From our drivers to our operational staff, every member of Yuni Rides is committed to upholding the highest ethical standards.', image: '/images/integrity.png', purple: false },
  { title: 'Professionalism', description: 'Our team of drivers and support staff are highly trained professionals dedicated to providing the best possible service. We believe in a level of professionalism that reflects the trust placed in us by parents, schools, and communities.', image: '/images/professionalism.png', purple: true },
]

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

interface CoreValueItem {
  title: string
  description: string
  image: string
  purple: boolean
}

const CARD_W = 380
const CARD_H = 300
const IMG_W  = 380
const IMG_H  = 300
const FLOAT  = 38
const OVERLAP = 40
const ROW_H = CARD_H + FLOAT

function TextLeftRow({ item }: { item: CoreValueItem }) {
//   const ref = useScrollReveal()
//   return (
//     <>
//       {/* DESKTOP */}
//       <div
//         ref={ref}
//         className="
//           hidden md:block relative overflow-hidden
//           opacity-0 -translate-x-10
//           transition-all duration-700 ease-out
//           [&.revealed]:opacity-100 [&.revealed]:translate-x-0
//         "
//         style={{ height: `${ROW_H}px` }}
//       >
//         <div
//           className="absolute z-10 bg-yuni-white rounded-[40px] flex flex-col justify-center"
//           style={{
//             width:   `${CARD_W}px`,
//             minHeight:  `${CARD_H}px`,
//             left:    '0px',
//             top:     `${FLOAT}px`,
//             padding: '36px 44px',
//           }}
//         >
//           <h3 className="font-heading font-semibold text-[25px] leading-[53px] tracking-normal">
//             {item.title}
//           </h3>
//           <p className="font-body font-light text-[18px] leading-[24px] tracking-normal text-justify"
//             style={{ fontWeight: 300, fontSize: '15px', lineHeight: '24px' }}>
//             {item.description}
//           </p>
         
//           <button className="btn-primary">See More</button>
//         </div>

//         <div
//           className="absolute z-20 rounded-[40px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
//           style={{
//             width:  `${IMG_W}px`,
//             minHeight: `${IMG_H}px`,
//             left:   `${CARD_W - OVERLAP}px`,
//             top:    '0px',
//           }}
//         >
//           <Image src={item.image} alt={item.title} fill className="object-cover" />
//         </div>
//       </div>

//       {/* MOBILE */}
//       <div className="flex md:hidden flex-col gap-4">
//         <div className="relative w-full h-[220px] rounded-[28px] overflow-hidden">
//           <Image src={item.image} alt={item.title} fill className="object-cover" />
//         </div>
//         <div className="bg-yuni-white rounded-[28px] px-[28px] py-[24px] flex flex-col">
//           <h3 className="font-heading font-bold text-[17px] text-yuni-navy mb-[8px]">{item.title}</h3>
//           <p className="font-body text-yuni-text-mid leading-[1.7] mb-[18px] text-justify"
//             style={{ fontWeight: 300, fontSize: '14px' }}>{item.description}</p>
//           {/* Global btn-primary */}
//           <button className="btn-primary">See More</button>
//         </div>
//       </div>
//     </>
//   )
// }

// function TextLeftRow({ item }: { item: CoreValueItem }) {
  const ref = useScrollReveal()
  return (
    <>
      {/* DESKTOP */}
      <div
        ref={ref}
        className="
          hidden md:flex items-start relative
          opacity-0 -translate-x-10
          transition-all duration-700 ease-out
          [&.revealed]:opacity-100 [&.revealed]:translate-x-0
        "
      >
      

        {/* White text card — exact same size as image w-[380px] h-[300px] */}
        <div className="
          relative z-10
          bg-yuni-white rounded-[40px]
          w-[380px] min-h-[300px] shrink-0
          flex flex-col justify-center
          px-[44px] py-[36px]
          mt-[38px]
        ">
          <h3 className="font-heading font-semibold text-[25px] leading-[32px] text-yuni-navy mb-[10px]">
            {item.title}
          </h3>
          <p className="font-body font-light text-[15px] leading-[24px] text-justify text-yuni-text-mid mb-[20px]">
            {item.description}
          </p>
          <button className="btn-primary">See More</button>
        </div>

        {/* Image — exact same size w-[380px] h-[300px], floats up, overlaps card */}
        <div className="
          relative z-20
          w-[380px] min-h-[300px] shrink-0
          rounded-[40px] overflow-hidden
          -ml-[40px] mt-[0px]
          transition-transform duration-300 hover:scale-[1.02]
        ">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex md:hidden flex-col gap-4">
        <div className="relative w-full h-[220px] rounded-[28px] overflow-hidden">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>
        <div className="bg-yuni-white rounded-[28px] px-[28px] py-[24px] flex flex-col">
          <h3 className="font-heading font-semibold text-[18px] leading-snug text-yuni-navy mb-[8px]">
            {item.title}
          </h3>
          <p className="font-body font-light text-[14px] leading-[22px] text-justify text-yuni-text-mid mb-[18px]">
            {item.description}
          </p>
          <button className="btn-primary">See More</button>
        </div>
      </div>
    </>
  )
}
function ImageLeftRow({ item }: { item: CoreValueItem }) {
  const ref = useScrollReveal()
  const pairW = IMG_W + CARD_W - OVERLAP

  return (
    <>
      {/* DESKTOP */}
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
            width:  `${IMG_W}px`,
            height: `${IMG_H}px`,
            right:  `${CARD_W - OVERLAP}px`,
            top:    '0px',
          }}
        >
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>

        <div
          className="absolute z-10 bg-yuni-purple rounded-[40px] flex flex-col justify-center"
          style={{
            width:   `${CARD_W}px`,
            height:  `${CARD_H}px`,
            right:   '0px',
            top:     `${FLOAT}px`,
            padding: '36px 44px 36px 60px',
          }}
        >
          <h3 className="font-heading font-bold text-[18px] text-yuni-white mb-[10px] leading-[24px]">
            {item.title}
          </h3>
          <p className="font-body text-yuni-white/90 mb-[24px] text-justify"
            style={{ fontWeight: 300, fontSize: '15px', lineHeight: '24px' }}>
            {item.description}
          </p>
          {/* Global btn-card-outline — transparent white border sweeps white */}
          <div className="flex justify-end">
            <button className="btn-card-outline">See More</button>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex md:hidden flex-col gap-4">
        <div className="relative w-full h-[220px] rounded-[28px] overflow-hidden">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>
        <div className="bg-yuni-purple rounded-[28px] px-[28px] py-[24px] flex flex-col">
          <h3 className="font-heading font-bold text-[17px] text-yuni-white mb-[8px]">{item.title}</h3>
          <p className="font-body text-yuni-white/90 leading-[1.7] mb-[18px] text-justify"
            style={{ fontWeight: 300, fontSize: '14px' }}>{item.description}</p>
          {/* Global btn-card-outline */}
          <div className="flex justify-end">
            <button className="btn-card-outline">See More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default function CoreValues() {
  return (
    <section className="py-[80px] pb-[120px] bg-yuni-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-[72px]">
          <span className="inline-block bg-yuni-card text-yuni-text-mid py-[6px] px-[22px] rounded-full text-[13px] font-medium mb-[14px] font-body">
            About us
          </span>
          <h2 className="font-heading font-bold text-[clamp(1.5rem,2.8vw,2rem)] text-yuni-navy mb-[10px] block">
            About Our Core Values
          </h2>
          <p className="text-yuni-text-mid text-[13px] max-w-[400px] mx-auto leading-[1.7] font-body">
            The principles that guide every journey, every child, and every family we serve.
          </p>
        </div>

        <div className="flex flex-col gap-[80px] overflow-hidden">
          {coreValues.map((item, i) =>
            i % 2 === 0
              ? <TextLeftRow key={item.title} item={item} />
              : <ImageLeftRow key={item.title} item={item} />
          )}
        </div>

      </div>
    </section>
  )
}