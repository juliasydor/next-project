import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from './components/header'
import Technologies from './components/technologies'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <Technologies/>
      <Footer/>
  </>
  )
}
