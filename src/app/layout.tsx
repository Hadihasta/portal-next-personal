import '@/style/globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Theme } from '@radix-ui/themes'
import ArrowMenu from '@/components/ArrowMenu'
import Navbar from '@/components/navbar'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
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
    <html
      lang="en"
      className={`${outfit.variable}`}
    >
      <body className={`antialiased  mx-auto `}>
        <Theme appearance="dark">
          <Navbar />
          <ArrowMenu />
          {children}
        </Theme>
      </body>
    </html>
  )
}
