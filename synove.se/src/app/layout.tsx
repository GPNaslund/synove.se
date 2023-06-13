import './globals.css'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] })

const DynamicNavBar = dynamic(() => import ('../components/navigation/navbar'), {
  ssr: false,
})

const DynamicFooter = dynamic(() => import ('../components/footer/footer'), {
  ssr: false,
})

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
    <html lang="en" className="bg-gray-50">
      <body className={inter.className}>
      <DynamicNavBar />
        {children}
      <DynamicFooter />
      </body>
    </html>
  )
}
