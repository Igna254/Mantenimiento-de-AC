import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadataBase =
  process.env.GITHUB_PAGES === 'true'
    ? new URL('https://igna254.github.io/Mantenimiento-de-AC')
    : new URL('http://localhost:3000')

export const metadata: Metadata = {
  title: 'ClimaElec Pro | Aires Acondicionados y Servicios Eléctricos',
  description: 'Expertos en instalación, mantenimiento y reparación de aires acondicionados. Servicios eléctricos residenciales, comerciales e industriales. Personal certificado y garantía en todos nuestros trabajos.',
  keywords: 'instalación de aire acondicionado, mantenimiento de aire acondicionado, servicios eléctricos, electricista profesional, reparación de aire acondicionado, instalaciones eléctricas',
  generator: 'v0.app',
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
  openGraph: {
    title: 'ClimaElec Pro | Aires Acondicionados y Servicios Eléctricos',
    description: 'Expertos en instalación, mantenimiento y reparación de aires acondicionados. Servicios eléctricos profesionales.',
    type: 'website',
    locale: 'es_MX',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1e40af',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
