import FeaturedPosts from "@/components/home/featured";
import { Heading } from "@/components/home/heading";
import { Heroes } from "@/components/home/heros";
import RecentPosts from "@/components/home/recent-post";
import { getBlogs, getRecentBlogs } from "@/lib/actions";

export default async function Home() {
  const allBlogs = await getBlogs();
  const recenttBlogs = await getRecentBlogs();

  return (
    <main className="pt-40">
      <div className="min-h-full flex flex-col">
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
          <Heading />
          <Heroes />
        </div>
      </div>
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={recenttBlogs} />
    </main>
  )
}
