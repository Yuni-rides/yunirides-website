import Image from 'next/image'

const values = [
  {
    icons: ['/images/icon-schedule.png','/images/icon-clock.png'],
    title: 'Select Your Own Schedule',
    description: 'Flexible hours, flexible income. Choose rides that suit your lifestyle.',
  },
  {
    icons: ['/images/icon-earn.png', '/images/icon-clock.png'],
    title: 'Earn Money in Your Free Time',
    description: 'Get paid for rides you complete, during the hours that work for you.',
  },
  {
    icons: ['/images/icon-difference.png'],
    title: 'Create a Difference',
    description: 'Make a positive impact on the lives of families, youth, and children in your community.',
  },
  {
    icons: ['/images/icon-support.png'],
    title: 'Support Team',
    description: 'Our dedicated support team is always available to assist you.',
  },
]

export default function DriverCoreValues() {
  return (
    <section style={{
      backgroundColor: '#FAF8F0',
      padding: '5rem 3rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Lavender blob background */}
      <div style={{
        position: 'absolute',
        top: 0, right: 0,
        width: '60%', height: '100%',
        background: 'radial-gradient(ellipse 700px 500px at 80% 50%, #EFF2FF 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0,
        width: '40%', height: '50%',
        background: 'radial-gradient(ellipse 400px 300px at 20% 80%, #EFF2FF 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* Section label */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block',
            background: '#E5EAFF',
            color: '#4A4A6A',
            padding: '7px 28px',
            borderRadius: '9999px',
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: 'var(--font-body)',
          }}>Our Core Values</span>
        </div>

        {/* 2x2 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
        }}>
          {values.map((item, i) => (
            <div key={i} style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '1.75rem 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              boxShadow: '0 2px 16px rgba(44,57,121,0.07)',
            }}>
             {/* Icons */}
<div style={{ position: 'relative', flexShrink: 0 }}>
  {/* Main icon */}
  <div style={{ position: 'relative', width: '70px', height: '70px' }}>
    <Image src={item.icons[0]} alt={item.title} fill style={{ objectFit: 'contain' }} />
  </div>
  {/* Second icon — small, bottom right corner */}
  {item.icons[1] && (
    <div style={{
      position: 'absolute',
      bottom: '-8px', right: '-12px',
      width: '32px', height: '32px',
    }}>
      <Image src={item.icons[1]} alt="" fill style={{ objectFit: 'contain' }} />
    </div>
  )}
</div>

              {/* Text */}
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#1A1A2E',
                  marginBottom: '8px',
                  lineHeight: 1.3,
                }}>{item.title}</h3>
                <p style={{
                  fontSize: '13px',
                  color: '#4A4A6A',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-body)',
                  margin: 0,
                }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}