import { format } from "date-fns";
import Link from "next/link";

import { calculateReadingTime } from "@/lib/utils";
//import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog }) => {
    const readingTime = calculateReadingTime(blog.desc)
  return (
    <div className="px-2  md:px-10 bg-accentSoft dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
      <time className="m-3">
        {format(new Date(blog.createdAt), "MMMM dd, yyyy")} 
      </time>
      <span className="m-3">
        {/*<ViewCounter slug={blogSlug} />*/}
        <div>{blog.views} views</div>
      </span>
      <div className="m-3">{readingTime} min reads</div>
      <Link href={`/blog?s=${blog.category}`} className="m-3">
        #{blog.category}
      </Link>
    </div>
  );
};

export default BlogDetails;