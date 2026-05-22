"use client";

import Image from "next/image";

const students = [
  {
    label: "Mckinney-Vento &\nFoster Youth",
    image: "/images/students/foster.png",
    purple: true,
  },
  {
    label: "Youth with special\nneeds",
    image: "/images/students/special.png",
    purple: false,
  },
  {
    label: "Continuing\ntechnical education",
    image: "/images/students/technical.png",
    purple: true,
  },
  {
    label: "General\neducation",
    image: "/images/students/general.png",
    purple: false,
  },
];

export default function StudentsSection() {
  return (
    <section
      style={{
        backgroundColor: "#F7F5F0",
        padding: "60px 86px 80px 86px",
      }}
    >
      {/* ── Outer container: 1282×545, light lavender bg ── */}
      <div
        style={{
          maxWidth: "1282px",
          margin: "0 auto",
          backgroundColor: "#EEF0FA",
          borderRadius: "32px",
          border: "1.5px solid #D6D9F0",
          padding: "40px 48px 52px 48px",
          boxSizing: "border-box",
        }}
      >
        {/* ── Heading ── */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontWeight: 600,
            color: "#2D0F54",
            margin: "0 0 52px 0",
            lineHeight: 1.4,
          }}
        >
          We get all students
          <br />
          where they need to go.
        </h2>

        {/* ── 4 Cards row ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            alignItems: "end",
          }}
        >
          {students.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Illustration — sits above card, overlapping top */}
              <div
                style={{
                  width: "180px",
                  height: "190px",
                  position: "relative",
                  zIndex: 2,
                  marginBottom: "-32px", // overlap into the card
                  flexShrink: 0,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  style={{ objectFit: "contain", objectPosition: "bottom" }}
                />
              </div>

              {/* Card */}
              <div
                style={{
                  width: "100%",
                  backgroundColor: item.purple ? "#7B35B0" : "#EEEDF5",
                  borderRadius: "20px",
                  paddingTop: "48px", // space for image overlap
                  paddingBottom: "28px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  textAlign: "center",
                  boxSizing: "border-box",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    fontWeight: 500,
                    color: item.purple ? "white" : "#6B2FA0",
                    margin: 0,
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
