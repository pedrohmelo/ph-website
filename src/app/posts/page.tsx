import Link from "next/link";
import { VenetianMask, ChevronRight } from "lucide-react";

const Posts = () => {
  return (
    <main className="pt-20 h-screen px-4 md:px-16 lg:px-24 2xl:px-36">
      <h1 className="text-neutral-200 text-2xl md:text-3xl pb-6 font-medium">
        Posts
      </h1>
      <Link
        href="/posts/masks"
        className="text-neutral-200 flex flex-col md:flex-row md:gap-x-4 lg:gap-x-14 gap-y-2 px-4 py-2 rounded-sm hover:bg-[#393231]"
      >
        <div className="flex gap-x-2 items-center md:items-start">
          <div className="h-4 w-1 md:h-full bg-gray-500"></div>
          <h1 className="text-gray-500">20 de Junho, 2024</h1>
        </div>
        <div>
          <div className="flex gap-x-2">
            <VenetianMask size={24} />
            <h1 className="font-medium text-lg">
              Implementação Manual de Máscaras com Typescript e React
            </h1>
          </div>
          <h1 className="text-gray-500">
            Fazendo máscaras para inputs sem utilizar bibliotecas externas.
          </h1>
          <div className="flex gap-x-1 items-center">
            <h1 className="font-medium">Leia o artigo </h1>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </main>
  );
};

export default Posts;
