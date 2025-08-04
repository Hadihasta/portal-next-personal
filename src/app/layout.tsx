import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/style/globals.css'
import Navbar from '@/components/navbar'
import { Theme } from '@radix-ui/themes'
import ArrowMenu from '@/components/ArrowMenu'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hijri Hadi',
  description: 'An online blog andp ortofolio By hadi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased sm:max-w-4xl mx-auto `}>
        <Theme appearance="dark">
          <Navbar />
          <ArrowMenu/>
          {children}
        </Theme>
      </body>
    </html>
  )
}
