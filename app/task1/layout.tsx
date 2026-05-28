import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ORACLE — Fashion Lifestyle',
  description:
    'Quiet luxury fashion for the modern woman. Discover timeless elegance, new arrivals, and editorial lookbooks.',
  openGraph: {
    title: 'ORACLE — Quiet Luxury Fashion',
    description:
      'Timeless elegance crafted for the modern woman. Explore the Spring/Summer 2026 collection.',
    type: 'website',
  },
}

export default function Task1Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen scroll-smooth bg-[#FAF7F2] font-[family-name:var(--font-inter)] text-[#2C1F14] antialiased">
      {children}
    </div>
  )
}
