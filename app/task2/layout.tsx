import type { Metadata } from 'next'

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
    <div className="min-h-screen bg-[#1A0A0A] text-[#F0D080] font-[family-name:var(--font-playfair)]">
      {children}
    </div>
  )
}
