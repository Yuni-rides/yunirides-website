import Image from 'next/image'

export default function AboutMissionCards() {
  return (
    <section style={{
      backgroundColor: '#FAF8F0',
      padding: '5rem 3rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Light blue blob top right */}
      <div style={{
        position: 'absolute',
        top: 0, right: 0,
        width: '50%', height: '60%',
        background: 'radial-gradient(ellipse at 80% 20%, #E8F4FF 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        alignItems: 'start',
      }}>

        {/* LEFT card */}
        <div style={{
          backgroundColor: '#EFF2FF',
          borderRadius: '20px',
          padding: '2rem',
          height: '688px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          boxSizing: 'border-box',
        }}>
          {/* Image box — white background */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '14px',
            padding: '1rem',
            height: '260px',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src="/images/about-logo-card.png"
                alt="Yunirides driver with child"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '1.4rem',
            color: '#1A1A2E',
            margin: 0,
            lineHeight: 1.3,
          }}>
            Welcome To{' '}
            <span style={{ color: '#822C89', fontWeight: 800 }}>Yuni Rides</span>
          </h3>

          <p style={{
            fontSize: '13px',
            color: '#4A4A6A',
            lineHeight: 1.85,
            fontFamily: 'var(--font-body)',
            textAlign: 'justify',
            margin: 0,
          }}>
            At Yuni Rides, we are committed to providing top-tier, dependable transportation services designed specifically for children. With a focus on safety, Care, and professionalism, we take pride in offering a service that families and communities can trust. Our dedicated team ensures every child's journey is secure, comfortable, and on time, making us a leader in child-focused transportation solution across the nation. Whether it's for school or a special appointment, Yuni Rides is here to serve with integrity and compassion.
          </p>
        </div>

        {/* RIGHT card */}
        <div style={{
          backgroundColor: '#EFF2FF',
          borderRadius: '20px',
          padding: '2rem',
          height: '688px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          boxSizing: 'border-box',
        }}>
          {/* Image box — white background with heart overlay */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '14px',
            padding: '1rem',
            height: '260px',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            {/* Family illustration */}
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src="/images/about-family.png"
                alt="Yunirides family"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>

            {/* Heart overlay — center */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90px',
              height: '90px',
              zIndex: 2,
            }}>
              <Image
                src="/images/Group_259.png"
                alt="Yunirides heart"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '1.4rem',
            color: '#1A1A2E',
            margin: 0,
            lineHeight: 1.3,
          }}>
            We taking pride to be helping hand with the love and care
          </h3>

          <p style={{
            fontSize: '13px',
            color: '#4A4A6A',
            lineHeight: 1.85,
            fontFamily: 'var(--font-body)',
            textAlign: 'justify',
            margin: 0,
          }}>
            At Yuni Rides, we take great pride in being a helping hand to our communities, offering transportation services with the love and care that every child deserves. Our mission goes beyond just getting children from one place to another – we are committed to making each journey a safe comfortable and compassionate.
          </p>
        </div>

      </div>
    </section>
  )
}