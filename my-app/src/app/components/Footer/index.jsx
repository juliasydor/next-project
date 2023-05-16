
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { ImLinkedin } from 'react-icons/im'
import css from './styles.css'
import ScrollToTopButton from './button/button'




const Footer = () => {
    return (
        <footer className="styledFooter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,101.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className="styledContainer">
                <section className="styledSocialMedia">
                    <h2>social medias</h2>
                    <ul>
                        <li>
                            <a href="https://www.youtube.com/" target={'_blank'}>
                                <AiFillInstagram size={25} className='icons'/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target={'_blank'}>
                                <IoLogoWhatsapp size={25} className='icons'/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/marcelo-kodaira-de-almeida/" target={'_blank'}>
                                <ImLinkedin size={25} className='icons'/>
                            </a>
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