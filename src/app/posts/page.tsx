import Link from "next/link";
import { VenetianMask } from "lucide-react";

const Posts = () => {
  return (
    <main className="pt-20 px-4 md:px-16">
      <h1 className="text-white text-2xl md:text-3xl pb-6 font-medium">
        Posts
      </h1>
      <Link
        href="/posts/masks"
        className="text-white border border-red-300 flex flex-col px-4 py-2 rounded-sm"
      >
        <div className="flex gap-x-2">
          <VenetianMask size={24} />
          <h1 className="font-medium text-lg">Máscaras</h1>
        </div>
        <h1>Fazendo máscaras para inputs sem utilizar bibliotecas externas.</h1>
      </Link>
    </main>
  );
};

export default Posts;
