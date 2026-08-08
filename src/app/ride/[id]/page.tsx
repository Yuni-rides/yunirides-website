import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: "Download Driver App - Yuni Rides",
    other: {
      "apple-itunes-app": `app-id=6759739662, app-argument=https://www.yunirides.com/ride/${id}`,
    },
  };
}

export default async function RidePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
        minHeight: "70vh",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          width: "100%",
          backgroundColor: "#ffffff",
          margin: "60px 0 0 0",
          borderRadius: "24px",
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
          padding: "44px 32px",
          textAlign: "center",
          border: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            backgroundColor: "#822c89",
            color: "#ffffff",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px auto",
            boxShadow: "0 10px 15px -3px rgba(124, 58, 237, 0.3)",
          }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.0 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        </div>

        <h1
          style={{
            fontSize: "28px",
            fontWeight: "800",
            color: "#0f172a",
            margin: "0 0 12px 0",
            letterSpacing: "-0.02em",
          }}
        >
          Welcome to Yuni Rides
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "15px",
            lineHeight: "1.6",
            margin: "0 0 32px 0",
          }}
        >
          You’ve been invited as a driver. Download the app below to complete
          your registration and set up your password.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.smartbird.yuniridedriver&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#000000",
              color: "#ffffff",
              padding: "10px 18px",
              borderRadius: "10px",
              textDecoration: "none",
              border: "1px solid #333333",
              minWidth: "185px",
              boxSizing: "border-box",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3.609 1.814L13.793 12 3.61 22.186a1.9 1.9 0 01-.61-1.383V3.197c0-.528.216-1.01.609-1.383z"
                fill="#00F0FF"
              />
              <path
                d="M17.155 8.638l-3.362 3.362 3.362 3.362 3.805-2.187c.808-.465.808-1.737 0-2.202l-3.805-2.335z"
                fill="#FFD000"
              />
              <path
                d="M3.609 1.814L13.793 12 17.155 8.638 4.793.894a1.86 1.86 0 00-1.184.92z"
                fill="#00E676"
              />
              <path
                d="M3.609 22.186L13.793 12l3.362 3.362-12.362 7.744a1.86 1.86 0 01-1.184-.92z"
                fill="#FF3D00"
              />
            </svg>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "9px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: "#d1d5db",
                }}
              >
                GET IT ON
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  fontFamily: "sans-serif",
                  lineHeight: "1.2",
                }}
              >
                Google Play
              </div>
            </div>
          </a>

          <a
            href="https://apps.apple.com/us/app/yuni-rides-driver/id6759739662"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#000000",
              color: "#ffffff",
              padding: "10px 18px",
              borderRadius: "10px",
              textDecoration: "none",
              border: "1px solid #333333",
              minWidth: "185px",
              boxSizing: "border-box",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.86-1 2.98 1.08.08 2.16-.57 2.81-1.38z" />
            </svg>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "9px", color: "#d1d5db" }}>
                Download on the
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  fontFamily: "sans-serif",
                  lineHeight: "1.2",
                }}
              >
                App Store
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
