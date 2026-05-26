import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'Building Trust Through Safe Student Transportation',
    date: '12/1/2026',
    excerpt: 'Discover how Yuni Rides prioritizes safety, care, and reliability....',
    image: '/images/blog1.png',
    slug: 'building-trust-safe-student-transportation',
  },
  {
    title: 'Caring Transportation for Every Stage of Life',
    date: '12/1/2026',
    excerpt: 'From children to seniors, Yuni Rides delivers safe, respectful....',
    image: '/images/blog2.png',
    slug: 'caring-transportation-every-stage',
  },
  {
    title: 'How Technology Makes Student Transportation Safer',
    date: '12/1/2026',
    excerpt: 'Explore how real-time tracking, clear communication, and smart....',
    image: '/images/blog3.png',
    slug: 'technology-student-transportation-safer',
  },
]

export default function BlogSection() {
  return (
    <section className="bg-[#FAF8F0] px-4 sm:px-[40px] pt-[60px] pb-[80px]">
      <div className="max-w-[1280px] mx-auto">

        <div className="text-center mb-8">
          <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-7 rounded-full text-[14px] font-medium font-body mb-[14px]">
            Blog
          </span>
          <h2 className="font-heading font-bold text-[clamp(1.5rem,3vw,2rem)] text-[#2C3979] m-0">
            Insights &amp; Stories from Yuni Rides
          </h2>
        </div>

        <div className="bg-[#822C89] rounded-[40px] p-[32px_32px_28px] w-full box-border">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-[20px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] group"
              >

                <div className="p-[20px_20px_16px]">
                  <p className="font-heading font-bold text-[20px] text-[#353637] leading-[27px] m-0 mb-[10px]">
                    {post.title}
                  </p>
                  <div className="inline-flex items-center gap-[6px] bg-[#E5EAFF] rounded-[6px] px-[10px] py-[4px] mb-[10px]">
                    <span className="text-[11px]">📅</span>
                    <span className="text-[12px] text-[#4A4A6A] font-body font-medium">{post.date}</span>
                  </div>
                  <p className="text-[17px] text-[#353637] leading-[24px] font-body m-0 text-justify">
                    {post.excerpt}
                  </p>
                </div>

                <div className="relative h-[227px] shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <Link
                    href={`/blog/${post.slug}`}
                    className="absolute top-4 left-4 z-[2] inline-block bg-[#822C89] hover:bg-[#6B2272] text-white rounded-[10px] px-[22px] py-[10px] text-[13px] font-semibold font-body no-underline shadow-[0_2px_8px_rgba(0,0,0,0.3)] whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 relative">
            {blogPosts.map((post) => (
              <div
                key={`strip-${post.slug}`}
                className="bg-white/[0.12] rounded-[12px] px-4 py-3"
              >
                <p className="text-white text-[12.5px] font-semibold font-body m-0 leading-[1.4]">
                  {post.title}
                </p>
              </div>
            ))}

           
            <div className="absolute -top-2/19 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
              <Link
                href="/blog"
                className="inline-block bg-[#822C89] hover:bg-[#804091] text-white rounded-full px-[30px] py-[11px] text-[13px] font-semibold font-body no-underline whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
              >
                See more Articles
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}