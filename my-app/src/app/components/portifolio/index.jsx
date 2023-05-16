'use client'
import { useEffect, useState } from 'react'
import Card from './cards'
import css from './styles.css'
import {motion} from 'framer-motion'




function Projects() {


  const [theme,settheme] = useState(null);
  


  const ProjectList = [
    {
    name: 'woodev',
    theme: 'landing page',
    img: 'https://www.iset.com.br/blog/wp-content/webp-express/webp-images/uploads/2016/06/Saiba_como_fazer_uma_loja_virtual_mais_eficaz_e_atraente.jpg.jpeg.webp'
    },

    {
    name: 'weplay',
    theme: 'blog',
    img: 'https://colorlib.com/wp/wp-content/uploads/sites/2/wordpress-blog-themes-2.jpg.webp'
    },

    {
      name: 'my agenda',
      theme: 'e commerce',
      img: 'https://img.freepik.com/free-psd/vr-event-landing-page-design-template_23-2149229513.jpg?w=826&t=st=1684264056~exp=1684264656~hmac=6a6488a1bba4e30260811101d64d75100542919162658f2cacbfc766c1a5c8fa'
    },

    {
      name: 'welcome home',
      theme: 'landing page',
      img: 'https://www.iset.com.br/blog/wp-content/webp-express/webp-images/uploads/2016/06/Saiba_como_fazer_uma_loja_virtual_mais_eficaz_e_atraente.jpg.jpeg.webp'
    },

    {
      name: 'market',
      theme: 'e commerce',
      img: 'https://img.freepik.com/free-psd/vr-event-landing-page-design-template_23-2149229513.jpg?w=826&t=st=1684264056~exp=1684264656~hmac=6a6488a1bba4e30260811101d64d75100542919162658f2cacbfc766c1a5c8fa'
    },
    {
        name: 'bioLife',
        theme: 'blog',
        img: 'https://colorlib.com/wp/wp-content/uploads/sites/2/wordpress-blog-themes-2.jpg.webp'
    },
  ]

  const filtradas = ProjectList.filter(project => theme === null || project.theme === theme )

  return (
    <div className="styledProjectsList">
      <h1>projetos</h1>
      <h3>portifolio Woodev</h3>
      <div className='styledfilter'>
      <button className='linkfilter' onClick={() => settheme(null)}>Todas</button>
      <button className='linkfilter' onClick={() => settheme('landing page')}>landing page</button>
      <button className='linkfilter' onClick={() => settheme('blog')}>blogs</button>
      <button className='linkfilter' onClick={() => settheme('e commerce')}>e commerce</button>
      </div>


    <motion.div layout className='styledList'>
      {
        filtradas.map((item,index) =>(
          <Card key={index} item={item}/>
        ))
      }
    </motion.div>
    

    </div>
  )
}



export default Projects



