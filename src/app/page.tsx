import Image from "next/image";
import { Button } from "../components/ui/button";
import ButtonShiny from "../components/ui/button-shiny";
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
        <div className="relative flex flex-col items-center p-2 w-60 md:w-96">
          <Image
            src={teste1}
            alt="1fasd"
            className="z-10 w-72 md:w-96 md:-bottom-4 absolute"
          />
          <div className="flex flex-col items-center relative">
            <h1 className="text-2xl relative z-20 font-semibold md:text-3xl">
              <span>&lt;</span>
              desenvolvedor
            </h1>
            <h1
              className={`${caveat.className} relative font-semibold text-4xl z-20 md:text-5xl `}
            >
              frontend/<span>&gt;</span>
            </h1>
          </div>
        </div>
        <Image
          src={Me}
          alt="pedromelo's face"
          className="w-44 md:w-60 object-cover"
        />
      </div>

      <div className="px-4 md:px-16 lg:px-24 pt-12 md:text-start">
        <h1 className="text-neutral-200 text-lg md:text-2xl">
          <span className="text-2xl md:text-4xl lg:text-5xl tracking-wider">
            Olá!
          </span>{" "}
          Me chamo Pedro Melo, sou um
          <span className="font-semibold text-xl md:text-2xl">
            {" "}
            desenvolvedor frontend
          </span>
          .
          <br />
          <br />
          Estarei escrevendo alguns artigos por aqui, com intuito de repassar
          meu conhecimento.
          <br />
          <br />
          Você também encontrará alguns projetos pessoais e profissionais meus
          por aqui.
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center pt-10 px-4 md:px-16 lg:px-24 md:gap-x-10">
        <h1 className="text-neutral-200 md:text-2xl pb-4">
          Caso precise de um desenvolvedor para tornar sua ideia realidade, pode
          entrar em contato comigo!
        </h1>
        {/* <ButtonShiny /> */}
        <Button className="w-full h-10 text-xl" variant="contact">
          Entre em contato
        </Button>
      </div>

      <div className="text-white">fon</div>
    </main>
  );
}
