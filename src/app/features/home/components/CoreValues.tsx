'use client'

import Image from 'next/image'

const coreValues = [
  { title: 'Safety First', description: 'The safety of the transport is our highest priority. Every journey is handled with the utmost caution, adhering to strict safety protocols and utilizing the latest technology to ensure that child is in safe hands.', image: '/images/safety.png', purple: false },
  { title: 'Trust', description: 'We understand the responsibility that comes with transporting children. We strive to build a strong, trusting relationship with families and communities by consistently delivering on our promises of reliability and care.', image: '/images/trust.png', purple: true },
  { title: 'Care and Compassion', description: 'We know that every child is unique, and our drivers and staff are trained to provide transportation with care, understanding, and compassion. Our goal is to create an environment where children feel comfortable, supported, and respected during their rides.', image: '/images/care.png', purple: false },
  { title: 'Reliability', description: "Families depend on us to be on time, every time. Whether it's for school, appointments, or other commitments, we ensure that our transportation are dependable and seamless.", image: '/images/reliability.png', purple: true },
  { title: 'Integrity', description: 'We conduct our business with honesty and transparency. From our drivers to our operational staff, every member of Yuni Rides is committed to upholding the highest ethical standards.', image: '/images/integrity.png', purple: false },
  { title: 'Professionalism', description: 'Our team of drivers and support staff are highly trained professionals dedicated to providing the best possible service. We believe in a level of professionalism that reflects the trust placed in us by parents, schools, and communities.', image: '/images/professionalism.png', purple: true },
]

interface CoreValueItem {
  title: string
  description: string
  image: string
  purple: boolean
}

function TextLeftRow({ item }: { item: CoreValueItem }) {
  return (
    <>
   
      <div className="hidden md:flex items-center justify-start gap-0 w-full pl-[60px]">
 
        <div className="bg-white rounded-[20px] shadow-[0_4px_20px_rgba(44,57,121,0.10)] p-[36px_40px] w-[420px] min-h-[260px] shrink-0 flex flex-col justify-center relative z-[2] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(44,57,121,0.18)] hover:-translate-y-1">
          <h3 className="font-heading font-bold text-[17px] text-yuni-text-dark mb-[10px]">{item.title}</h3>
          <p className="text-[12px] text-yuni-text-mid leading-[1.85] mb-[20px] text-justify font-body">{item.description}</p>
          <button className="btn-outline">See More</button>        </div>
      
        <div className="w-[535px] h-[379px] rounded-[40px] overflow-hidden shrink-0 -ml-[40px] relative z-[3] isolate transition-transform duration-300 hover:scale-[1.02]">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>
      </div>

  
      <div className="flex md:hidden flex-col gap-4 px-4">
        <div className="relative w-full h-[220px] rounded-[20px] overflow-hidden shadow-[0_8px_28px_rgba(44,57,121,0.15)] transition-transform duration-300 hover:scale-[1.02]">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>
        <div className="bg-white rounded-[20px] p-[24px] flex flex-col shadow-[0_4px_20px_rgba(44,57,121,0.10)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(44,57,121,0.18)] hover:-translate-y-1">
          <h3 className="font-heading font-bold text-[17px] text-[#1A1A2E] mb-[10px]">{item.title}</h3>
          <p className="text-[12px] text-[#4A4A6A] leading-[1.85] mb-[20px] text-justify font-body">{item.description}</p>
          <button className="btn-outline">See More</button>        </div>
      </div>
    </>
  )
}

function ImageLeftRow({ item }: { item: CoreValueItem }) {
  return (
    <>
  
      <div className="hidden md:flex items-center justify-end gap-0 w-full pr-[60px]">
      
        <div className="w-[535px] h-[379px] rounded-[40px] overflow-hidden shrink-0 relative z-[3] -mr-[40px] isolate transition-transform duration-300 hover:scale-[1.02]">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>
   
        <div className="bg-yuni-purple rounded-[20px] p-[36px_36px_36px_60px] w-[420px] min-h-[260px] shrink-0 flex flex-col justify-center relative z-[2] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(130,44,137,0.35)] hover:-translate-y-1">
          <h3 className="font-heading font-bold text-[17px] text-white mb-[10px]">{item.title}</h3>
          <p className="text-[12px] text-white/[0.88] leading-[1.85] mb-[20px] text-justify font-body">{item.description}</p>
          <div className="flex justify-end">
            <button className="border-[1.5px] border-white/50 bg-white rounded-lg py-[7px] px-[20px] text-[12px] text-yuni-purple cursor-pointer font-body font-semibold hover:bg-white/90 transition-all">See More</button>
          </div>
        </div>
      </div>

   
      <div className="flex md:hidden flex-col gap-4 px-4">
        <div className="relative w-full h-[220px] rounded-[20px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>
        <div className="bg-yuni-purple rounded-[20px] p-[24px] flex flex-col transition-all duration-300 hover:shadow-[0_8px_32px_rgba(130,44,137,0.35)] hover:-translate-y-1">
          <h3 className="font-heading font-bold text-[17px] text-white mb-[10px]">{item.title}</h3>
          <p className="text-[12px] text-white/[0.88] leading-[1.85] mb-[20px] text-justify font-body">{item.description}</p>
          <div className="flex justify-end">
            <button className="border-[1.5px] border-white/50 bg-white rounded-lg py-[7px] px-[20px] text-[12px] text-yuni-purple cursor-pointer font-body font-semibold">See More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default function CoreValues() {
  return (
    <section className="py-[80px] pb-[100px] relative overflow-hidden">


      <div className="absolute top-0 left-0 right-0 h-[420px] z-0 bg-[#FFFCF2] [clip-path:polygon(0_0,100%_0,100%_88%,0_100%)]" />
      <div className="absolute top-[360px] left-0 right-0 h-[420px] z-0 bg-[#EFF2FF] [clip-path:polygon(0_6%,100%_0,100%_94%,0_100%)]" />
      <div className="absolute top-[720px] left-0 right-0 h-[420px] z-0 bg-[#FFFCF2] [clip-path:polygon(0_0,100%_6%,100%_100%,0_94%)]" />
      <div className="absolute top-[1080px] left-0 right-0 h-[420px] z-0 bg-[#EFF2FF] [clip-path:polygon(0_6%,100%_0,100%_94%,0_100%)]" />
      <div className="absolute top-[1440px] left-0 right-0 h-[420px] z-0 bg-[#FFFCF2] [clip-path:polygon(0_0,100%_6%,100%_100%,0_94%)]" />
      <div className="absolute top-[1800px] left-0 right-0 h-[420px] z-0 bg-[#EFF2FF] [clip-path:polygon(0_6%,100%_0,100%_100%,0_94%)]" />

      <div className="relative z-[2]">
 
        <div className="text-center mb-[60px] px-4">
          <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-[24px] rounded-full text-[14px] font-medium mb-[16px] font-body">About us</span>
          <h2 className="font-heading font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-[#2C3979] mb-[12px] block">About Our Core Values</h2>
          <p className="text-[#4A4A6A] text-[14px] max-w-7xl mx-auto leading-[1.7] font-body">
            The principles that guide every journey, every child, and every family we serve.
          </p>
        </div>

  
        <div className="flex flex-col gap-[80px] max-w-7xl mx-auto">
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