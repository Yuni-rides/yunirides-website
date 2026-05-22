"use client";

import Image from "next/image";

export default function WhyChoosing() {
  return (
    <section
      style={{
        backgroundColor: "#F7F5F0",
        padding: "60px 0 80px 0",
      }}
    >
      {/* ── Heading ── */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "26px",
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontWeight: 700,
            color: "#2D0F54",
            margin: 0,
          }}
        >
          Why choosing{" "}
          <span
            style={{
              borderBottom: "2px solid #6B2FA0",
              paddingBottom: "2px",
              color: "#2D0F54",
            }}
          >
            Yuni Rides
          </span>
        </h2>
      </div>

      {/* ── All 3 rows inside a fixed-width container matching Figma canvas ── */}
      {/* Figma total width = 79 + 302 + (405-302-79 gap) + 954 = ~1360px area */}
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 79px",
          display: "flex",
          flexDirection: "column",
          gap: "22px", // Figma row gaps: 8900-8643=257px, 9157-8900=257px minus 235 height = 22px gap
        }}
      >

        {/* ── ROW 1: Image LEFT (302×235) · Green card RIGHT (954×235) ── */}
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: "24px",
          }}
        >
          {/* Image */}
          <div
            style={{
              width: "302px",
              height: "235px",
              borderRadius: "40px",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            }}
          >
            <Image
              src="/images/school.png"
              alt="School Districts"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Green card — 954px wide but flex-1 to fill remaining space */}
          <div
            style={{
              flex: 1,
              height: "235px",
              borderRadius: "40px",
              background: "#8B9B6A",
              padding: "28px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontWeight: 700,
                color: "#1a1a1a",
                margin: "0 0 10px 0",
              }}
            >
              School Districts:
            </h3>
            <p
              style={{
                fontSize: "12.5px",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                color: "#1a1a1a",
                lineHeight: 1.75,
                margin: 0,
                textAlign: "justify",
              }}
            >
              School districts trust <strong>Yuni Rides</strong> for consistent,
              dependable transportation solutions that put student safety and well-being
              first. Our streamlined operations, transparent reporting, and strong
              commitment to inclusive and special-needs transportation—powered by
              innovative technology—make us a trusted partner in supporting student
              success.
            </p>
          </div>
        </div>

        {/* ── ROW 2: Green card LEFT (954×235) · Image RIGHT (302×235) ── */}
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: "24px",
          }}
        >
          {/* Green card */}
          <div
            style={{
              flex: 1,
              height: "235px",
              borderRadius: "40px",
              background: "#8B9B6A",
              padding: "28px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontWeight: 700,
                color: "#1a1a1a",
                margin: "0 0 10px 0",
              }}
            >
              Hospitals &amp; Healthcare Facilities:
            </h3>
            <p
              style={{
                fontSize: "12.5px",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                color: "#1a1a1a",
                lineHeight: 1.75,
                margin: 0,
                textAlign: "justify",
              }}
            >
              Hospitals and healthcare facilities trust <strong>Yuni Rides</strong> to
              provide safe, reliable, and compassionate transportation for patients and
              families. We support medical appointments, therapy sessions, and specialized
              care needs with professional drivers, strict safety standards, and
              technology-enabled coordination—ensuring every journey is timely, secure,
              and stress-free for both patients and care teams.
            </p>
          </div>

          {/* Image */}
          <div
            style={{
              width: "302px",
              height: "235px",
              borderRadius: "40px",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            }}
          >
            <Image
              src="/images/hospital.png"
              alt="Hospitals & Healthcare"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* ── ROW 3: Image LEFT (302×235) · Green card (628×235) · CTA block (302px) ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          {/* Image */}
          <div
            style={{
              width: "302px",
              height: "235px",
              borderRadius: "40px",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            }}
          >
            <Image
              src="/images/parents.png"
              alt="Parents, Students & Guardians"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Green card — 628px */}
          <div
            style={{
              width: "628px",
              height: "235px",
              borderRadius: "40px",
              background: "#8B9B6A",
              padding: "28px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxSizing: "border-box",
              flexShrink: 0,
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontWeight: 700,
                color: "#1a1a1a",
                margin: "0 0 10px 0",
              }}
            >
              Parents, Students &amp; Guardians.
            </h3>
            <p
              style={{
                fontSize: "12.5px",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                color: "#1a1a1a",
                lineHeight: 1.75,
                margin: 0,
                textAlign: "justify",
              }}
            >
              <strong>Yuni Rides</strong> gives parents and guardians confidence through
              safe, transparent, and child-focused transportation—every ride, every day.
            </p>
          </div>

          {/* CTA block — 302px wide, text + button (302×70) */}
          <div
            style={{
              width: "302px",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              paddingTop: "46px", // vertically offset to align button at bottom like Figma (top:9318 - top:9157 = 161px offset)
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontWeight: 700,
                color: "#2D0F54",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              What are you thinking of?
            </p>
            {/* Button: 302×70, border-radius: 10px */}
            <button
              style={{
                width: "302px",
                height: "70px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #6B2FA0 0%, #822C89 100%)",
                color: "white",
                border: "none",
                fontSize: "15px",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(107,47,160,0.35)",
                letterSpacing: "0.01em",
              }}
            >
              Discuss with Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}