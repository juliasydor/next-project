import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from './components/header'
import Technologies from './components/technologies'
import Footer from './components/Footer'
import MainCount from './components/mainCount';
import Projects from './components/portifolio'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <Technologies/>
      <MainCount />
      <Projects />
      <Footer/>
  </>
  )
}
