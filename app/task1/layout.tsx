import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ORACLE — Fashion Lifestyle',
  description: 'Soft, ethereal, feminine, premium fashion',
}

export default function Task1Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C1F14] font-[family-name:var(--font-inter)]">
      {children}
    </div>
  )
}
