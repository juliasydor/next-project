'use client'
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { motion } from 'framer-motion';

const LottieAnimationDev = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./animation/lottiedev7.json'),
    });
    return () => {
      animation.destroy();
      console.log(animation);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      animate={{ scale: 0.5 }}
      transition={{ duration: 0.5, yoyo: Infinity }}
      className="lottieClass"
    />
  );
};

export default LottieAnimationDev;