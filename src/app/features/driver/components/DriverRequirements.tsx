import Image from 'next/image'

const requirements = [
  {
    image: '/images/driver-req1.png',
    icon2: null,
    text: '3 years caregiving experience',
  },
  {
    image: '/images/driver-req2.png',
    icon2: null,
    text: '3 years caregiving experience',
  },
  {
    image: '/images/driver-req3.png',
    icon2: '/images/icon-verify.png',
    text: 'Good driving record',
  },
  {
    image: '/images/driver-req4.png',
    icon2: null,
    text: 'Background Check, Drug Test & TB Test.',
  },
]

export default function DriverRequirements() {
  return (
    <section style={{
      backgroundColor: '#FAF8F0',
      padding: '4rem 3rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

   
        <div style={{
          backgroundColor: '#822C89',
          borderRadius: '16px',
          padding: '1.75rem 2rem',
          textAlign: 'center',
          marginBottom: '2rem',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
            color: 'white',
            margin: 0,
            lineHeight: 1.4,
          }}>
            What It Takes to Be a Good Driver
          </h2>
        </div>


        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}>
          {requirements.map((item, i) => (
            <div key={i} style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '1.75rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              textAlign: 'center',
              boxShadow: '0 2px 12px rgba(44,57,121,0.07)',
            }}>
          
              <div style={{ position: 'relative', width: '140px', height: '140px' }}>
                <Image src={item.image} alt={item.text} fill style={{ objectFit: 'contain' }} />
                {item.icon2 && (
                  <div style={{
                    position: 'absolute',
                    top: '0px', right: '0px',
                    width: '36px', height: '36px',
                  }}>
                    <Image src={item.icon2} alt="verified" fill style={{ objectFit: 'contain' }} />
                  </div>
                )}
              </div>

       
              <p style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#2C3979',
                fontFamily: 'var(--font-heading)',
                margin: 0,
                lineHeight: 1.5,
              }}>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}