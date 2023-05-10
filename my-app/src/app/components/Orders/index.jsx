import css from './styled.css'

const Orders = () => {
    return (
        <article className="styledArticle">
            <section className="styledSectionContainer">
                <h1>Peça seu site aqui</h1>
                <input type="text" placeholder="insira o seu email"/>
                <textarea name="email" id="" cols="30" rows="10" placeholder='Digite aqui seu projeto ou solicite um orçamento'></textarea>
                <button>enviar</button>
            </section>
        </article>
    )
}

export default Orders