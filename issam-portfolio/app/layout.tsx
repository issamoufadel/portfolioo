import type { Metadata } from 'next'
import { JetBrains_Mono, Space_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Issam Oufadel | Ingénieur Génie Mécanique',
  description: 'Portfolio - Ingénieur d\'État Génie Mécanique, spécialisation Productique & Aéronautique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${jetbrainsMono.variable} ${spaceMono.variable}`}>
      <body className="font-mono">{children}</body>
    </html>
  )
}
