'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import css from "./styles.css";

const header = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <>
      <div className="styledHeader">
        <nav>
          <div>logo</div>
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

      <div className="styledHero" style={{
        backgroundImage: `url('/background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh'
      }}>

      <div className="container">
          <h1>Está procurando um site com design moderno e completo?</h1>
          <h2>Aqui na Woodev temos o que você está procurando! Sites de todos os conteúdos e todos os preços</h2>
          <button>Compre aqui</button>
        </div>

        <img src="/ilustration.png" alt="ilustração" />
      </div>
    </>
  );
};

export default header;
