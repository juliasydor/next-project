import React from 'react'
import './styles.css'

export default function Card (item) {
    console.log(item)
    return (
    <div className='styledCard'>
        <div className="container">
            <h1>{item.nome}</h1>
        </div>
    </div>
  )
}

