import TableOfContents from "@/components/blogs/TbaleOfContents"
import BlogDetails from "@/components/blogs/blogDetils"
import Tag from "@/components/elements/tag"
import { getBlogById } from "@/lib/actions"
import { blogContents } from "@/lib/utils"
import siteMetadata from "@/utils/siteMetaData"
import Image from "next/image"



export async function generateMetadata({ params }) {
  const blog = await getBlogById(params.id);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.createdAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

 

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.desc,
    openGraph: {
      title: blog.title,
      description: blog.desc,
      url: `${siteMetadata.siteUrl}/${blog._id}`,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: blog.img,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.desc,
      images: blog.img,
    },
    facebook: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.desc,
      images: blog.img,    
    }
  };
}

const PostDetails =  async ({params: {id}}) => {
  const blog = await getBlogById(id)
  const  newHeadings = blogContents(blog.desc)
  const jsonLd = {  
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": blog.title,
    "description": blog.desc,
    "image": blog.img,
    "datePublished": new Date(blog.createdAt).toISOString(),
    "dateModified": new Date(blog.updatedAt || blog.createdAt).toISOString(),
    "author": [{
        "@type": "Person",
        "name": blog?.author 
        
      }]
  }

  return ( 
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tag
              name={blog.category}
              link={`/blog?s=${blog.category}`}
              className="px-6 text-sm py-2"
            />
            <h1
              className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6"
            >
              {blog.title}
            </h1>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
          <Image
            src={blog.img}
            placeholder="blur"
            blurDataURL={blog?.img}
            alt={blog.title}
            width={1200}
            height={1200}
            className="aspect-square w-full h-full object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <BlogDetails blog={blog} />
        <div className="grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
          <div className="col-span-12  lg:col-span-4">
              <TableOfContents desc={newHeadings} />
          </div>
          <div className="col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
          prose-blockquote:bg-accent/20 
          prose-blockquote:p-2
          prose-blockquote:px-6
          prose-blockquote:border-accent
          prose-blockquote:not-italic
          prose-blockquote:rounded-r-lg

          prose-li:marker:text-accent

          dark:prose-invert
          dark:prose-blockquote:border-accentDark
          dark:prose-blockquote:bg-accentDark/20
          dark:prose-li:marker:text-accentDark

          first-letter:text-3xl
          sm:first-letter:text-5xl
          ">
            <div
                dangerouslySetInnerHTML={{
                  __html: blog.desc.replace(
                    /<h(\d)(.*?)>(.*?)<\/h\1>/g,
                    (match, level, attributes, content) => {
                      const id = content.toLowerCase().replace(/\s+/g, '-');
                      return `<h${level}${attributes} id="${id}">${content}</h${level}>`;
                    }
                  ),
                }}
                className="blog-post prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20"
              />
          </div>
        </div>
      </article>
    </>
  )
}

export default PostDetails