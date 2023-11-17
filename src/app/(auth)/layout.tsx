import type { Metadata } from 'next'
import { Inter, Kanit } from 'next/font/google'
import '../globals.css'
import Providers from '@/components/Providers'


const kanit = Kanit({ weight:['100','200','300','400','500','600','700'],subsets: ['latin']})

export const metadata: Metadata = {
  title: 'NBHospital-Login',
  description: 'NbHospital-Login',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Providers>
        {children} 
      </Providers>
        </body>
    </html>
  )
}
