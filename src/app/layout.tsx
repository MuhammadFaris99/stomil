import '../../public/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stomil',
  description: 'Stomil Web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        <main className="mt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
