import Image from 'next/image'
import { Play } from 'lucide-react'

const sideVideos = [
  { label: 'Real Families. Real Care.', image: '/images/video2.png' },
  { label: 'Safe Rides, Real Impact.',  image: '/images/video3.png' },
  { label: 'Stories That Build Trust',  image: '/images/video4.png' },
]

export default function VideoSection({ label = 'Serving others with Safety' }: { label?: string }) {
  return (
    <section className="bg-[#FAF8F0] px-4 sm:px-[40px] pt-[60px] pb-[80px]">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-7 rounded-full text-[14px] font-medium font-body">
            {label}
          </span>
        </div>

        <div className="w-full rounded-[20px] overflow-hidden border-[6px] border-[#822C89] box-border flex flex-col md:grid md:grid-cols-[1fr_415px] md:h-[645px]">

      
          <div className="relative overflow-hidden h-[300px] md:h-full group cursor-pointer">
            <Image
              src="/images/video-thumb.png"
              alt="Because Every Journey Matters"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              priority
            />
           
            <div className="absolute bottom-0 left-0 right-0 h-[120px]"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)' }}
            />
           
            <div className="absolute bottom-7 left-7 flex items-center gap-3 z-[2]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#822C89] flex items-center justify-center shrink-0 cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#6B2272]">
                <Play size={16} fill="white" color="white" />
              </div>
              <p className="text-white font-heading font-bold text-[20px] m-0">
                Because Every Journey Matters.
              </p>
            </div>
          </div>

          <div className="grid grid-rows-3 border-t-[2px] md:border-t-0 border-[#822C89]">
            {sideVideos.map((v, i) => (
              <div
                key={v.label}
                className={`relative overflow-hidden cursor-pointer group md:border-l-[2px] border-[#822C89] ${i < 2 ? 'border-b border-[#822C89]/30' : ''}`}
              >
                <Image
                  src={v.image}
                  alt={v.label}
                  fill
                  className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-[1.05]"
                />
              
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/20" />
               
                <div className="absolute bottom-[14px] left-[14px] flex items-center gap-2 z-[2]">
                  <div className="w-[28px] h-[28px] rounded-full bg-[#822C89] flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110 group-hover:bg-[#6B2272]">
                    <Play size={10} fill="white" color="white" />
                  </div>
                  <p className="text-white font-body font-semibold text-[13px] m-0">
                    {v.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}