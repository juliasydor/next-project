import React from 'react'
import css from './styles.css'

const ContactPage = () => {
  return (
    <div className='body'>
      <main id='mainContactPage'>
        <div className='containerContactPage'>
          <div className='contentContactPage'> 
            <h1>Fale conosco</h1>
            <form action="">
              <input type="text" name="nome" placeholder='insira seu nome' className='ContactInput'/>
              <input type="email" name="email" placeholder='insira seu email' className='ContactInput'/>
              <input type="number" name="number" placeholder='insira seu número' className='ContactInput'/>
              <textarea name="email" id="contactTextArea" cols="30" rows="10" placeholder='Digite aqui seu projeto ou solicite um orçamento'></textarea>
              <button>Enviar</button>
            </form>
          </div>
          <div className='ilustrationContactPage'>
          <img src="/contact.png" alt="ilustração"/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactPage