import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bluemount Holdings | Digital Asset Treasury & Financial Services',
  description: 'Pioneering digital asset treasury solutions and comprehensive financial services for the next generation of wealth management across Asia-Pacific markets. NASDAQ-listed financial services company.',
  keywords: 'digital asset treasury, financial services, asset management, securities trading, Hong Kong, NASDAQ, investment management, wealth management',
  authors: [{ name: 'Bluemount Holdings' }],
  creator: 'Bluemount Holdings',
  publisher: 'Bluemount Holdings',
  openGraph: {
    title: 'Bluemount Holdings | Digital Asset Treasury & Financial Services',
    description: 'Pioneering digital asset treasury solutions and comprehensive financial services for the next generation of wealth management across Asia-Pacific markets.',
    url: 'https://bluemount.com',
    siteName: 'Bluemount Holdings',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bluemount Holdings | Digital Asset Treasury & Financial Services',
    description: 'Pioneering digital asset treasury solutions and comprehensive financial services for the next generation of wealth management across Asia-Pacific markets.',
    creator: '@BMHL_foundation',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/Logo.svg" />
        <meta name="theme-color" content="#073642" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
