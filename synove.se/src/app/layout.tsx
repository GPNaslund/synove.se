import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/navigation/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Synöve.se',
  description: 'För ett starkare liv!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
        {children}
      </body>
    </html>
  )
}
