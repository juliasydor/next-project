'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import css from './styles.css'

const header = () => {

  const [active,setActive] = useState(false)

  const isActive = () =>{
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }
  
  useEffect(()=>{
    window.addEventListener("scroll", isActive)

    return () =>{
      window.removeEventListener("scroll", isActive)
    }
  },[])

    return (
    <>
        <div className='styledHeader'>
            <nav>
              <div>
                logo
              </div>
              <ul>
                <li>Home</li>
                <li>Projetos</li>
                <li>Sobre</li>
                <li>Portfolio</li>
              </ul>
              <button>
                <Link href="/contact">Contato</Link>
              </button>
            </nav>
        </div>

        <div className='styledHero'>
            <div className='container'>
              <h2>algum texto q a gnt vai ver depois</h2>
              <button>Compre já</button>
              <img src="#" alt="" />
            </div>
        </div>
      </> 
    
    )
  }

  export default header;