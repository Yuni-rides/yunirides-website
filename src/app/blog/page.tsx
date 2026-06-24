import type { Metadata } from 'next'
import BlogClient from '@/app/features/blog/components/BlogClient'


export const metadata: Metadata = {
  title: 'Yuni Rides Blog | Student Transportation Insights & Driver Resources',
  description:
    'Expert guides on student transportation, driver careers, special needs transport, and school district partnerships. Updated weekly.',
  alternates: { canonical: 'https://yunirides.com/blog' },
  openGraph: {
    title: 'Yuni Rides Blog | Student Transportation Insights',
    description: 'Expert guides on student transportation, driver careers, and school district partnerships.',
    url: 'https://yunirides.com/blog',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Yuni Rides Blog' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuni Rides Blog',
    description: 'Student transportation insights and driver resources. Updated weekly.',
  },
}

export default function BlogPage() {
  return <BlogClient />
}