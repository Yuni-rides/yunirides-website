import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Play, ChevronLeft } from 'lucide-react';

// Static blog posts data
const blogPosts: Record<string, {
  title: string
  heroImage: string
  date: string
  content: string[]
  subHeading: string
  subContent: string[]
  inlineImage: string
  moreContent: string[]
}> = {
  'why-safe-rides-matter-for-kids': {
    title: 'Become a School Transportation Driver, Enjoy Your Retirement',
    heroImage: '/images/blog1.png',
    date: 'Feb 12, 2026',
    content: [
      'Robert retired from his accounting job at 65. He\'d planned for this moment—had his savings, his pension, his Social Security. He thought retirement meant golf, reading, spending time with grandkids. And for the first three months, it was exactly that. Then something shifted.',
      'He woke up at 5:30 AM like he had for 40 years. But now, there was nothing to do. No meetings to prepare for. No deadlines. Just empty hours until his wife woke up at 7:00 AM. He\'d make coffee, sit in the kitchen, and scroll news on his phone. By 8:00 AM, he felt restless. By noon, he felt invisible. He missed structure. He missed purpose. He missed being someone people counted on.',
    ],
    subHeading: 'Why Retirees Are Choosing to Become School Transportation Drivers',
    subContent: [
      'According to the US Bureau of Labour Statistics, 38.3 percent of employed Americans age 65 and older worked part time in 2024—a significantly higher rate than younger workers. Among all adults 65 and older, about one in five participated in the labour force by working or looking for work. This isn\'t a new trend—it\'s accelerating.',
    ],
    inlineImage: '/images/blog3.png',
    moreContent: [
      'After decades of structured workdays, complete freedom can feel disorienting. You wake up at 5:30 AM because your body is programmed that way after 40 years, but there\'s nowhere to be. No schedule. No routine. For some, this is liberating. For many others, it\'s unsettling.',
      'School transportation driving provides structure without consuming your life. Morning routes run 6:30–8:30 AM, Monday through Friday. You have a clear schedule, consistent routine and defined responsibilities to fill a role you fill. The rest of your day, your afternoons, your weekends—remain yours.',
    ],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug]
  return {
    title: post ? `${post.title} — Yunirides Blog` : 'Blog — Yunirides',
    description: post ? post.content[0].slice(0, 155) : 'Read the latest from Yunirides.',
    openGraph: {
      title: post?.title,
      images: [{ url: post?.heroImage || '/og-image.png', width: 1200, height: 630 }],
      type: 'article',
    },
    twitter: { card: 'summary_large_image' },
  }
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug] || blogPosts['why-safe-rides-matter-for-kids']

  return (
    <div style={{ backgroundColor: '#FAF8F0', minHeight: '100vh' }}>

      {/* Hero image with title overlay */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '380px',
        overflow: 'hidden',
      }}>
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
        />
        {/* Dark gradient overlay */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '50%',
          background: 'linear-gradient(to top, rgba(44,57,121,0.85) 0%, transparent 100%)',
        }} />
        {/* Title */}
        <div style={{
          position: 'absolute',
          bottom: '28px', left: '3rem', right: '3rem',
          zIndex: 2,
        }}>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            color: 'white',
            margin: 0,
            lineHeight: 1.3,
          }}>{post.title}</h1>
        </div>
      </div>

      {/* Content area */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '2.5rem 3rem 5rem',
        display: 'grid',
        gridTemplateColumns: '260px 1fr',
        gap: '3rem',
        alignItems: 'start',
      }}>

        {/* LEFT sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Back button */}
          <Link href="/blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#2C3979',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
            backgroundColor: '#E5EAFF',
            padding: '8px 16px',
            borderRadius: '9999px',
            width: 'fit-content',
          }}>
            <ChevronLeft size={16} />
            Blogs
          </Link>

          {/* Logo card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            boxShadow: '0 2px 12px rgba(44,57,121,0.08)',
          }}>
            {/* Share icon */}
            <div style={{ alignSelf: 'flex-end' }}>
              <div style={{
                width: '32px', height: '32px',
                borderRadius: '50%',
                backgroundColor: '#E5EAFF',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2C3979" strokeWidth="2">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
              </div>
            </div>

            {/* Logo */}
            <div style={{ position: 'relative', width: '80px', height: '80px' }}>
              <Image src="/images/logo.png" alt="Yunirides" fill style={{ objectFit: 'contain' }} />
            </div>
            <p style={{
              fontSize: '13px', color: '#4A4A6A',
              fontFamily: 'var(--font-body)', margin: 0,
              fontWeight: 500,
            }}>Posted by : By Yunirides</p>

       
          </div>
        </div>

        {/* RIGHT — blog content */}
        <div>
          {/* Date */}
          <p style={{
            fontSize: '12px', color: '#8888AA',
            fontFamily: 'var(--font-body)',
            marginBottom: '1.5rem',
            textAlign: 'right',
          }}>{post.date}</p>

          {/* Main content paragraphs */}
          {post.content.map((para, i) => (
            <p key={i} style={{
              fontSize: '13px', color: '#4A4A6A',
              lineHeight: 1.85, fontFamily: 'var(--font-body)',
              marginBottom: '1.25rem', textAlign: 'justify',
            }}>{para}</p>
          ))}

          {/* Sub heading */}
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: '#822C89',
            marginBottom: '1rem',
            lineHeight: 1.3,
          }}>{post.subHeading}</h2>

          {/* Sub content */}
          {post.subContent.map((para, i) => (
            <p key={i} style={{
              fontSize: '13px', color: '#4A4A6A',
              lineHeight: 1.85, fontFamily: 'var(--font-body)',
              marginBottom: '1.25rem', textAlign: 'justify',
            }}>{para}</p>
          ))}

          {/* Inline image with play button */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '240px',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '1.5rem',
          }}>
            <Image
              src={post.inlineImage}
              alt="Video thumbnail"
              fill
              style={{ objectFit: 'cover' }}
            />
            {/* Play button overlay */}
            <div style={{
              position: 'absolute',
              bottom: '16px', left: '16px',
              display: 'flex', alignItems: 'center', gap: '10px',
              zIndex: 2,
            }}>
              <div style={{
                width: '36px', height: '36px',
                borderRadius: '50%',
                backgroundColor: '#822C89',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Play size={14} fill="white" color="white" />
              </div>
              <span style={{
                color: 'white', fontSize: '13px',
                fontWeight: 600, fontFamily: 'var(--font-body)',
              }}>Because Every Journey Matters.</span>
            </div>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
            }} />
          </div>

          {/* More content */}
          {post.moreContent.map((para, i) => (
            <p key={i} style={{
              fontSize: '13px', color: '#4A4A6A',
              lineHeight: 1.85, fontFamily: 'var(--font-body)',
              marginBottom: '1.25rem', textAlign: 'justify',
            }}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}