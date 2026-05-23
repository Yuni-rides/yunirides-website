import Image from 'next/image'

const students = [
  {
    label: 'Mckinney-Vento &\nFoster Youth',
    image: '/images/service1.png',
    purple: true,
  },
  {
    label: 'Youth with special\nneeds',
    image: '/images/service2.png',
    purple: false,
  },
  {
    label: 'Continuing\ntechnical education',
    image: '/images/service3.png',
    purple: true,
  },
  {
    label: 'General\neducation',
    image: '/images/service4.png',
    purple: false,
  },
]

export default function StudentsSection() {
  return (
    <section style={{
      backgroundColor: '#FAF8F0',
      padding: '60px 40px 80px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Heading in lavender pill box */}
        <div style={{
          backgroundColor: '#E5EAFF',
          borderRadius: '16px',
          padding: '20px 40px',
          textAlign: 'center',
          maxWidth: '580px',
          margin: '0 auto 52px',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
            color: '#2C3979',
            margin: 0,
            lineHeight: 1.4,
          }}>
            We get all students<br />where they need to go.
          </h2>
        </div>

        {/* 4 separate cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 300px)',
          gap: '20px',
          justifyContent: 'center',
        }}>
          {students.map((item, i) => (
            <div key={i} style={{
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              {/* Illustration — overflows card top */}
              <div style={{
                width: '190px',
                height: '195px',
                position: 'relative',
                zIndex: 2,
                marginBottom: '-55px',
                flexShrink: 0,
              }}>
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                />
              </div>

              {/* Card — 300x325 Figma size */}
              <div style={{
                width: '300px',
                height: '210px',
                backgroundColor: item.purple ? '#822C89' : '#E5EAFF',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingBottom: '36px',
                paddingLeft: '20px',
                paddingRight: '20px',
                position: 'relative',
                zIndex: 1,
                boxSizing: 'border-box',
              }}>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '15px',
                  color: item.purple ? 'white' : '#2C3979',
                  margin: 0,
                  textAlign: 'center',
                  lineHeight: 1.5,
                  whiteSpace: 'pre-line',
                }}>
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}