"use client";

import Image from "next/image";

export default function WhyYuniRides() {
  return (
    <section
      style={{
        backgroundColor: "#F7F5F0",
        padding: "80px 86px 100px 86px",
        position: "relative",
        overflow: "hidden",
      }}
    >
    
      {/* ── Section Header ── */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "48px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Pill badge */}
        <div
          style={{
            display: "inline-block",
            background: "#EFF2FF",
            borderRadius: "50px",
            padding: "10px 32px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: "15px",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontWeight: 500,
              color: "#3D1566",
            }}
          >
            Why <strong>Yuni Rides</strong>
          </span>
        </div>

        {/* Paragraph */}
        <p
          style={{
            fontSize: "15px",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            color: "#444",
            lineHeight: 1.75,
            maxWidth: "560px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          Choosing Yuni Rides means choosing a service that is built on the
          value of safety, trust, and care. We understand the importance of
          reliable transportation for children and take our role seriously.
          Every driver is carefully vetted, trained, and committed to
          delivering the highest standard of service. With Yuni Rides, you
          can have peace of mind knowing that your child is in good hands.
        </p>
      </div>

      {/* ── Main Purple Card ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          background: "linear-gradient(135deg, #B3359F 0%, #822C89 100%)",
          borderRadius: "40px",
          minHeight: "360px",
          display: "flex",
          alignItems: "center",
          overflow: "visible",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Illustration — bleeds out from left/bottom of card */}
        <div
          style={{
            position: "relative",
            width: "500px",
            flexShrink: 0,
            alignSelf: "flex-end",
            marginBottom: "-4px",
            marginLeft: "0px",
          }}
        >
          <Image
            src="/images/service4.png"
            alt="Yuni Rides team helping family"
            width={1280}
            height={1000}
            style={{
              objectFit: "contain",
              objectPosition: "bottom left",
              display: "block",
            }}
          />
        </div>

        {/* Right text content */}
        <div
          style={{
            flex: 1,
            padding: "48px 52px 48px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.25,
              margin: "0 0 24px 0",
            }}
          >
            We taking pride to be helping hand with the love and care
          </h2>

          <p
            style={{
              fontSize: "13.5px",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.8,
              margin: "0 0 32px 0",
              textAlign: "justify",
              maxWidth: "503px",
            }}
          >
            At Yuni Rides, we take great pride in being a helping hand to our
            communities, offering transportation services with the love and
            care that every child deserves. Our mission goes beyond just
            getting children from one place to another — we are committed to
            making each journey a safe comfortable and compassionate.
          </p>

          {/* Join Us button */}
          <div>
            <button
              style={{
                background: "#3D1566",
                color: "white",
                border: "none",
                borderRadius: "12px",
                padding: "14px 40px",
                fontSize: "15px",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 4px 18px rgba(0,0,0,0.25)",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 8px 24px rgba(0,0,0,0.32)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 18px rgba(0,0,0,0.25)";
              }}
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}