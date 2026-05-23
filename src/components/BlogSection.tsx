import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'Building Trust Through Safe Student Transportation',
    date: '12/1/2026',
    excerpt: 'Discover how Yuni Rides prioritizes safety, care, and reliability....',
    image: '/images/blog1.png',
    slug: 'building-trust-safe-student-transportation',
  },
  {
    title: 'Caring Transportation for Every Stage of Life',
    date: '12/1/2026',
    excerpt: 'From children to seniors, Yuni Rides delivers safe, respectful....',
    image: '/images/blog2.png',
    slug: 'caring-transportation-every-stage',
  },
  {
    title: 'How Technology Makes Student Transportation Safer',
    date: '12/1/2026',
    excerpt: 'Explore how real-time tracking, clear communication, and smart....',
    image: '/images/blog3.png',
    slug: 'technology-student-transportation-safer',
  },
]

export default function BlogSection() {
  return (
    <section style={{ backgroundColor: '#FAF8F0', padding: '60px 40px 80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{
            display: 'inline-block', background: '#E5EAFF', color: '#4A4A6A',
            padding: '7px 28px', borderRadius: '9999px', fontSize: '14px',
            fontWeight: 500, fontFamily: 'var(--font-body)', marginBottom: '14px',
          }}>Blog</span>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700,
            fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#2C3979', margin: 0,
          }}>Insights &amp; Stories from Yuni Rides</h2>
        </div>

        {/* Main purple container */}
        <div style={{
          backgroundColor: '#822C89', borderRadius: '40px',
          padding: '32px 32px 28px', width: '100%', boxSizing: 'border-box',
        }}>

          {/* 3 blog cards */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px', marginBottom: '20px',
          }}>
            {blogPosts.map((post) => (
              <div key={post.slug} style={{
                backgroundColor: 'rgba(255,255,255,0.13)',
                borderRadius: '20px', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}>

                {/* TOP — title, date, excerpt */}
                <div style={{ padding: '20px 20px 16px' }}>
                  <p style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 700,
                    fontSize: '15px', color: 'white', margin: '0 0 10px', lineHeight: 1.4,
                  }}>{post.title}</p>

                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '6px',
                    padding: '4px 10px', marginBottom: '10px',
                  }}>
                    <span style={{ fontSize: '11px' }}>📅</span>
                    <span style={{
                      fontSize: '12px', color: 'white',
                      fontFamily: 'var(--font-body)', fontWeight: 500,
                    }}>{post.date}</span>
                  </div>

                  <p style={{
                    fontSize: '12.5px', color: 'rgba(255,255,255,0.82)',
                    lineHeight: 1.65, fontFamily: 'var(--font-body)',
                    margin: 0, textAlign: 'justify',
                  }}>{post.excerpt}</p>
                </div>

                {/* BOTTOM — image with button top-left corner */}
                <div style={{
                  position: 'relative',
                  height: '227px',
                  flexShrink: 0,
                }}>
                  {/* Image fills full area */}
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Button — top-left corner ON TOP of image */}
                  <Link href={`/blog/${post.slug}`} style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    zIndex: 2,
                    display: 'inline-block',
                    backgroundColor: '#6B2272',
                    color: 'white',
                    borderRadius: '10px',
                    padding: '10px 22px',
                    fontSize: '13px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-body)',
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    whiteSpace: 'nowrap',
                  }}>Read Article</Link>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px', position: 'relative',
          }}>
            {blogPosts.map((post) => (
              <div key={`strip-${post.slug}`} style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                borderRadius: '12px', padding: '12px 16px',
              }}>
                <p style={{
                  color: 'white', fontSize: '12.5px', fontWeight: 600,
                  fontFamily: 'var(--font-body)', margin: 0, lineHeight: 1.4,
                }}>{post.title}</p>
              </div>
            ))}

            {/* See more Articles center */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)', zIndex: 2,
            }}>
              <Link href="/blog" style={{
                display: 'inline-block', backgroundColor: '#5C1F6B',
                color: 'white', borderRadius: '9999px', padding: '11px 30px',
                fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-body)',
                textDecoration: 'none', whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
              }}>See more Articles</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}