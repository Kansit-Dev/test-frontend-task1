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
  description: 'Discover your destiny through the mystic arts',
}

export default function Task2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`${pridi.variable} ${sarabun.variable} min-h-screen bg-[#1A0A0A] text-[#F0D080] font-[family-name:var(--font-sarabun)] antialiased`}
    >
      {children}
    </div>
  )
}
