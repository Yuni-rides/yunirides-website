'use client'


import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect} from 'react'
import { Menu, X } from 'lucide-react'




const NAV_LINKS = [
  { label: 'Home',            href: '/' },
  { label: 'Services',        href: '/services' },
  { label: 'About',           href: '/about' },
  { label: 'Become A Driver', href: '/become-a-driver' },
  { label: 'Careers',         href: '/careers' },
  { label: 'Blog',            href: '/blog' },
  { label: 'Contact Us',      href: '/contact-us' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 20)
  window.addEventListener('scroll', onScroll)
  return () => window.removeEventListener('scroll', onScroll)
}, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
  scrolled
    ? 'bg-yuni-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]'
    : 'bg-transparent'
}`}>
      <div className="
        flex items-center justify-between
        h-[80px]
        px-[86px]
        max-w-[1600px] mx-auto
        max-[639px]:px-4
      ">

        <Link href="/" className="flex-shrink-0 no-underline">
          <Image
            src="/images/logo.png"
            alt="Yuni Rides"
            width={120}
            height={52}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="
          hidden lg:flex items-center
          w-[701px] h-[52px]
          bg-white/85 backdrop-blur-sm
          rounded-full
          border border-[#6B2FA0]/15
          px-[10px] gap-[2px]
          shadow-[0_2px_12px_rgba(107,47,160,0.08)]
        ">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  flex items-center h-[36px] px-[14px]
                  rounded-full
                  text-[13.5px] whitespace-nowrap no-underline
                  transition-all duration-200
                  font-[Helvetica_Neue,Arial,sans-serif]
                  hover:bg-[#6B2FA0]/[0.06] hover:text-[#6B2FA0]
                  ${isActive
                    ? 'font-semibold text-[#6B2FA0] bg-[#6B2FA0]/10'
                    : 'font-normal text-[#444444] bg-transparent'
                  }
                `}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3 flex-shrink-0">

          {/* Phone CTA — sweep hover animation via pseudo-element trick */}
          <a
            href="tel:4155352155"
            className="
              group
              relative overflow-hidden
              flex items-center gap-2.5
              bg-[#2C3979] !text-white
              px-[22px] py-[13px]
              rounded-xl
              text-[14.5px] font-semibold no-underline whitespace-nowrap
              shadow-[0_4px_16px_rgba(27,47,94,0.30)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_8px_24px_rgba(27,47,94,0.45)]
              active:scale-95
              max-[639px]:px-3
              [&>span.sweep]:absolute
              [&>span.sweep]:inset-0
              [&>span.sweep]:bg-[#6B2FA0]
              [&>span.sweep]:-translate-x-full
              [&>span.sweep]:transition-transform
              [&>span.sweep]:duration-300
              [&>span.sweep]:ease-in-out
              hover:[&>span.sweep]:translate-x-0
            "
          >
            {/* Sweep layer — slides in from left on hover */}
            <span className="sweep" aria-hidden="true" />

            <svg
              width="15" height="15" viewBox="0 0 24 24" fill="white"
              className="relative z-10 transition-transform duration-200 group-hover:rotate-12 flex-shrink-0"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="relative z-10 max-[639px]:hidden !text-white">415-535-2155</span>
          </a>

          {/* Hamburger */}
          <button
            className="
              flex lg:hidden items-center justify-center
              w-[44px] h-[44px]
              rounded-[10px]
              border border-[#6B2FA0]/15
              bg-white
              cursor-pointer
              text-[#1B2F5E]
              transition-colors duration-200
              hover:bg-[#6B2FA0]/[0.06]
            "
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="
          lg:hidden
          bg-white
          border-t border-[#6B2FA0]/10
          px-5 pt-[12px] pb-5
          shadow-[0_8px_24px_rgba(0,0,0,0.08)]
          relative z-50
        ">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    px-4 py-[13px]
                    rounded-[10px]
                    text-[15px] no-underline
                    font-[Helvetica_Neue,Arial,sans-serif]
                    transition-colors duration-150
                    hover:bg-[#6B2FA0]/[0.06]
                    ${isActive
                      ? 'font-semibold !text-white bg-[#6B2FA0]'
                      : 'font-normal text-[#333333]'
                    }
                  `}
                >
                  {link.label}
                </Link>
              )
            })}

            <a
              href="tel:4155352155"
              className="
                flex items-center justify-center gap-2
                mt-[10px]
                bg-[#1B2F5E] !text-white
                rounded-[10px]
                py-[14px]
                text-[15px] font-semibold no-underline
                font-[Helvetica_Neue,Arial,sans-serif]
                transition-colors duration-200
                hover:bg-[#223070]
              "
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              415-535-2155
            </a>
          </nav>
        </div>
      )}

    </header>
  )
}