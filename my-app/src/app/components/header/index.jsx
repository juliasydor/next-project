'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import css from "./styles.css";
import TbPhoneCall from 'react-icons/tb'


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
          <div>logo</div>
          <ul className="navList">
            <a href="#" className="styledLinkHeader">Home</a>
            <a href="#styledSocialContacts" className="styledLinkHeader">Redes Socias</a>
            <a href="#styledContext" className="styledLinkHeader">Sobre</a>
            <a href="#styledCard" className="styledLinkHeader">Portfolio</a>
          </ul>
          <button>
            <Link href="/contact">Contato</Link>
          </button>
          <div className="styledNavMobile">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </div>

      <div id="styledHero">

      <div className="container">
          <h1>Está procurando um site com design moderno e completo?</h1>
          <h2>Aqui na Woodev temos o que você está procurando! Sites de todos os conteúdos e todos os preços</h2>
          <a href="#styleArticleOrders"><button>Compre aqui</button></a>
        </div>

        <img src="/ilustration.png" alt="ilustração" />
      </div>
    </div>
  );
};

export default header;
