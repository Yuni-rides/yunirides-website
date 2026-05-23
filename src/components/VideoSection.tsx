import Image from 'next/image'
import { Play } from 'lucide-react'

const sideVideos = [
  { label: 'Real Families. Real Care.', image: '/images/video2.png' },
  { label: 'Safe Rides, Real Impact.',  image: '/images/video3.png' },
  { label: 'Stories That Build Trust',  image: '/images/video4.png' },
]

export default function VideoSection({ label = 'Serving others with Safety' }: { label?: string }) {
  return (
    <section style={{ backgroundColor: '#FAF8F0', padding: '60px 40px 80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{
            display: 'inline-block',
            background: '#E5EAFF',
            color: '#4A4A6A',
            padding: '7px 28px',
            borderRadius: '9999px',
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: 'var(--font-body)',
          }}>{label}</span>
        </div>

        {/* Main container */}
        <div style={{
          width: '100%',
          height: '520px',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '2px solid #822C89',
          display: 'grid',
          gridTemplateColumns: '1fr 415px',
          boxSizing: 'border-box',
        }}>

          {/* LEFT — Main big video */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Image
              src="/images/video-thumb.png"
              alt="Because Every Journey Matters"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '120px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '28px', left: '28px',
              display: 'flex', alignItems: 'center', gap: '12px', zIndex: 2,
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                backgroundColor: '#822C89',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, cursor: 'pointer',
              }}>
                <Play size={16} fill="white" color="white" />
              </div>
              <p style={{
                color: 'white', fontFamily: 'var(--font-heading)',
                fontWeight: 700, fontSize: '20px', margin: 0,
              }}>Because Every Journey Matters.</p>
            </div>
          </div>

          {/* RIGHT — 3 stacked thumbnails */}
          <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
            {sideVideos.map((v, i) => (
              <div key={v.label} style={{
                position: 'relative', overflow: 'hidden',
                borderLeft: '2px solid #822C89',
                borderBottom: i < 2 ? '1px solid rgba(130,44,137,0.3)' : 'none',
                cursor: 'pointer',
              }}>
                <Image src={v.image} alt={v.label} fill style={{ objectFit: 'cover', opacity: 0.85 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
                <div style={{
                  position: 'absolute', bottom: '14px', left: '14px',
                  display: 'flex', alignItems: 'center', gap: '8px', zIndex: 2,
                }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    backgroundColor: '#822C89',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Play size={10} fill="white" color="white" />
                  </div>
                  <p style={{
                    color: 'white', fontFamily: 'var(--font-body)',
                    fontWeight: 600, fontSize: '13px', margin: 0,
                  }}>{v.label}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}