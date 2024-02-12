"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {motion} from 'framer-motion'
import { Button } from "@/components/ui/button";

export const Heading = () => {

  return (
    <motion.div
      className="max-w-3xl space-y-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl sm:text-5xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Techtalks</span>
      </motion.h1>
      <motion.h3
        className="text-base sm:text-xl md:text-2xl font-medium"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Techtalks is the connected workspace where <br />
        better, faster work happens.
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button asChild>
          <Link href="/blog">
            Expolre Now
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}