'use client'

import Image from 'next/image'

const coreValues = [
  {
    title: 'Safety First',
    description: 'The safety of the transport is our highest priority. Every journey is handled with the utmost caution, adhering to strict safety protocols and utilizing the latest technology to ensure that child is in safe hands.',
    image: '/images/safety.png',
    purple: false,
  },
  {
    title: 'Trust',
    description: 'We understand the responsibility that comes with transporting children. We strive to build a strong, trusting relationship with families and communities by consistently delivering on our promises of reliability and care.',
    image: '/images/trust.png',
    purple: true,
  },
  {
    title: 'Care and Compassion',
    description: 'We know that every child is unique, and our drivers and staff are trained to provide transportation with care, understanding, and compassion. Our goal is to create an environment where children feel comfortable, supported, and respected during their rides.',
    image: '/images/care.png',
    purple: false,
  },
  {
    title: 'Reliability',
    description: "Families depend on us to be on time, every time. Whether it's for school, appointments, or other commitments, we ensure that our transportation are dependable and seamless.",
    image: '/images/reliability.png',
    purple: true,
  },
  {
    title: 'Integrity',
    description: 'We conduct our business with honesty and transparency. From our drivers to our operational staff, every member of Yuni Rides is committed to upholding the highest ethical standards.',
    image: '/images/integrity.png',
    purple: false,
  },
  {
    title: 'Professionalism',
    description: 'Our team of drivers and support staff are highly trained professionals dedicated to providing the best possible service. We believe in a level of professionalism that reflects the trust placed in us by parents, schools, and communities.',
    image: '/images/professionalism.png',
    purple: true,
  },
]

interface CoreValueItem {
  title: string
  description: string
  image: string
  purple: boolean
}

// ODD: Card LEFT side, image RIGHT overlapping
function TextLeftRow({ item }: { item: CoreValueItem }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start', // LEFT aligned
      gap: '0px',
      width: '100%',
      paddingLeft: '60px',
    }}>
      {/* White card — LEFT */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(44,57,121,0.10)',
        padding: '36px 40px',
        width: '420px',
        minHeight: '260px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '17px',
          color: '#1A1A2E',
          marginBottom: '10px',
        }}>{item.title}</h3>
        <p style={{
          fontSize: '12px',
          color: '#4A4A6A',
          lineHeight: 1.85,
          marginBottom: '20px',
          textAlign: 'justify',
        }}>{item.description}</p>
        <button style={{
          border: '1.5px solid #D0D0E8',
          background: 'white',
          borderRadius: '8px',
          padding: '7px 20px',
          fontSize: '12px',
          color: '#444',
          cursor: 'pointer',
          width: 'fit-content',
          fontFamily: 'var(--font-body)',
        }}>See More</button>
      </div>

      {/* Image — RIGHT, overlaps card */}
      <div style={{
        width: '280px',
        height: '260px',
        borderRadius: '20px',
        overflow: 'hidden',
        flexShrink: 0,
        marginLeft: '-40px',
        position: 'relative',
        zIndex: 3,
        boxShadow: '0 8px 28px rgba(44,57,121,0.15)',
      }}>
        <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
      </div>
    </div>
  )
}

// EVEN: Image LEFT overlapping, Purple card RIGHT
function ImageLeftRow({ item }: { item: CoreValueItem }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end', // RIGHT aligned
      gap: '0px',
      width: '100%',
      paddingRight: '60px',
    }}>
      {/* Image — LEFT, overlaps card */}
      <div style={{
        width: '300px',
        height: '270px',
        borderRadius: '20px',
        overflow: 'hidden',
        flexShrink: 0,
        position: 'relative',
        zIndex: 3,
        boxShadow: '0 8px 28px rgba(44,57,121,0.15)',
        marginRight: '-40px',
      }}>
        <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
      </div>

      {/* Purple card — RIGHT */}
      <div style={{
        background: 'var(--yuni-purple)',
        borderRadius: '20px',
        padding: '36px 36px 36px 60px',
        width: '420px',
        minHeight: '260px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
        boxShadow: '0 8px 32px rgba(130,44,137,0.2)',
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '17px',
          color: 'white',
          marginBottom: '10px',
        }}>{item.title}</h3>
        <p style={{
          fontSize: '12px',
          color: 'rgba(255,255,255,0.88)',
          lineHeight: 1.85,
          marginBottom: '20px',
          textAlign: 'justify',
        }}>{item.description}</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{
            border: '1.5px solid rgba(255,255,255,0.5)',
            background: 'white',
            borderRadius: '8px',
            padding: '7px 20px',
            fontSize: '12px',
            color: 'var(--yuni-purple)',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
          }}>See More</button>
        </div>
      </div>
    </div>
  )
}

export default function CoreValues() {
  return (
    <section style={{
      padding: '80px 0 100px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Clean alternating diagonal bands — cream & lavender */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '420px', zIndex: 0, background: '#FFFCF2', clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)' }} />
      <div style={{ position: 'absolute', top: '360px', left: 0, right: 0, height: '420px', zIndex: 0, background: '#EFF2FF', clipPath: 'polygon(0 6%, 100% 0, 100% 94%, 0 100%)' }} />
      <div style={{ position: 'absolute', top: '720px', left: 0, right: 0, height: '420px', zIndex: 0, background: '#FFFCF2', clipPath: 'polygon(0 0, 100% 6%, 100% 100%, 0 94%)' }} />
      <div style={{ position: 'absolute', top: '1080px', left: 0, right: 0, height: '420px', zIndex: 0, background: '#EFF2FF', clipPath: 'polygon(0 6%, 100% 0, 100% 94%, 0 100%)' }} />
      <div style={{ position: 'absolute', top: '1440px', left: 0, right: 0, height: '420px', zIndex: 0, background: '#FFFCF2', clipPath: 'polygon(0 0, 100% 6%, 100% 100%, 0 94%)' }} />
      <div style={{ position: 'absolute', top: '1800px', left: 0, right: 0, height: '420px', zIndex: 0, background: '#EFF2FF', clipPath: 'polygon(0 6%, 100% 0, 100% 100%, 0 94%)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            display: 'inline-block',
            background: '#E5EAFF',
            color: '#4A4A6A',
            padding: '7px 24px',
            borderRadius: '9999px',
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '16px',
            fontFamily: 'var(--font-body)',
          }}>About us</span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            color: '#2C3979',
            margin: '0 0 12px',
            display: 'block',
          }}>About Our Core Values</h2>
          <p style={{
            color: '#4A4A6A',
            fontSize: '14px',
            maxWidth: '400px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: 'var(--font-body)',
          }}>
            The principles that guide every journey, every child, and every family we serve.
          </p>
        </div>

        {/* Rows — alternating left/right */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {coreValues.map((item, i) =>
            i % 2 === 0
              ? <TextLeftRow key={item.title} item={item} />
              : <ImageLeftRow key={item.title} item={item} />
          )}
        </div>
      </div>
    </section>
  )
}