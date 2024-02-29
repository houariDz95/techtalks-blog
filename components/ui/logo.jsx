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
    <Link href="/" className="md:flex items-center">
        <p className="font-semibold">
            <span className={cn('text-2xl font-bold text-accentSoft dark:text-accentDark', pacifico.className)}>T</span>echHubTalks
        </p>
    </Link>
  );
};

export default TechtalksLogo;
