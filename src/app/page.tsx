"use client";
import Image from "next/image";
import React from 'react';
import CoreValues from "@/components/CoreValues";
import MapSection from '@/components/MapSection';
import BecomeCustomer from '@/components/BecomeCustomer';
import WhyYuniRides from "@/components/WhyYuniRides";
import WhyChoosing from "@/components/Whychoosing";
import StudentsSection from "@/components/StudentsSection";


export default function HomePage() {
  // Main bounding box container for the entire Hero row layout area
  const heroWrapperStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "1274px",
    margin: "0 auto",
    position: "relative",
    minHeight: "552px", // Base structural height for content placement
    display: "flex",
    alignItems: "center",
  };

  // LEFT — Floating text block container
  const leftPanelStyle: React.CSSProperties = {
    background: "linear-gradient(145deg, #EDE9F5 0%, #F0EBF8 60%, #E8E4F2 100%)",
    padding: "52px 48px 48px 52px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
    width: "1274px", // Fits the design structure on the left side
    borderRadius: "40px",
    boxShadow: "0 8px 48px rgba(61,21,102,0.06)",
  };

  return (
    <main style={{ overflow: "hidden" }}>
      {/* Structural section to handle the overflow sizing without page breaking */}
      <section style={{ padding: "100px 0", position: "relative" }}>
        
        <div style={heroWrapperStyle}>
          
          {/* LEFT — Text panel container block */}
          <div style={leftPanelStyle}>
          
            <h1
              style={{
                fontSize: "42px",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontWeight: 700,
                color: "#2D0F54",
                lineHeight: 1.22,
                margin: "0 0 18px 0",
                maxWidth: "380px",
              }}
            >
              Technology meets care –{" "}
              <span style={{ color: "#6B2FA0" }}>We transport the future</span>
            </h1>
              <p
              style={{
                fontSize: "15px",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                color: "#555",
                lineHeight: 1.6,
                margin: "0 0 36px 0",
                maxWidth: "320px",
              }}
            >
              Technology-driven, caring transportation service trusted by families across the U.S.
            </p>

            {/* CTA row */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <button
                style={{
                  background: "linear-gradient(135deg, #6B2FA0 0%, #8B44C4 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  padding: "14px 28px",
                  fontSize: "15px",
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 6px 20px rgba(107,47,160,0.40)",
                  transition: "transform 0.15s, box-shadow 0.15s",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.target as HTMLButtonElement).style.boxShadow = "0 10px 28px rgba(107,47,160,0.50)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.target as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(107,47,160,0.40)";
                }}
              >
                Become A Driver
              </button>

              {/* Avatar circle */}
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #5A9BD4 0%, #4A8AC4 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "17px",
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  flexShrink: 0,
                  boxShadow: "0 2px 8px rgba(90,155,212,0.35)",
                }}
              >
                Y
              </div>
            </div>

            {/* Slider dots */}
            <div style={{ display: "flex", gap: "8px", marginTop: "32px" }}>
              {[true, false, false, false].map((active, i) => (
                <div
                  key={i}
                  style={{
                    width: active ? 28 : 10,
                    height: 10,
                    borderRadius: "5px",
                    background: active ? "#6B2FA0" : "#C9B8DC",
                    transition: "all 0.3s",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — Exact Figma Image Box Configuration */}
          <div 
            style={{ 
              position: "absolute", 
              width: "795px",       // Taken directly from your Layout sidebar
              height: "713px",     // Taken directly from your Layout sidebar
              top: "-7px",        // Negative placement offset from your sidebar
              left: "670px",       // Explicit positioning alignment from your sidebar
              overflow: "hidden",
              borderRadius: "40px",
              zIndex: 2,
            }}
          >
            <Image
              src="/images/hero.png"
              alt="Yuni Rides driver assisting elderly passenger"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
              priority
            />
          </div>

        </div>
         
      </section>
       <CoreValues />
       <MapSection />
       <BecomeCustomer />
       <WhyYuniRides />
       <WhyChoosing />
       <StudentsSection />
    </main>
  );
}
