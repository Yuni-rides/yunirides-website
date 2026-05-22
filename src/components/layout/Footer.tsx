"use client";

import Link from "next/link";
import Image from "next/image";

const socialIconStyle: React.CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: "10px",
  background: "rgba(255,255,255,0.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  transition: "background 0.2s",
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#F7F5F0",
        padding: "0 37px 40px 37px",
      }}
    >
      {/* ── CTA bar above footer ── */}
      <div
        style={{
          backgroundColor: "#EAF0FB",
          borderRadius: "16px 16px 0 0",
          padding: "22px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "16px",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            color: "#333",
            fontWeight: 400,
          }}
        >
          Sign up today and start earning additional income.
        </p>
        <button
          style={{
            background: "linear-gradient(135deg, #6B2FA0 0%, #822C89 100%)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            padding: "13px 32px",
            fontSize: "15px",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(130,44,137,0.35)",
          }}
        >
          Join Us
        </button>
      </div>

      {/* ── Main footer body ── */}
      <div
        style={{
          width: "100%",
          maxWidth: "1368px",
          margin: "0 auto",
          backgroundColor: "#822C89",
          borderRadius: "0 0 40px 40px",
          padding: "56px 64px 36px 64px",
          boxSizing: "border-box",
        }}
      >
        {/* ── Newsletter row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(255,255,255,0.12)",
            borderRadius: "14px",
            padding: "22px 32px",
            marginBottom: "56px",
            gap: "24px",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: "18px",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontWeight: 400,
              whiteSpace: "nowrap",
            }}
          >
            Subscribe to our newsletter
          </span>
          <div style={{ display: "flex", gap: "12px", flex: 1, maxWidth: "540px" }}>
            <input
              type="email"
              placeholder="Email"
              style={{
                flex: 1,
                padding: "14px 20px",
                borderRadius: "10px",
                border: "1.5px solid rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.08)",
                color: "white",
                fontSize: "14px",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                outline: "none",
              }}
            />
            <button
              style={{
                padding: "14px 36px",
                borderRadius: "10px",
                border: "none",
                background: "#F5F0E8",
                color: "#3D1566",
                fontSize: "14.5px",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Submit
            </button>
          </div>
        </div>

        {/* ── Middle row: 3 columns ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "48px",
            alignItems: "start",
          }}
        >
          {/* ── Column 1: Logo + Tagline ── */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Image
              src="/images/logowhite.png"
              alt="Yuni Rides"
              width={180}
              height={72}
              style={{
                objectFit: "contain",
                objectPosition: "left",
                filter: "brightness(0) invert(1)",
              }}
            />
            <p
              style={{
                fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
                fontWeight: 900,
                fontSize: "38px",
                color: "white",
                lineHeight: 1.15,
                margin: "48px 0 0 0",
                textTransform: "uppercase",
                letterSpacing: "0.01em",
              }}
            >
              SAFE AND
              <br />
              RELIABLE SCHOOL
              <br />
              TRANSPORTATION
            </p>
          </div>

          {/* ── Column 2: Nav links ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              borderLeft: "1px solid rgba(255,255,255,0.25)",
              borderRight: "1px solid rgba(255,255,255,0.25)",
              padding: "0 32px",
            }}
          >
            {/* Nav col 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {["Home", "Services", "About"].map((item, i) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  style={{
                    color: i === 0 ? "white" : "rgba(255,255,255,0.65)",
                    fontSize: "15px",
                    fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    fontWeight: i === 0 ? 600 : 400,
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Nav col 2 */}
            <div
              style={{
                borderLeft: "1px solid rgba(255,255,255,0.25)",
                paddingLeft: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {["Become A Driver", "Careers", "Blog"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "15px",
                    fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Nav col 3 */}
            <div
              style={{
                borderLeft: "1px solid rgba(255,255,255,0.25)",
                paddingLeft: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <Link
                href="/contact"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "15px",
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* ── Column 3: Contact ── */}
          <div style={{ paddingLeft: "16px" }}>
            <p
              style={{
                color: "white",
                fontSize: "18px",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontWeight: 600,
                margin: "0 0 24px 0",
              }}
            >
              Contact Us:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
              <a
                href="tel:4155352155"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                415-535-2155
              </a>

              <a
                href="mailto:info@yunirides.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                info@yunirides.com
              </a>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "16px" }}>
              <a href="#" aria-label="Facebook" style={socialIconStyle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" style={socialIconStyle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" style={socialIconStyle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="X" style={socialIconStyle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "13px",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              margin: 0,
            }}
          >
            Yunirides® is a registered trademark | © 2025 Yunirides | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
