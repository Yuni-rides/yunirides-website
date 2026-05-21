import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-6 pb-6 mt-20">
      <div className="max-w-7xl mx-auto relative">
        
        {/* ── 1. Floating Banner ── */}
        <div className="w-full bg-[#EAEFFF] rounded-[24px] px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 translation-y-1/2 shadow-sm">
          <p className="text-base md:text-lg font-bold text-[#1E2657] text-center sm:text-left">
            Sign up today and start earning additional income.
          </p>
          <Link 
            href="/become-a-driver" 
            className="bg-[#822C89] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md hover:bg-[#6D2473] transition-all flex-shrink-0"
          >
            Join Us
          </Link>
        </div>

        {/* ── 2. Main High-Radius Purple Box ── */}
        <div className="bg-[#822C89] rounded-[40px] px-6 md:px-12 pb-8 pt-24 -mt-8 w-full shadow-lg">
          
          {/* Newsletter Segment */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/10 rounded-2xl p-4 md:p-6 mb-12 border border-white/10">
            <h4 className="text-white text-base font-semibold">Subscribe to our newsletter</h4>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Email"
                className="w-full md:w-64 bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-2.5 rounded-xl text-sm outline-none focus:border-white/40"
              />
              <button className="bg-white text-[#822C89] font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-white/90 transition-colors flex-shrink-0">
                Submit
              </button>
            </div>
          </div>

          {/* Core Info & Column Alignment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 mb-12">
            
            {/* Branding Column */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-xl font-black text-[#822C89]">
                  Y
                </div>
                <h3 className="text-2xl font-black tracking-tight leading-none text-white">
                  YUNI<br />RIDES
                </h3>
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white/95 max-w-sm leading-tight">
                SAFE AND<br />RELIABLE SCHOOL<br />TRANSPORTATION
              </h2>
            </div>

            {/* Links Group A */}
            <div className="md:col-span-2 md:pl-4">
              <ul className="space-y-3">
                {['Home', 'Services', 'About'].map((link) => (
                  <li key={link}>
                    <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-white/80 hover:text-white text-sm font-semibold transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Group B */}
            <div className="md:col-span-2">
              <ul className="space-y-3">
                {[
                  { n: 'Become A Driver', h: '/become-a-driver' },
                  { n: 'Careers', h: '/careers' },
                  { n: 'Blog', h: '/blog' }
                ].map((link) => (
                  <li key={link.n}>
                    <Link href={link.h} className="text-white/80 hover:text-white text-sm font-semibold transition-colors whitespace-nowrap">
                      {link.n}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Box */}
            <div className="md:col-span-3 space-y-5">
              <div>
                <span className="text-white/70 text-xs font-bold block mb-2 uppercase tracking-wider">Contact Us:</span>
                <ul className="space-y-2 text-white/95 text-sm font-medium">
                  <li>
                    <a href="tel:+14155352155" className="flex items-center gap-2 hover:text-white transition-colors">
                      <Phone size={14} /> 415-535-2155
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@yunirides.com" className="flex items-center gap-2 hover:text-white transition-colors break-all">
                      <Mail size={14} /> info@yunirides.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Explicit Size Capped Social Icons */}
              <div className="flex items-center gap-4 pt-1 text-white/80">
                {/* Facebook */}
                <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                </a>
                {/* Instagram */}
                <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                {/* X */}
                <a href="#" className="hover:text-white transition-colors" aria-label="X">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
              </div>
            </div>

          </div>

          {/* Copyright Divider */}
          <div className="pt-6 border-t border-white/10 text-center text-[11px] text-white/50 tracking-wide">
            Yunirides® is a registered trademark | © 2025 Yunirides | All rights reserved
          </div>

        </div>
      </div>
    </footer>
  )
}