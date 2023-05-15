import Lottie1AnimationDev from './lottie1'
import Lottie2AnimationDev from './lottie2'
import Lottie3AnimationDev from './lottie3'
import css from './styled.css'

const SocialMedias = () => {
    return (
        <article Id='styledSocialContacts'>
            <div className='styledSocialContactsContainer'>
                <div id='contentMedia'><p><span>Fale</span> conosco</p></div>
                <div>
                    <ul>
                    <a href="https://www.youtube.com/" target={'_blank'}>
                            <li><Lottie2AnimationDev /></li>
                        </a>
                        <a href="https://www.instagram.com/" target={'_blank'}>
                            <li><Lottie1AnimationDev /></li>
                        </a>
                        <a href="https://www.linkedin.com/in/julia-sydor-892977262/" target={'_blank'}>
                            <li><Lottie3AnimationDev /></li>
                        </a>
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default SocialMedias