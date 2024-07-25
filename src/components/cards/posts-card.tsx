import Link from "next/link";
import Image from "next/image";
import { ChevronRight, VenetianMask } from "lucide-react";
import { postsData } from "@/src/lib/posts-data";

const PostsCard = () => {
  return (
    <div>
      {postsData.map((post) => (
        <Link
          key={post.id}
          href={post.href}
          className="flex flex-col md:flex-row md:gap-x-2 xl:gap-x-10 gap-y-2 rounded-sm"
        >
          <div className="flex gap-x-4">
            <div>
              <div className="flex gap-x-2 items-center md:items-start">
                <VenetianMask size={24} color={post.colors.main} />
                <div className="h-4 w-[2px] md:h-full bg-[#696969]"></div>
                <h1 className="text-[#696969]">{post.date}</h1>
              </div>
              <div>
                <div className="flex gap-x-2">
                  <h1 className="font-medium text-[#C7BEBE] text-lg">
                    {post.title}
                  </h1>
                </div>
                <h1 className="text-[#696969]">{post.description}</h1>
                <div className="flex pt-2 gap-x-1 items-center">
                  <h1 className="font-medium text-[#D25F5F]">
                    {post.readMore}
                  </h1>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              {post.icons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  //className={icon.className}
                />
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsCard;
