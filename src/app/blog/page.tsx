import type { Metadata } from 'next'
import BlogClient from '@/app/features/blog/components/BlogClient'


export const metadata: Metadata = {
  title: 'Blog — Yunirides | Insights & Stories',
  description: 'Read the latest insights, stories, and news from Yunirides.',
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
export default function BlogPage() {
  return <BlogClient />
}