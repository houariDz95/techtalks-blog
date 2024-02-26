"use client"
import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"

export function PopularBlogsCarousel({blogs}) {

  const plugin = React.useRef(
      Autoplay({ delay: 2000, stopOnInteraction: true })
    )
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
          align: "start",
          loop: true,
          
      }}
      className="w-full"
    >
      <CarouselContent>
        {blogs.map((blog, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/4 sxl:basis-1/5 w-full my-10">
            <div className="group relative w-full h-full  inline-block overflow-hidden rounded-xl">
                <Image 
                    src={blog.img}
                    placeholder="blur"
                    blurDataURL={blog.img}
                    alt={blog.title}
                    width={164}
                    height={164}
                    className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
                    sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
                />
                    <div
                        className="absolute top-0 left-0 bottom-0 right-0 h-full
                        bg-gradient-to-b from-transparent from-dark/50% to-dark/90 rounded-xl z-10"
                    />
                <div className="z-20 col-span-12  lg:col-span-8 w-full absolute bottom-2 left-2">
                    <span className="inline-block w-full uppercase text-accentSoft dark:text-accentDark font-semibold text-xs sm:text-sm">
                    {blog.category}
                    </span>
                    <Link href={`/blog/${blog._id}`} className="inline-block my-1">
                    <h2 className="font-semibold capitalize text-base sm:text-sm">
                        <span
                        className="bg-gradient-to-r text-light from-accentSoft/50 dark:from-accentDark/50 to-accentSoft/50 dark:to-accentDark/50 bg-[length:0px_6px]
                            group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
                        >
                        {blog.title}
                        </span>
                    </h2>
                    </Link>

                    <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold  text-xs sm:text-base">
                    {format(new Date(blog.createdAt), "MMMM dd, yyyy")}
                    </span>
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
