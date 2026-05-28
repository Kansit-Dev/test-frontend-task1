import type { Metadata } from 'next'
import { Pridi, Sarabun } from 'next/font/google'

const pridi = Pridi({
  subsets: ['latin', 'thai'],
  variable: '--font-pridi',
  weight: ['400', '500', '600', '700'],
})

const sarabun = Sarabun({
  subsets: ['latin', 'thai'],
  variable: '--font-sarabun',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Fortune Telling — Mystical Oracle',
  description:
    'Ask the mystical oracle your question. Choose a topic or type freely before drawing your tarot cards.',
  openGraph: {
    title: 'Mystical Oracle — Fortune Telling',
    description: 'Discover your destiny through an immersive tarot experience.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mystical Oracle — Fortune Telling',
    description: 'Discover your destiny through an immersive tarot experience.',
  },
}

export default function Task2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`${pridi.variable} ${sarabun.variable} min-h-screen scroll-smooth bg-[#1A0A0A] font-[family-name:var(--font-sarabun)] text-[#F0D080] antialiased`}
    >
      {children}
    </div>
  )
}
