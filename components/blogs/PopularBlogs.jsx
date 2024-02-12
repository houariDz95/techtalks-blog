import React from 'react'
import { PopularBlogsCarousel } from './PopularBlogsCaroudel'

const PopularBlogs = ({blogs}) => {
  return (
    <section
    className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center"
  >
    <h2
      className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light"
    >
      Popular Posts
    </h2>
      <PopularBlogsCarousel blogs={blogs}/>
    </section>
  )
}

export default PopularBlogs