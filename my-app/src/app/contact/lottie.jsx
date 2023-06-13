'use client'
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { motion } from 'framer-motion';

export default contactUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./animation/contact.json'),
    });
    return () => {
      animation.destroy();
      console.log(animation);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      animate={{ scale: 0.8 }}
      transition={{ duration: 0.5, yoyo: Infinity }}
    />
  );
};
