"use client"
import { motion } from 'framer-motion';
import BlogLayoutOne from "../blogs/blog-layout-one";
import BlogLayoutTwo from "../blogs/blog-layout-two";

const FeaturedPosts = ({ blogs }) => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileInView="visible"
      >
        Featured Posts
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.article
          className="col-span-2 sxl:col-span-1 row-span-2 relative"
          variants={itemVariants}
        >
          <BlogLayoutOne blog={blogs[0]} />
        </motion.article>
        <motion.article
          className="col-span-2 sm:col-span-1 row-span-1 relative"
          variants={itemVariants}
        >
          <BlogLayoutTwo blog={blogs[1]} />
        </motion.article>
        <motion.article
          className="col-span-2 sm:col-span-1 row-span-1 relative"
          variants={itemVariants}
        >
          <BlogLayoutTwo blog={blogs[2]} />
        </motion.article>
      </motion.div>
    </motion.section>
  );
};

export default FeaturedPosts;
