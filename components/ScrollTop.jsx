'use client'

import { ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ScrollTop = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    {showScrollButton && (
        <button
          className='fixed bottom-8 right-8 bg-accentSoft dark:bg-accentDark dark:text-dark text-white py-2 px-4 rounded-full shadow-md text-primary focus:outline-none'
          onClick={scrollToTop}
        >
          <ArrowUp className='w-7 h-7' />
        </button>
      )}
    </>
  )
}

export default ScrollTop