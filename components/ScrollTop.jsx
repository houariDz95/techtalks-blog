'use client'

import { ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

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
        <Button
          size="icon"
          variant="ghost"
          className='fixed bottom-8 right-8 bg-accentSoft dark:bg-accentDark dark:text-dark text-white rounded-full shadow-md  focus:outline-none'
          onClick={scrollToTop}
        >
          <ArrowUp className='w-7 h-7' />
        </Button>
      )}
    </>
  )
}

export default ScrollTop