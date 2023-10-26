import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Providers from '@/components/Providers'
import { AppHeader } from './ui/AppHeader'
import { AppFooter } from './ui/AppFooter'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Providers>
          <AppHeader/>
          {children} 
          <AppFooter/>
        </Providers>
      </body>
    </html>
  )
}
