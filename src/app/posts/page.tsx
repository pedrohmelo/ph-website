import Link from "next/link";
import { VenetianMask } from "lucide-react";

const Posts = () => {
  return (
    <main className="pt-20 px-4 md:px-16 lg:px-24">
      <h1 className="text-neutral-200 text-2xl md:text-3xl pb-6 font-medium">
        Posts
      </h1>
      <Link
        href="/posts/masks"
        className="text-neutral-200 border border-[#393231] flex flex-col gap-y-2 px-4 py-2 rounded-sm hover:bg-[#393231]"
      >
        <div className="flex gap-x-2 items-center">
          <div className="h-4 w-1 bg-gray-500"></div>
          <h1 className="text-gray-500">19 de Junho, 2024</h1>
        </div>
        <div>
          <div className="flex gap-x-2">
            <VenetianMask size={24} />
            <h1 className="font-medium text-lg">Máscaras</h1>
          </div>
          <h1>
            Fazendo máscaras para inputs sem utilizar bibliotecas externas.
          </h1>
        </div>
      </Link>
    </main>
  );
};

export default Posts;
