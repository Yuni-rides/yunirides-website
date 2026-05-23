'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',            href: '/' },
  { label: 'Services',        href: '/services' },
  { label: 'About',           href: '/about' },
  { label: 'Become A Driver', href: '/become-a-driver' },
  { label: 'Careers',         href: '/careers' },
  { label: 'Blog',            href: '/blog' },
  { label: 'Contact Us',      href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <style>{`
        .yuni-nav-desktop { display: flex; }
        .yuni-phone-text { display: inline; }
        .yuni-hamburger { display: none; }

        @media (max-width: 1023px) {
          .yuni-nav-desktop { display: none !important; }
          .yuni-hamburger { display: flex !important; }
        }

        @media (max-width: 639px) {
          .yuni-phone-text { display: none; }
          .yuni-phone-cta { padding: 10px 12px !important; }
          .yuni-header-inner { padding: 0 16px !important; }
        }

        .yuni-nav-link:hover {
          background: rgba(107,47,160,0.06) !important;
          color: #6B2FA0 !important;
        }

        .yuni-mobile-link:hover {
          background: rgba(107,47,160,0.06) !important;
        }

        .yuni-phone-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 22px rgba(27,47,94,0.38) !important;
        }
      `}</style>

      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: '#FFFCF2',
        backdropFilter: 'blur(8px)',
      }}>
        {/* Main navbar row */}
        <div
          className="yuni-header-inner"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 86px',
            height: '80px',
            maxWidth: '1600px',
            margin: '0 auto',
          }}
        >

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <Image
              src="/images/logo.png"
              alt="Yuni Rides"
              width={120}
              height={52}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Nav pill */}
          <nav
            className="yuni-nav-desktop"
            style={{
              alignItems: 'center',
              width: '701px',
              height: '52px',
              background: 'rgba(255,255,255,0.85)',
              borderRadius: '50px',
              border: '1px solid rgba(107,47,160,0.15)',
              padding: '0 10px',
              gap: '2px',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 2px 12px rgba(107,47,160,0.08)',
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="yuni-nav-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '36px',
                    padding: '0 14px',
                    borderRadius: '50px',
                    fontSize: '13.5px',
                    fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#6B2FA0' : '#444444',
                    background: isActive ? 'rgba(107,47,160,0.10)' : 'transparent',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right side — Phone CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>

            {/* Phone CTA */}
            <a
              href="tel:4155352155"
              className="yuni-phone-cta"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
                background: '#1B2F5E',
                color: 'white',
                padding: '13px 22px',
                borderRadius: '12px',
                fontSize: '14.5px',
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontWeight: 600,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(27,47,94,0.30)',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="yuni-phone-text">415-535-2155</span>
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="yuni-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                border: '1px solid rgba(107,47,160,0.15)',
                backgroundColor: 'white',
                cursor: 'pointer',
                color: '#1B2F5E',
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div style={{
            backgroundColor: 'white',
            borderTop: '1px solid rgba(107,47,160,0.1)',
            padding: '12px 20px 20px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="yuni-mobile-link"
                    onClick={() => setMobileOpen(false)}
                    style={{
                      padding: '13px 16px',
                      borderRadius: '10px',
                      fontSize: '15px',
                      fontWeight: isActive ? 600 : 400,
                      fontFamily: "'Helvetica Neue', Arial, sans-serif",
                      textDecoration: 'none',
                      color: isActive ? 'white' : '#333',
                      backgroundColor: isActive ? '#6B2FA0' : 'transparent',
                      transition: 'background 0.15s',
                    }}
                  >
                    {link.label}
                  </Link>
                )
              })}
              {/* Phone in mobile menu */}
              <a
                href="tel:4155352155"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '10px',
                  backgroundColor: '#1B2F5E',
                  color: 'white',
                  borderRadius: '10px',
                  padding: '14px',
                  fontSize: '15px',
                  fontWeight: 600,
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  textDecoration: 'none',
                }}
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
    </>
  )
}