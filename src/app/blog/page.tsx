import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogFilters from '@/app/features/blog/components/BlogFilters';


export const metadata: Metadata = {
  title: 'Blog — Yunirides | Insights & Stories',
  description: 'Read the latest insights, stories, and news from Yunirides. Learn about safe school transportation, driver stories, and more.',
  alternates: { canonical: 'https://yunirides.com/blog' },
  openGraph: {
    title: 'Yunirides Blog — Insights & Stories',
    description: 'Read the latest insights, stories, and news from Yunirides.',
    url: 'https://yunirides.com/blog',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Yunirides Blog' },
}

const featuredPost = {
  slug: 'why-safe-rides-matter-for-kids',
  title: 'Why Safe Rides Matter for Kids',
  excerpt: 'Discover how child-focused transportation makes a difference in families\' daily lives — from safety standards to peace of mind.',
  image: '/images/blog-featured.png',
  time: '6 mins ago',
}

const posts = [
  { slug: 'tips-stress-free-school-dropoffs', category: 'Press Release', title: 'Tips for Stress-Free School Dropoffs', excerpt: 'Simple, practical advice for parents and caregivers to make school mornings...', image: '/images/blog1.png' },
  { slug: 'how-yuni-rides-ensures-trusted-journeys', category: 'Press Release', title: 'How Yuni Rides Ensures Trusted Journeys', excerpt: 'Simple, practical advice for parents and caregivers to make school mornings...', image: '/images/blog2.png' },
  { slug: 'select-your-own-schedule', category: 'Press Release', title: 'Select Your Own Schedule', excerpt: 'Learn about our safety guidelines, driver vetting process, and what makes...', image: '/images/blog3.png' },
  { slug: 'helping-build-confidence-through-transportation', category: 'Press Release', title: 'Helping Build Confidence Through Transportation', excerpt: 'Explore how kids grow with independence and confidence when....', image: '/images/blog1.png' },
]

const featuredLeft = {
  slug: 'meet-the-drivers-behind-yuni-rides',
  title: 'Meet the Drivers Behind Yuni Rides',
  excerpt: 'Get to know the people who care, drive, and support our community. Real stories from real Yuni Rides drivers.',
  image: '/images/blog-featured2.png',
}

export default function BlogPage() {
  return (
    <>

      <section style={{ backgroundColor: '#FAF8F0', padding: '2rem 3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Navy hero card */}
          <div style={{
            backgroundColor: '#2C3979',
            borderRadius: '20px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: '420px',
          }}>
            {/* Left — image */}
            <div style={{ position: 'relative', minHeight: '420px' }}>
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            {/* Right — text */}
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
              <span style={{
                display: 'inline-block',
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                padding: '5px 16px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontFamily: 'var(--font-body)',
                width: 'fit-content',
              }}>{featuredPost.time}</span>

              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                color: 'white',
                lineHeight: 1.2,
                margin: 0,
              }}>{featuredPost.title}</h1>

              <p style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
                margin: 0,
              }}>{featuredPost.excerpt}</p>

              <Link href={`/blog/${featuredPost.slug}`} style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#822C89',
                color: 'white',
                borderRadius: '10px',
                padding: '10px 24px',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
                width: 'fit-content',
              }}>Learn more</Link>
            </div>
          </div>

          {/* Subscribe bar */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '1.25rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginTop: '1rem',
            boxShadow: '0 2px 12px rgba(44,57,121,0.08)',
            flexWrap: 'wrap',
          }}>
            <p style={{ fontSize: '14px', color: '#4A4A6A', fontFamily: 'var(--font-body)', margin: 0, fontWeight: 500 }}>
              Don&apos;t Feed the Algorithm?
            </p>
            <div style={{ display: 'flex', gap: '8px', flex: 1, maxWidth: '420px' }}>
              <input
                type="email"
                placeholder="Email"
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid #DDE2FF',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                }}
              />
            <button className="btn-outline">See More</button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ EDITOR'S PICK ══════════ */}
      <section style={{ backgroundColor: '#FAF8F0', padding: '3rem 3rem 5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '1.6rem',
            color: '#1A1A2E',
            marginBottom: '1.25rem',
          }}>Editor&apos;s Pick</h2>

          {/* Filter tabs */}
          <BlogFilters />

          {/* Content grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginTop: '2rem',
          }}>

            {/* LEFT — featured big post */}
            <div>
              <div style={{
                position: 'relative',
                height: '280px',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '1.25rem',
              }}>
                <Image src={featuredLeft.image} alt={featuredLeft.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#1A1A2E',
                marginBottom: '0.75rem',
              }}>{featuredLeft.title}</h3>
              <p style={{
                fontSize: '13px',
                color: '#4A4A6A',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
                marginBottom: '1.25rem',
              }}>{featuredLeft.excerpt}</p>
              <Link href={`/blog/${featuredLeft.slug}`} style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                color: '#1A1A2E',
                border: '1.5px solid #DDE2FF',
                borderRadius: '10px',
                padding: '10px 28px',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
              }}>Learn more</Link>
            </div>

            {/* RIGHT — 4 small posts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: '1rem',
                  textDecoration: 'none',
                  alignItems: 'center',
                }}>
                  <div style={{
                    position: 'relative',
                    height: '80px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}>
                    <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <span style={{
                      display: 'inline-block',
                      backgroundColor: '#E5EAFF',
                      color: '#4A4A6A',
                      padding: '2px 10px',
                      borderRadius: '9999px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-body)',
                      marginBottom: '4px',
                    }}>{post.category}</span>
                    <p style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '13.5px',
                      color: '#1A1A2E',
                      margin: '0 0 4px',
                      lineHeight: 1.3,
                    }}>{post.title}</p>
                    <p style={{
                      fontSize: '12px',
                      color: '#6A6A8A',
                      fontFamily: 'var(--font-body)',
                      margin: 0,
                      lineHeight: 1.5,
                    }}>{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}