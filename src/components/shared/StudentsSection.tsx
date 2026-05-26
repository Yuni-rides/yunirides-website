import Image from 'next/image'

const students = [
  { label: 'Mckinney-Vento &\nFoster Youth',     image: '/images/service1.png', purple: true  },
  { label: 'Youth with special\nneeds',           image: '/images/service2.png', purple: false },
  { label: 'Continuing\ntechnical education',     image: '/images/service3.png', purple: true  },
  { label: 'General\neducation',                  image: '/images/service4.png', purple: false },
]

export default function StudentsSection() {
  return (
    <section className="bg-[#FAF8F0] px-4 sm:px-[40px] pt-[60px] pb-[80px]">
      <div className="max-w-[1100px] mx-auto">

        {/* Heading pill */}
        <div className="bg-[#E5EAFF] rounded-[16px] px-[40px] py-[20px] text-center max-w-[580px] mx-auto mb-[52px]">
          <h2 className="font-heading font-bold text-[clamp(1.3rem,2.5vw,1.75rem)] text-[#2C3979] m-0 leading-[1.4]">
            We get all students<br />where they need to go.
          </h2>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px] justify-items-center">
          {students.map((item, i) => (
            <div key={i} className="w-full max-w-[300px] flex flex-col items-center group">

              {/* Illustration — overflows card top */}
              <div className="w-[190px] h-[195px] relative z-[2] -mb-[55px] shrink-0 transition-transform duration-300 group-hover:-translate-y-2">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-contain object-bottom"
                />
              </div>

              {/* Card */}
              <div className={`w-full h-[210px] rounded-[20px] flex items-end justify-center pb-[36px] px-[20px] relative z-[1] box-border transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_8px_28px_rgba(0,0,0,0.13)] ${item.purple ? 'bg-[#822C89]' : 'bg-[#E5EAFF]'}`}>
                <p className={`font-heading font-semibold text-[15px] m-0 text-center leading-[1.5] whitespace-pre-line ${item.purple ? 'text-white' : 'text-[#2C3979]'}`}>
                  {item.label}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}