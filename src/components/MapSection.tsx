import Image from 'next/image'

export default function MapSection() {
  const cities = [
    ['Everett', 'Seattle'],
    ['Lynwood', 'Renton'],
    ['Edmonds', 'Tukwila'],
    ['Shoreline', 'Kent'],
    ['Redmond', 'Federal Way'],
    ['Bellevue', 'Tacoma'],
  ]

  return (
    <section
      style={{
        backgroundColor: 'var(--yuni-bg)',
        padding: '5rem 0',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span
            style={{
              display: 'inline-block',
              background: '#E5EAFF',
              color: '#4A4A6A',
              padding: '7px 28px',
              borderRadius: '9999px',
              fontSize: '14px',
              fontWeight: 500,
              marginBottom: '16px',
              fontFamily: 'var(--font-body)',
            }}
          >
            Our Services
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              color: '#2C3979',
              margin: '0 0 16px',
            }}
          >
            Areas we Serve in
          </h2>

          <p
            style={{
              color: '#4A4A6A',
              fontSize: '15px',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.7,
              fontFamily: 'var(--font-body)',
            }}
          >
            From fleet maintenance and routing logistics to onboard bus
            technologies that keep everyone safe.
          </p>
        </div>

        {/* Main container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '380px 1fr',
            backgroundColor: '#EFF2FF',
            borderRadius: '24px',
            overflow: 'hidden',
            minHeight: '380px',
          }}
        >
          {/* LEFT */}
          <div
            style={{
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '20px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '22px',
                    color: '#2C3979',
                    margin: 0,
                  }}
                >
                  Washington
                </h3>

                <div
                  style={{
                    width: '70px',
                    height: '52px',
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/images/washington-state.png"
                    alt="Washington"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>

              {/* Cities */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '5px 12px',
                  marginBottom: '28px',
                }}
              >
                {cities.map(([c1, c2]) => (
                  <div
                    key={`${c1}-${c2}`}
                    style={{ display: 'contents' }}
                  >
                    <p
                      style={{
                        fontSize: '13px',
                        color: '#4A4A6A',
                        margin: 0,
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      • {c1}
                    </p>

                    <p
                      style={{
                        fontSize: '13px',
                        color: '#4A4A6A',
                        margin: 0,
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      • {c2}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              style={{
                border: '1.5px solid #C0C8E8',
                background: 'white',
                borderRadius: '10px',
                padding: '10px 28px',
                fontSize: '13px',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              See More
            </button>
          </div>

          {/* RIGHT */}
          <div
            style={{
              position: 'relative',
              minHeight: '380px',
            }}
          >
            <Image
              src="/images/us-map.png"
              alt="US Map"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'left center',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}