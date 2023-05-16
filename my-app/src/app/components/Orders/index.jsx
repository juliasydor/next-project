import LottieAnimation from './lottie'
import css from './styled.css'

const Orders = () => {
    return (
        <article id="styledArticleOrders">
            <section className="styledSectionContainer">
                <h1><span className='styledSpan'>Peça</span> seu site aqui</h1>
                <input type="text" placeholder="insira o seu email"/>
                <textarea name="email" id="" cols="30" rows="10" placeholder='Digite aqui seu projeto ou solicite um orçamento'></textarea>
                <button>enviar</button>
            </section>
            <LottieAnimation />
        </article>
    )
}

export default Orders