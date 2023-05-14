import React from 'react'
import './styles.css'

export default function Card (item) {
    return (
    <div id='styledCard' className='styledCard'>
        <div className="container">
            <h1>{item.name}</h1>
        </div>
    </div>
  )
}

