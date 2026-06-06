
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Play } from 'lucide-react'
import { blogPostsData } from '@/app/features/blog/data/blogsMockData'

interface PageProps {
  params: Promise<{ slug: string }>
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = blogPostsData[resolvedParams.slug]
  
  return {
    title: post ? `${post.title} — Yunirides Blog` : 'Blog — Yunirides',
    description: post ? post.excerpt : 'Read the latest from Yunirides.',
    openGraph: {
      title: post?.title,
      description: post?.excerpt,
      images: [{ url: post?.heroImage || '/og-image.png', width: 1200, height: 630 }],
      type: 'article',
    },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const post = blogPostsData[resolvedParams.slug]

  if (!post) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', fontFamily: 'var(--font-body)' }}>
        <h2 style={{ color: '#2C3979' }}>Post Not Found</h2>
        <Link href="/blog" style={{ color: '#822C89', textDecoration: 'underline', marginTop: '1rem', display: 'inline-block' }}>
          Back to all blogs
        </Link>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#FAF8F0', minHeight: '100vh' }}>
      
      <div style={{ position: 'relative', width: '100%', height: '380px', overflow: 'hidden' }}>
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
        />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
          background: 'linear-gradient(to top, rgba(44,57,121,0.85) 0%, transparent 100%)',
        }} />
        <div style={{ position: 'absolute', bottom: '28px', left: '3rem', right: '3rem', zIndex: 2 }}>
          <h1 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700,
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'white', margin: 0, lineHeight: 1.3,
          }}>{post.title}</h1>
        </div>
      </div>

      {/* Main Grid Container */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 3rem 5rem',
        display: 'grid', gridTemplateColumns: '260px 1fr', gap: '3rem', alignItems: 'start',
      }}>
        
        {/* Left Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link href="/blog" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#2C3979',
            textDecoration: 'none', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-body)',
            backgroundColor: '#E5EAFF', padding: '8px 16px', borderRadius: '9999px', width: 'fit-content',
          }}>
            <ChevronLeft size={16} /> Blogs
          </Link>

          <div style={{
            backgroundColor: 'white', borderRadius: '16px', padding: '1.5rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
            boxShadow: '0 2px 12px rgba(44,57,121,0.08)'
          }}>
            <div style={{ position: 'relative', width: '80px', height: '80px' }}>
              <Image src="/images/logo.png" alt="Yunirides" fill style={{ objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: '13px', color: '#4A4A6A', fontFamily: 'var(--font-body)', margin: 0, fontWeight: 500 }}>
              Posted by : By Yunirides
            </p>
          </div>
        </div>

        {/* Right Dynamic Content Area */}
        <div>
          <p style={{ fontSize: '12px', color: '#8888AA', fontFamily: 'var(--font-body)', marginBottom: '1.5rem', textAlign: 'right' }}>
            {post.date}
          </p>

          {post.contentBlocks.map((block, index) => {
            switch (block.type) {
              case 'paragraph':
                return (
                  <p key={index} style={{
                    fontSize: '13px', color: '#4A4A6A', lineHeight: 1.85, fontFamily: 'var(--font-body)',
                    marginBottom: '1.25rem', textAlign: 'justify',
                  }}>
                    {block.text}
                  </p>
                )

              case 'heading':
                return (
                  <h2 key={index} style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    color: '#822C89', marginBottom: '1rem', marginTop: '1.75rem', lineHeight: 1.3,
                  }}>
                    {block.text}
                  </h2>
                )

              case 'bullet-list':
                return (
                  <ul key={index} style={{
                    paddingLeft: '1.25rem', marginBottom: '1.25rem', color: '#4A4A6A',
                    fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: '1.85'
                  }}>
                    {block.items?.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ marginBottom: '0.5rem' }}>{item}</li>
                    ))}
                  </ul>
                )

              case 'image':
                return (
                  <div key={index} style={{
                    position: 'relative', width: '100%', height: '240px',
                    borderRadius: '16px', overflow: 'hidden', marginBottom: '1.5rem', marginTop: '1.5rem'
                  }}>
                    <Image src={block.src || ''} alt={block.caption || 'Blog asset'} fill style={{ objectFit: 'cover' }} />
                    {block.caption && (
                      <div style={{
                        position: 'absolute', bottom: '16px', left: '16px',
                        display: 'flex', alignItems: 'center', gap: '10px', zIndex: 2,
                      }}>
                        <div style={{
                          width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#822C89',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <Play size={14} fill="white" color="white" />
                        </div>
                        <span style={{ color: 'white', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-body)' }}>
                          {block.caption}
                        </span>
                      </div>
                    )}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
                    }} />
                  </div>
                )

              default:
                return null
            }
          })}

          {/* Marketing Conversion End Box */}
          <div style={{
            marginTop: '3rem', padding: '2rem', backgroundColor: '#822C89', borderRadius: '20px',
            color: 'white', textAlign: 'center', boxShadow: '0 4px 20px rgba(130,44,137,0.15)'
          }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '0.5rem', fontWeight: 700 }}>
              Apply to Drive With Yuni Rides
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', maxWidth: '600px', margin: '0 auto 1.5rem', opacity: 0.9, lineHeight: 1.6 }}>
              Looking for a driving opportunity with predictable weekday schedules and consistent route assignments? Join Yuni Rides today and help make a difference in your community.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href='/become-a-driver' style={{
                backgroundColor: '#FAF8F0', color: '#822C89', padding: '12px 28px', borderRadius: '9999px',
                fontWeight: 600, fontSize: '13px', textDecoration: 'none', fontFamily: 'var(--font-body)',
              }}>
                Apply Here
              </Link>
              <a href="tel:4155352155" style={{
                border: '2px solid #FAF8F0', color: '#FAF8F0', padding: '10px 24px', borderRadius: '9999px',
                fontWeight: 600, fontSize: '13px', textDecoration: 'none', fontFamily: 'var(--font-body)'
              }}>
                Call Us: 415-535-2155
              </a>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  )
}