import type { Metadata } from 'next';
import { Nunito, DM_Sans } from 'next/font/google';
import './globals.css'; 
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TawkToChat from '@/components/TawkToChat';

const plusJakarta = Nunito({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800' , '300'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '300'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yunirides.com'),
  title: {
    default: 'Yunirides — Safe, Reliable School Transportation',
    template: '%s — Yunirides',
  },
  description:
    'Yunirides provides safe, reliable, and caring transportation for children, seniors, and families across the U.S.',
  applicationName: 'Yunirides',
  keywords: ['school transportation', 'safe rides', 'child transport', 'Yunirides'],
  authors: [{ name: 'Yunirides Team', url: 'https://yunirides.com' }],
  openGraph: {
    siteName: 'Yunirides',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Yunirides' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body className="bg-yuni-page antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <TawkToChat />
        <Footer />
      </body>
    </html>
  )
}
