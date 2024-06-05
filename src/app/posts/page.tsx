import Link from "next/link";
import Image from "next/image";
import { VenetianMask } from "lucide-react";

const Posts = () => {
  return (
    <main className="h-screen pt-20 px-4">
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
