import Image from 'next/image'

export default function AboutMissionCards() {
  return (
    <section className="bg-[#FAF8F0] px-4 sm:px-12 py-20 relative overflow-hidden">

      {/* Blob */}
      <div className="absolute top-0 right-0 w-1/2 h-[60%] pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at 80% 20%, #E8F4FF 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-[1] grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* Card 1 */}
        <div className="bg-yuni-lavender rounded-[20px] p-8 flex flex-col gap-6 box-border md:h-172 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(44,57,121,0.12)] hover:-translate-y-1 active:scale-[0.98] active:shadow-[0_4px_16px_rgba(44,57,121,0.1)] group">
          <div className="bg-white rounded-[14px] p-4 h-[260px] shrink-0 flex items-center justify-center relative overflow-hidden">
            <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-[1.03] group-active:scale-[1.02]">
              <Image src="/images/about-logo-card.png" alt="Yunirides driver with child" fill className="object-contain" />
            </div>
          </div>
          <h3 className="font-heading font-bold text-[1.4rem] text-[#1A1A2E] m-0 leading-[1.3]">
            Welcome To{' '}
            <span className="text-yuni-purple font-extrabold">Yuni Rides</span>
          </h3>
          <p className="text-[18px] text-yuni-text-mid leading-[1.85] font-body text-justify m-0">
            At Yuni Rides, we are committed to providing top-tier, dependable transportation services designed specifically for children. With a focus on safety, Care, and professionalism, we take pride in offering a service that families and communities can trust. Our dedicated team ensures every child's journey is secure, comfortable, and on time, making us a leader in child-focused transportation solution across the nation. Whether it's for school or a special appointment, Yuni Rides is here to serve with integrity and compassion.
          </p>
        </div>

        <div className="bg-yuni-lavender rounded-[20px] p-8 flex flex-col gap-6 box-border md:h-[688px] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(44,57,121,0.12)] hover:-translate-y-1 active:scale-[0.98] active:shadow-[0_4px_16px_rgba(44,57,121,0.1)] group">
          <div className="bg-white rounded-[14px] p-4 h-[260px] shrink-0 flex items-center justify-center relative overflow-hidden">
            <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-[1.03] group-active:scale-[1.02]">
              <Image src="/images/about-family.png" alt="Yunirides family" fill className="object-contain object-center" />
            </div>
           
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] z-[2]">
              <Image src="/images/Group_259.png" alt="Yunirides heart" fill className="object-contain" />
            </div>
          </div>
          <h3 className="font-heading font-bold text-[1.4rem] text-[#1A1A2E] m-0 leading-[1.3]">
            We taking pride to be helping hand with the love and care
          </h3>
          <p className="text-[18px] text-[#4A4A6A] leading-[1.85] font-body text-justify m-0">
            At Yuni Rides, we take great pride in being a helping hand to our communities, offering transportation services with the love and care that every child deserves. Our mission goes beyond just getting children from one place to another – we are committed to making each journey a safe comfortable and compassionate.
          </p>
        </div>

      </div>
    </section>
  )
}