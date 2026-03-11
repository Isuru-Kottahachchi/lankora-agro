import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/components/providers'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Lankora Agro - Premium Spices & Agricultural Export',
  description: 'Global exporter of premium spices, herbs, grains, and natural products. ISO 9001 & HACCP certified. Serving Europe, Middle East, and worldwide markets with quality and reliability.',
  keywords: 'spices, herbs, agriculture products, export, global trade, premium quality',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lankoraagro.com',
    siteName: 'Lankora Agro',
    title: 'Lankora Agro - Premium Spices & Agricultural Export',
    description: 'Global exporter of premium spices, herbs, and agricultural products with 50+ years of excellence',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
