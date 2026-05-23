import Image from 'next/image'
import Link from 'next/link'

export default function AboutWhyTrusted() {
  return (
    <section style={{
      backgroundColor: '#FAF8F0',
      padding: '5rem 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Left lavender blob */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '52%',
        height: '52%',
        background: '#EFF2FF',
        borderRadius: '0 0 80% 0',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1357px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
      }}>

        {/* TOP — heading left, text right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'flex-start',
        }}>

          {/* Left — heading box + buttons */}
          <div>
            {/* Heading box — 444x160, border-radius 30px */}
            <div style={{
              backgroundColor: '#EFF2FF',
              width: '444px',
              height: '160px',
              borderRadius: '30px',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              padding: '0 1.75rem',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(1.3rem, 2vw, 1.75rem)',
                color: '#1A1A2E',
                lineHeight: 1.3,
                margin: 0,
              }}>
                Why Yuni Rides Is<br />the Trusted Choice
              </h2>
            </div>

            {/* Buttons — 201x70 each */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Link href="/contact" style={{
                width: '201px',
                height: '70px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#2C3979',
                color: 'white',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
              }}>Contact us</Link>

              <a href="tel:4155352155" style={{
                width: '201px',
                height: '70px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: 'white',
                color: '#2C3979',
                border: '1.5px solid #DDE2FF',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#2C3979">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                415-535-2155
              </a>
            </div>
          </div>

          {/* Right — description text */}
          <p style={{
            fontSize: '13.5px',
            color: '#4A4A6A',
            lineHeight: 1.9,
            fontFamily: 'var(--font-body)',
            textAlign: 'justify',
            paddingTop: '0.5rem',
          }}>
            Choosing Yuni Rides means partnering with a transportation service built on safety, trust, and genuine care. We understand how critical reliable transportation is for children, and we take that responsibility seriously. Every driver is carefully vetted, professionally trained, and dedicated to delivering the highest standard of service—so families can have complete peace of mind knowing their child is in safe, capable hands.
          </p>
        </div>

        {/* BOTTOM — image 1357x778, border-radius 37px */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '778px',
          borderRadius: '37px',
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(44,57,121,0.1)',
        }}>
          <Image
            src="/images/about-why.png"
            alt="Yunirides driver with child"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

      </div>
    </section>
  )
}