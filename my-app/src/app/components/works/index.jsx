'use client'
import styles from './styles.css'
import {useState, useRef, useEffect} from 'react'
import { motion } from 'framer-motion'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'



const Works = () => {
    
    const images = [image1, image2, image3]
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <div>
            <article className='styledMainWorks'>
                <p><span>Conheça</span> nossos tipos de projetos</p>
                <section className='styledMainWorksContainer'>
                    <div>landing page</div>
                    <div>e commerce</div>
                    <div>blogs</div>
                </section>
            </article>


            <motion.article ref= {carousel} className='styledMainWorks2' 
            whileTap={{cursor: "grabbing"}}>
            <p><span>Conheça</span> nossos tipos de projetos</p>
            <motion.section className='styledMainWorksContainer2'
            drag= "x"
            dragConstraints={{right: 0, left: -width}}>

                {images.map(image => (
                    <motion.div className='item'>
                        <img src={image} alt="projetos" />
                    </motion.div>
                ))}

            </motion.section>
            </motion.article>
        </div>
    )
}

export default Works