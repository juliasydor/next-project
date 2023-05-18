'use client'
import React, { useRef } from 'react';
import LottieAnimationDev from './lottie'
import './styles.css';
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect } from "react";


const MainCount = () => {
const count = useMotionValue(0);
const rounded = useTransform(count, Math.round);
const ref = useRef(null)
const isInView = useInView(ref)

useEffect(() => {
  if(isInView){
  const animation = animate(count, 100, { duration: 6 });
  return animation.stop;
    }

}, [isInView]);

    return (
        <main id='styledMain' style={{
            backgroundImage: `url('/background2.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '90vh',
          }}>
            <div className='styledContainer'>
            <LottieAnimationDev />
                <div className='styledLottie'> 
                    <h1>Our industry</h1>
                    <p id='styledContext'>Lorem ipsum dolor sit amet consectetur adipisicr sit amet consectetur adipisicing elit. issimos quam, vero corporis unde similique iure ex error consequuntur.</p>
                    <div className='styledCounterContainer'>
                        <motion.div ref={ref} className='styledCounter'>{rounded}</motion.div>
                        <p className='styledParagraph'>projects</p>
                        <motion.div className='styledCounter'>{rounded}</motion.div>
                        <p className='styledParagraph'>clients</p>
                    </div>
                </div>
            </div>
        </main>
    )
}



export default MainCount;