'use client'
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { ImLinkedin } from 'react-icons/im'
import { AiOutlineArrowUp } from 'react-icons/ai'
import css from './styles.css'
import ScrollToTopButton from './button/button'




const Footer = () => {
    return (
        <footer className="styledFooter">
            <div className="styledContainer">
                <section className="styledSocialMedia">
                    <h2>social medias</h2>
                    <ul>
                        <li>
                            <AiFillInstagram size={25}/>
                        </li>
                        <li>
                            <BsTwitter size={25}/>
                        </li>
                        <li>
                            <IoLogoWhatsapp size={25}/>
                        </li>
                        <li>
                            <ImLinkedin size={25}/>
                        </li>
                    </ul>
                </section>
                <section className="styledContacts">
                    <h2>contact Us</h2>
                    <ul>
                        <li>1199999999999</li>
                        <li>julia@gmail.com</li>
                        <li>@juliasydor</li>
                    </ul>
                </section>    
            </div>
            <section className="styledCredits">
                    <h3>designed by wooDev</h3>
                        <ScrollToTopButton />
                </section>
        </footer>
    )
}

export default Footer;