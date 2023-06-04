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
    <div className="styledHeaderContainer">
      <div className={`styledHeader ${active ? 'active' : ''}`}>
        <nav className="navBar">
          <img src="/logo.png" alt="logo" className="logo"/>
          <ul className="navList">
            <a href="#" className="styledLinkHeader">Home</a>
            <a href="#styledSocialContacts" className="styledLinkHeader">Redes Socias</a>
            <a href="#styledContext" className="styledLinkHeader">Sobre</a>
            <a href="#styledCard" className="styledLinkHeader">Portfolio</a>
          </ul>
          <button>
            <Link href="/ContactPage">Contato</Link>
          </button>
          <div className="styledNavMobile">
            <div className="barrer"></div>
            <div className="barrer"></div>
            <div className="barrer"></div>
          </div>
        </nav>
      </div>

      <div id="styledHero">

      <div className="container">
          <h1>Está procurando um site com design moderno e completo?</h1>
          <h2>Aqui na Woodev temos o que você está procurando! Sites de todos os conteúdos e todos os preços</h2>
          <a href="#styleArticleOrders"><button>Compre aqui</button></a>
        </div>

        <img src="/ilustration2.png" alt="ilustração" className="imgHeaderHero"/>
      </div>
      <img id="mobile" src="/ilustration2.png" alt="ilustração" className="imgHeaderHero"/>
    </div>
  );
};

export default header;
