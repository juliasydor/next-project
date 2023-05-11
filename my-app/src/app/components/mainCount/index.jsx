'use client'
import React from 'react';
import './styles.css';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const MainCount = () => {
    const count = useMotionValue(0);
const rounded = useTransform(count, Math.round);

useEffect(() => {
  const animation = animate(count, 100, { duration: 10 });

  return animation.stop;
}, []);

    return (
        <main className='styledMain'>
            <h1>bem vindo</h1>
            <p><span>Saiba</span> mais sobre nós </p>
            <div className='styledContainer'>
            <img src="/ilustration.png" alt="ilustração" />
                <div className='styledContent'> 
                    <h1>Our industry</h1>
                    <p id='styledContext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aspernatur exercitationem quas numquam voluptatibus, praesentium earum fugiat sit ea blanditiis mollitia totam beatae quis architecto recusandae quam tempore reiciendis itaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. issimos quam, vero corporis unde similique iure ex error consequuntur.</p>
                    <div className='styledCounterContainer'>
                        <motion.div>{rounded}</motion.div> <span>+</span>
                    </div>
                </div>
            </div>
        </main>
    )
}



export default MainCount;