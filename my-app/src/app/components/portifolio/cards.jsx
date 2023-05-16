import React from 'react'
import './styles.css'
import {motion} from 'framer-motion'


export default function Card ({item}) {
    return (
    <motion.div  
    layout  
    animate={{ opacity: 1 }} 
    initial={{ opacity: 0 }} 
    exit={{ opacity: 0 }}
    className='styledCard' 
    id='styledCard'
    style={{backgroundImage: `url(${item.img})`}}
    >
        <div className="container">
            <h1 style={{color: 'black'}}>{item.name}</h1>
        </div>
    </motion.div>
  )
}

