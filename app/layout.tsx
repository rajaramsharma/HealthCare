'use client'

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import TopNavbar from '@/components/TopNavbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// ================= ROOT =================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="flex flex-col min-h-screen pt-32">
          <TopNavbar />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
