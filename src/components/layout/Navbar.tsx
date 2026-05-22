"use client";

import Link from "next/link";
import Image from "next/image";
const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Services", href: "/services", active: false },
  { label: "About", href: "/about", active: false },
  { label: "Become A Driver", href: "/become-a-driver", active: false },
  { label: "Careers", href: "/careers", active: false },
  { label: "Blog", href: "/blog", active: false },
  { label: "Contact Us", href: "/contact", active: false },
];

export default function Navbar() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 86px",
        backgroundColor: "#FFFCF2",
      }}
    >
    <Link href="/" style={{ textDecoration: "none" }}>
  <Image
    src="/images/logo.png"
    alt="Yuni Rides"
    width={120}
    height={52}
    style={{ objectFit: "contain" }}
    priority
  />
</Link>

      {/* ── Nav pill — 701.45 × 52 ── */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          width: "701px",
          height: "52px",
          background: "rgba(255, 255, 255, 0.85)",
          borderRadius: "50px",
          border: "1px solid rgba(107, 47, 160, 0.15)",
          padding: "0 10px",
          gap: "2px",
          backdropFilter: "blur(8px)",
          boxShadow: "0 2px 12px rgba(107,47,160,0.08)",
        }}
      >
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            style={{
              display: "flex",
              alignItems: "center",
              height: "36px",
              padding: "0 14px",
              borderRadius: "50px",
              fontSize: "13.5px",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontWeight: item.active ? 600 : 400,
              color: item.active ? "#6B2FA0" : "#444444",
              background: item.active ? "rgba(107, 47, 160, 0.10)" : "transparent",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              if (!item.active) {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(107,47,160,0.06)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#6B2FA0";
              }
            }}
            onMouseLeave={(e) => {
              if (!item.active) {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#444444";
              }
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* ── Phone CTA ── */}
      <a
        href="tel:4155352155"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "9px",
          background: "#1B2F5E",
          color: "white",
          padding: "13px 22px",
          borderRadius: "12px",
          fontSize: "14.5px",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontWeight: 600,
          textDecoration: "none",
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
          boxShadow: "0 4px 16px rgba(27,47,94,0.30)",
          transition: "transform 0.15s, box-shadow 0.15s",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 8px 22px rgba(27,47,94,0.38)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 4px 16px rgba(27,47,94,0.30)";
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        415-535-2155
      </a>
    </header>
  );
}
