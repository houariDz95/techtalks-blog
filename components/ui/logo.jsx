import React from 'react';
import { Pacifico } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"]
})
const TechtalksLogo = () => {
  return (
    <Link href="/">
      <p className="text-accentSoft dark:text-accentDark text-2xl font-semibold">
        TechHub<span className="text-gray">Talks</span>
      </p>
    </Link>
  );
};

export default TechtalksLogo;
