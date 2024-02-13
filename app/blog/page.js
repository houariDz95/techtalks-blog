
import PopularBlogs from '@/components/blogs/PopularBlogs';
import BlogLayoutThree from '@/components/blogs/blog-layout-three';
import Categories from '@/components/blogs/categories';
import { getBlogsByQuery, getCategories, getPopularBlogs } from '@/lib/actions';

export async function generateMetadata(paramsKey) {
  const query = paramsKey.searchParams.s ? paramsKey.searchParams.s : "all";
  return {
    title: `${query} blogs`,
    description: `Learn more about ${query === "all" ? "Technology" : query} through our collection of expert blogs and tutorials`,
  };
}

const BlogsPage = async (paramsKey) => {

  const query = paramsKey.searchParams.s;
  const blogs = await getBlogsByQuery(query);
  const categories = await getCategories();
  const popular= await getPopularBlogs();

  return (
    <article className="mt-28 flex flex-col text-dark dark:text-light mb-16 sm:mb-24  md:mb-32 ">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className='mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl'><span className='text-accentSoft dark:text-accentDark'>#</span>{query ? query : "all"}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={categories} currentSlug={query} />
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16  px-5 sm:px-10 md:px-24 sxl:px-32 pt-10 mt-10">
        {blogs.map((blog, index) => (
          <article key={blog._id} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
      {!blogs.length && (
        <div className="mt-6 text-xl flex items-center justify-center">
          <h2 className='text-dark/90 dark:text-light/90 bg-accent w-fit px-6 py-4 rounded-md'>
            No results found for your query. Try searching for something else!
          </h2>
        </div>
      )}
      <PopularBlogs blogs={popular} />
    </article>
  )
}

export default BlogsPage