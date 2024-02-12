import { getPopularBlogs, getRecentBlogs } from '@/lib/actions'
import React from 'react'
import TechtalksLogo from './ui/logo';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import ScrollTop from './ScrollTop';

const routes = [
  {
    href: `/`,
    label: 'Home',
  },
  {
    href: `/about`,
    label: 'About',
  },
  {
    href: `/blog`,
    label: 'Blog',
  },
  {
    href: `/contact`,
    label: 'Contact',
  },
]

const Footer = async  () => {
  const recentPosts = await getRecentBlogs();
  const popularPosts = await  getPopularBlogs();
  return (
    <>
    <footer className='flex flex-wrap pt-6 px-5 sm:px-10 md:px-24 sxl:px-32 shadow-sm justify-center md:justify-between'>
      <div className='w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8'>
        <TechtalksLogo />
        <p className='mt-4 text-sm'>
          Unleash the latest in the world of technology with insightful articles, reviews, and trends. Stay ahead in the tech game – your go-to source for innovation, gadgets, and digital discoveries. Explore the future, one byte at a time.
        </p>
      </div>
      <div className='w-full md:w-1/4 lg:w-1/5 xl:w-1/5 mb-8'>
        <h4 className='text-lg font-bold mb-4'>RECENT POSTS</h4>
        <div className='space-y-2 flex flex-col'>
          {recentPosts.map(post => (
            <Link href={`/blog/${post._id}`} key={post._id} className='text-accentSoft dark:text-accentDark text-sm hover:underline'>
              {post.title}
            </Link>
          ))}
        </div>
      </div>
      <div className='w-full md:w-1/4 lg:w-1/5 xl:w-1/5 mb-8'>
        <h4 className='text-lg font-bold mb-4'>POPULAR POSTS</h4>
        <div className='space-y-2 flex flex-col'>
          {popularPosts.map(item => (
            <Link href={`/blog/${item._id}`} key={item._id} className='text-accentSoft dark:text-accentDark text-sm hover:underline'>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className='w-full md:w-1/4 lg:w-1/5 xl:w-1/5 mb-8'>
        <h4 className='text-lg font-bold mb-4'>EXPLORE</h4>
        <div className='space-y-2 flex flex-col'>
          {routes.map(route => (
            <Link href={route.href} key={route.label} className='text-accentSoft dark:text-accentDark text-sm hover:underline'>
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
    <div className='flex flex-wrap px-5 sm:px-10 md:px-24 sxl:px-32'>
      <div className='w-full mt-8 mb-4 text-center'>
        <p className='text-sm'>&copy; 2024 Techtalks. All rights reserved.</p>
      </div>
      <ScrollTop />
    </div>
    </>
  )
}

export default Footer