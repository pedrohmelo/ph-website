import Link from "next/link";
import PostsCard from "@/src/components/cards/posts-card";

const Posts = () => {
  return (
    <main className="pt-20 h-screen px-4 md:px-16 lg:px-24 2xl:px-36 3xl:px-52">
      <h1 className="text-[#EBE4E4] text-2xl md:text-3xl pb-6 font-medium">
        Posts
      </h1>
      <Link href="/posts/masks" className="rounded-sm">
        <PostsCard />
      </Link>
    </main>
  );
};

export default Posts;
