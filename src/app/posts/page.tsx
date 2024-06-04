import Link from "next/link";
import Image from "next/image";
import { VenetianMask } from "lucide-react";

import maskPost from "./masks/page";

const Posts = () => {
  return (
    <main className="h-screen pt-20 px-4">
      <Link
        href="/posts/masks"
        className="text-white border border-red-300 flex flex-col px-4 rounded-sm"
      >
        <div className="flex gap-x-2">
          <VenetianMask />
          <h1>Title</h1>
        </div>
        <h1>description</h1>
      </Link>
    </main>
  );
};

export default Posts;
