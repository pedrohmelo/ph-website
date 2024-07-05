import Link from "next/link";
import Image from "next/image";
import { ChevronRight, VenetianMask } from "lucide-react";

import ReactSvg from "@/public/svgs/icons8-reactDark.svg";
import TSSvg from "@/public/svgs/typescriptDark.svg";

const PostsCard = () => {
  return (
    <Link
      href="/posts/masks"
      className="text-neutral-200 flex flex-col md:flex-row md:gap-x-2 xl:gap-x-10 gap-y-2 rounded-sm "
    >
      <div className="flex gap-x-4">
        <div>
          <div className="flex gap-x-2 items-center md:items-start">
            <VenetianMask size={24} color="#C7BEBE" />
            <div className="h-4 w-[2px] md:h-full bg-[#696969]"></div>
            <h1 className="text-[#696969]">20 de Junho, 2024</h1>
          </div>
          <div>
            <div className="flex gap-x-2">
              <h1 className="font-medium text-[#C7BEBE] text-lg">
                Implementação Manual de Máscaras com Typescript e React
              </h1>
            </div>
            <h1 className="text-[#696969]">
              Implementando máscaras para inputs sem utilizar bibliotecas
              externas
            </h1>
            <div className="flex pt-2 gap-x-1 items-center">
              <h1 className="font-medium text-[#D25F5F]">Leia o artigo</h1>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <Image src={TSSvg} alt="TS icon" className="w-8" />
          <Image src={ReactSvg} alt="React icon" className="w-20" />
        </div>
      </div>
    </Link>
  );
};

export default PostsCard;
