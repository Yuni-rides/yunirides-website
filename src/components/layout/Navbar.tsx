"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import Button from "@/components/shared/Button";
import { statesData } from "@/app/features/data/statesData";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Become A Driver", href: "/become-a-driver" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

const STATE_MAPS: Record<string, string> = {
  washington: "/images/Washington.png",
  california: "/images/California.png",
  arizona: "/images/Arizona.png",
  illinois: "/images/Illinois.png",
  texas: "/images/texas.png",
  oregon: "/images/Oregon.png",
};

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isServiceActive = statesData.some((s) => pathname === `/${s.slug}`);

  return (
    <header
      className={`left-0 right-0 z-60 w-full transition-all duration-300 ease-in-out ${
        scrolled
          ? "md:fixed md:pt-3 md:px-8"
          : "fixed top-0 md:absolute md:pt-0 md:px-0"
      }`}
    >
      <div
        className={`flex items-center justify-between mx-auto w-full max-w-[1600px] transition-all duration-300 ease-in-out ${
          scrolled
            ? "md:h-[70px] md:px-6 md:bg-white/90 md:backdrop-blur-lg md:rounded-2xl md:shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:border md:border-black/[0.03]"
            : "h-[80px] md:h-[90px] px-4 sm:px-8 lg:px-[86px] bg-white md:bg-transparent border-b border-[#6B2FA0]/10 md:border-none"
        } ${mobileOpen ? "max-md:border-b-0" : ""}`}
      >
        <Link
          href="/"
          className="flex-shrink-0 no-underline transition-transform duration-300 active:scale-95"
        >
          <Image
            src="/images/logo.png"
            alt="Yuni Rides"
            width={scrolled ? 110 : 125}
            height={52}
            className="object-contain transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <nav
          className={`hidden lg:flex items-center h-[52px] px-[10px] gap-[2px] relative transition-all duration-500 ${
            scrolled
              ? "bg-transparent shadow-none"
              : "bg-white/85 border backdrop-blur-sm border-[#6B2FA0]/15 shadow-[0_2px_12px_rgba(107,47,160,0.08)] rounded-full"
          }`}
        >
          {/* Home Link */}
          <Link
            href="/"
            className={`flex items-center h-[36px] px-[14px] rounded-full text-[13.5px] whitespace-nowrap no-underline transition-all duration-200 font-body hover:bg-[#6B2FA0]/[0.06] hover:!text-[#6B2FA0] ${
              pathname === "/"
                ? "font-semibold !text-[#6B2FA0] bg-[#6B2FA0]/10"
                : "font-normal !text-[#444444] bg-transparent"
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown Trigger */}
          <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <Link
              href="/services"
              className={`flex items-center gap-1 h-[36px] px-[14px] rounded-full text-[13.5px] whitespace-nowrap no-underline transition-all duration-200 font-body hover:bg-[#6B2FA0]/[0.06] hover:!text-[#6B2FA0] ${
                pathname === "/services" || isServiceActive
                  ? "font-semibold !text-[#6B2FA0] bg-[#6B2FA0]/10"
                  : "font-normal !text-[#444444] bg-transparent"
              }`}
            >
              Services
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </Link>
          </div>

          {/* Dynamic Nav Links */}
          {NAV_LINKS.slice(1).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center h-[36px] px-[14px] rounded-full text-[13.5px] whitespace-nowrap no-underline transition-all duration-200 font-body hover:bg-[#6B2FA0]/[0.06] hover:!text-[#6B2FA0] ${
                  isActive
                    ? "font-semibold !text-[#6B2FA0] bg-[#6B2FA0]/10"
                    : "font-normal !text-[#444444] bg-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Services Mega Dropdown */}
          {servicesOpen && (
            <div
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white/95 backdrop-blur-lg rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.14)] border border-[#6B2FA0]/10 p-5 z-50"
            >
              <p className="text-[11px] uppercase tracking-wide font-body font-semibold text-[#6B2FA0]/60 mb-3 px-1">
                Special Needs Transportation By State
              </p>
              <div className="grid grid-cols-5 gap-2">
                {statesData.map((s) => {
                  const isSelected = pathname === `/${s.slug}`;
                  const mapImgSrc = STATE_MAPS[s.slug];

                  return (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className={`group flex flex-col items-start gap-2 rounded-[14px] px-4 py-3 no-underline transition-colors duration-150 hover:bg-[#6B2FA0]/[0.06] ${
                        isSelected ? "bg-[#6B2FA0]/[0.07]" : ""
                      }`}
                    >
                      <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                        {mapImgSrc ? (
                          <Image
                            src={mapImgSrc}
                            alt={`${s.stateName} map`}
                            width={24}
                            height={24}
                            className={`object-contain transition-all duration-150 ${
                              isSelected
                                ? "opacity-100 [filter:invert(22%)_sepia(85%)_saturate(2800%)_hue-rotate(265deg)_brightness(90%)_contrast(95%)]"
                                : "opacity-60 group-hover:opacity-100 grayscale"
                            }`}
                          />
                        ) : (
                          <MapPin
                            size={16}
                            className={`transition-colors duration-150 ${
                              isSelected
                                ? "!text-[#6B2FA0]"
                                : "text-[#6B2FA0]/50 group-hover:!text-[#6B2FA0]"
                            }`}
                          />
                        )}
                      </div>
                      <span
                        className={`text-[13.5px] font-body no-underline ${
                          isSelected
                            ? "font-semibold !text-[#6B2FA0]"
                            : "font-normal !text-[#333333] group-hover:!text-[#6B2FA0]"
                        }`}
                      >
                        {s.stateName}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </nav>

        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="hidden sm:block">
            <Button
              label="415-535-2155"
              href="https://wa.me/4155352155"
              target="_blank"
              icon={<WhatsAppIcon />}
              bgColor="bg-yuni-purple"
              textColor="!text-white"
              borderColor="border-yuni-purple"
              hoverBgValue="white"
              hoverTextValue="yuni-purple"
              width="w-auto"
              className="whitespace-nowrap shadow-[0_4px_16px_rgba(130,44,137,0.30)] hover:shadow-[0_8px_24px_rgba(130,44,137,0.45)]"
            />
          </div>

          <button
            className="flex lg:hidden items-center justify-center w-[44px] h-[44px] rounded-[10px] border border-[#6B2FA0]/15 bg-white cursor-pointer text-[#1B2F5E] transition-colors duration-200 hover:bg-[#6B2FA0]/[0.06]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-white px-5 pt-[4px] pb-6 shadow-[0_15px_30px_rgba(0,0,0,0.1)] border-b border-[#6B2FA0]/10 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-[12px] rounded-[10px] text-[15px] no-underline font-body transition-colors duration-150 hover:bg-[#6B2FA0]/[0.06] ${
                pathname === "/"
                  ? "font-semibold !text-white bg-[#6B2FA0]"
                  : "font-normal !text-[#333333]"
              }`}
            >
              Home
            </Link>

            {/* Services accordion (mobile) */}
            <div>
              <div
                className="flex items-center justify-between px-4 py-[12px] rounded-[10px] cursor-pointer"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <Link
                  href="/services"
                  onClick={(e) => e.stopPropagation()}
                  className={`text-[15px] no-underline font-body ${
                    pathname === "/services" || isServiceActive
                      ? "font-semibold !text-[#6B2FA0]"
                      : "font-normal !text-[#333333]"
                  }`}
                >
                  Services
                </Link>
                <ChevronDown
                  size={16}
                  className={`text-[#6B2FA0] transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {mobileServicesOpen && (
                <div className="flex flex-col gap-1 pl-6 pb-1">
                  {statesData.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-[10px] rounded-[10px] text-[14px] no-underline font-body transition-colors duration-150 hover:bg-[#6B2FA0]/[0.06] ${
                        pathname === `/${s.slug}`
                          ? "font-semibold !text-[#6B2FA0]"
                          : "font-normal !text-[#555555]"
                      }`}
                    >
                      {s.stateName}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.slice(1).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-[12px] rounded-[10px] text-[15px] no-underline font-body transition-colors duration-150 hover:bg-[#6B2FA0]/[0.06] ${
                    isActive
                      ? "font-semibold !text-white bg-[#6B2FA0]"
                      : "font-normal !text-[#333333]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-3 sm:hidden">
              <Button
                label="415-535-2155"
                href="https://wa.me/4155352155"
                target="_blank"
                icon={<WhatsAppIcon />}
                bgColor="bg-yuni-purple"
                textColor="text-white"
                borderColor="border-yuni-purple"
                hoverBgValue="yuni-navy"
                hoverTextValue="white"
                width="w-full"
                size="lg"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
