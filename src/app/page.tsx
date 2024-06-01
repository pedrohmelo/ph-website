import Image from "next/image";
import { Button } from "../components/ui/button";
import { Caveat } from "next/font/google";

import Myself from "@/public/images/eu.jpg";
import MeLeft from "@/public/images/eu-esquerda.png";
import MeRight from "@/public/images/eu-direita.png";
import Me from "@/public/images/meBGremoved.png";

const caveat = Caveat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen  pt-20">
      <div className="w-full flex items-center justify-center bg-[#D9D9D9]">
        <div className="flex flex-col items-center bg-[#D9414E] p-2 rounded-lg">
          <div className="text-xl ">
            <span>&lt;</span>
            desenvolvedor
          </div>
          <div className={`${caveat.className} font-semibold text-3xl `}>
            frontend/<span>&gt;</span>
          </div>
        </div>
        <Image src={Me} alt="pedromelo's face" className="w-44 object-cover" />
      </div>

      <div className="px-4 pt-12">
        <h1 className="text-white text-lg">
          <span className="text-2xl">Olá!</span> Me chamo Pedro Melo, sou um
          <span className="font-semibold text-xl"> desenvolvedor frontend</span>
          . <br />
          <br />
          Estarei escrevendo alguns artigos educativos por aqui, com intuito de
          ajudar a comunidade de desenvolvimento.
          <br />
          <br />
          Você também encontrará alguns projetos pessoais e profissionais meus
          por aqui, disponibilizarei o código de toda a aplicação dos projetos
          pessoais.
        </h1>
      </div>

      {/* <div className="flex items-center justify-center">
        <Button className="w-52">Entre em contato</Button>
      </div> */}
    </main>
  );
}

{
  /* <div className="relative w-full flex items-center justify-center h-80 rounded-full bg-white">
<div className="absolute bg-pink-200 left-2">
  <span>&lt;</span>
  desenvolvedor/
  <span>&gt;</span>
</div>
<Image
  src={Me}
  alt="pedromelo's face"
  className="absolute w-60 object-cover right-20"
/>
<div className="absolute bg-blue-200 right-4">frontend</div>
</div> */
}
