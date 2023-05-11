'use client'
import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi'
import css from './button.css'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop}>
          <FiArrowUp />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
