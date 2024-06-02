import Image from "next/image";
import { Button } from "../components/ui/button";
import { Caveat } from "next/font/google";

import Myself from "@/public/images/eu.jpg";
import MeLeft from "@/public/images/eu-esquerda.png";
import MeRight from "@/public/images/eu-direita.png";
import Me from "@/public/images/meBGremoved.png";
import Brush from "@/public/images/brush.png";
import teste1 from "@/public/images/Pedroca.png";

const caveat = Caveat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="pt-16">
      <div className="w-full flex items-center justify-center bg-[#D9D9D9]">
        <div className="relative flex flex-col items-center p-2 w-60">
          <Image src={teste1} alt="1fasd" className="z-10  w-72 absolute" />
          <div className="flex flex-col items-center relative ">
            <h1 className="text-2xl relative z-20 font-semibold ">
              <span>&lt;</span>
              desenvolvedor
            </h1>
            <h1
              className={`${caveat.className} relative font-semibold text-4xl z-20 `}
            >
              frontend/<span>&gt;</span>
            </h1>
          </div>
        </div>
        <Image src={Me} alt="pedromelo's face" className="w-44 object-cover" />
      </div>

      <div className="px-4 pt-12 text-center">
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

      <div className="flex items-center justify-center pt-10 px-8 ">
        <h1 className="text-white">
          Caso precise de um desenvolvedor para tornar sua ideia realidade, pode
          entrar em contato comigo!
        </h1>
        <Button className="w-52" variant="contact">
          Entre em contato
        </Button>
      </div>
    </main>
  );
}
