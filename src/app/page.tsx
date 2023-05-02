import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Hero from '@/pages/Hero'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export default function Home() {
  return (
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <NavBar />
        <Hero />
        <Footer />
      </main>
  )
}
