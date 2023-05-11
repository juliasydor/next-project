import React from 'react'
import './styles.css'

export default function Card (item) {
    return (
    <div className='styledCard'>
        <div className="container">
            <h1>{item.name}</h1>
        </div>
    </div>
  )
}

