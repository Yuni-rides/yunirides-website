'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',             href: '/' },
  { label: 'Services',         href: '/services' },
  { label: 'About',            href: '/about' },
  { label: 'Become A Driver',  href: '/become-a-driver' },
  { label: 'Careers',          href: '/careers' },
  { label: 'Blog',             href: '/blog' },
  { label: 'Contact Us',       href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full px-6 py-4 bg-transparent relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* ── 1. Logo Section (Left) ── */}
        <Link href="/" className="flex items-center gap-2 bg-white px-5 py-3 rounded-[24px] shadow-sm border border-[#EEF0F7] flex-shrink-0">
          <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-lg bg-[#822C89]">
            Y
          </div>
          <div className="text-xs font-black tracking-tight leading-none text-[#1E2657]">
            YUNI<br />
            <span className="text-[#822C89]">RIDES</span>
          </div>
        </Link>

        {/* ── 2. Fixed Desktop Nav Pill (Center) ── */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/95 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm border border-[#EEF0F7]">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all"
                style={{
                  color: isActive ? '#822C89' : '#656D94',
                  backgroundColor: isActive ? 'rgba(130, 44, 137, 0.06)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* ── 3. Phone Box (Right) ── */}
        <a
          href="tel:+14155352155"
          className="hidden md:flex items-center gap-2 bg-[#21337A] text-white px-6 py-3.5 rounded-[20px] font-bold text-sm shadow-sm hover:bg-[#19275F] transition-colors flex-shrink-0"
        >
          <Phone size={14} className="fill-current" />
          <span>415-535-2155</span>
        </a>

        {/* Hamburger Menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 bg-white rounded-xl border border-[#EEF0F7] text-[#21337A] shadow-sm focus:outline-none"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileOpen && (
        <div className="absolute top-20 left-6 right-6 bg-white p-5 rounded-2xl shadow-xl border border-[#EEF0F7] flex flex-col gap-2 lg:hidden">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
                style={{
                  color: isActive ? '#white' : '#1E2657',
                  backgroundColor: isActive ? '#822C89' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href="tel:+14155352155"
            className="flex items-center justify-center gap-2 bg-[#21337A] text-white p-4 rounded-xl font-bold text-sm mt-2"
          >
            <Phone size={14} />
            <span>415-535-2155</span>
          </a>
        </div>
      )}
    </header>
  )
}