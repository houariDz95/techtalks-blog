"use client"
import NavLink from "./nav-link"
import {motion} from 'framer-motion';
import { bottomVariants, centerVariants, listItemVariants, listVariants, topVariants } from "@/lib/variants";
import { useEffect, useState } from "react";
import Link from "next/link";
import {usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { Search } from "lucide-react";
import TechtalksLogo from "./ui/logo";
import { cn } from "@/lib/utils";
import { useScrollTop } from "@/lib/use-scroll-top";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const pathname = usePathname();
  const router = useRouter();
  const scrolled = useScrollTop();
  
  useEffect(() => {
    if(open){
      setOpen(false)
    }
  }, [pathname])
  const handleSearch = (e) => {
    e.preventDefault();
    if(!search) return
    if(search){
      router.push(`/blog?s=${search}`)
      if(open){
        setOpen(false)
      }
    }
  }

  const routes = [
    {
      href: `/`,
      label: 'Home',
      active: pathname === `/`,
    },
    {
      href: `/about`,
      label: 'About',
      active: pathname === `/about`,
    },
    {
      href: `/blog`,
      label: 'Blog',
      active: pathname.includes(`/blog`),
    },
    {
      href: `/contact`,
      label: 'Contact',
      active: pathname === `/contact`,
    },
  ]

  return (
    <>
      <div className={cn(
      "z-50 bg-background dark:bg-[#1F1F1F] lg:fixed top-0  w-full py-6 lg:px-6",
      scrolled && "border-b shadow-sm"
    )}>
          <div className="flex w-full items-center gap-4 px-4 justify-between">
            <TechtalksLogo />
            <div className="hidden md:flex gap-4 flex-1 items-center justify-start">
              {routes.map((link) => (
                <NavLink link={link} key={link.label} />
              ))}
            </div>
            <div className="hidden sm:flex flex-1 justify-end items-center gap-4">
              <form className="flex items-center gap-2 p-2 border rounded-md" onSubmit={handleSearch}>
                <input 
                placeholder="search..." 
                type="text" 
                value={search} 
                className="px-2  outline-none bg-transparent"  
                onChange={(e) =>setSearch(e.target.value)}/>
                <button type="submit">
                <Search className="w-5 h-5" />
                </button>
              </form>
              <ModeToggle />
            </div>
            {/*  RESPONSIVE MENU */}
            <button
                className="w-10 h-8 flex flex-col justify-between z-50 relative md:hidden"
                onClick={() => setOpen((prev) => !prev)}
              >
                <motion.div
                  variants={topVariants}
                  animate={open ? "opened" : "closed"}
                  className="w-10 h-1 bg-black dark:bg-white rounded origin-left"
                ></motion.div>
                <motion.div
                  variants={centerVariants}
                  animate={open ? "opened" : "closed"}
                  className="w-10 h-1 bg-black dark:bg-white rounded"
                ></motion.div>
                <motion.div
                  variants={bottomVariants}
                  animate={open ? "opened" : "closed"}
                  className="w-10 h-1 bg-black dark:bg-white origin-left"
                ></motion.div>
              </button>
          </div>
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="w-screen flex flex-col md:hidden bg-accent/50"
            >
              {routes.map((link) => (
                <motion.div
                  variants={listItemVariants}
                  className="p-2 border-b"
                  key={link.label}
                >
                  <Link href={link.href}>{link.label}</Link>
                </motion.div>
              ))}
              <div className="flex items-center justify-between mt-4 py-5 px-2 sm:hidden">
                <form className="flex items-center gap-2 p-2 border rounded-md" onSubmit={handleSearch}>
                  <input 
                    placeholder="search..." 
                    type="text" 
                    value={search} 
                    className="px-2  outline-none bg-transparent"  
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button type="submit">
                    <Search className="w-5 h-5" />
                  </button>
                </form>
                
                {/* Theme Toggle */}
                <div className="pr-5">
                  <ModeToggle />
                </div>
              </div>
            </motion.div>
          )}
      </div>
    </>
  )
}

export default Navbar