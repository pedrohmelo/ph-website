import Image from "next/image";
import { Button } from "../components/ui/button";
import ButtonShiny from "../components/ui/button-shiny";
import { Caveat } from "next/font/google";
import {
  Phone,
  Instagram,
  Linkedin,
  Github,
  VenetianMask,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

import Myself from "@/public/images/eudenovo.jpg";
import WorkTimeline from "../components/work-timeline";

const caveat = Caveat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="pt-6">
      {/* <div className="w-full flex items-center justify-center bg-[#D9D9D9]">
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
      </div> */}

      <div className="px-4 md:px-16 lg:px-24 pt-12 md:text-start">
        <div className="flex flex-col pt-6 gap-y-2">
          <div className="flex items-center gap-x-4">
            <h1 className="text-neutral-300 font-bold text-2xl w-2/3">
              Desenvolvedor frontend e marceneiro amador.
            </h1>
            <Image
              src={Myself}
              alt="pedromelo"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <h1 className="text-neutral-500">
            Olá, me chamo Pedro e sou um desenvolvedor frontend. Estarei
            escrevendo alguns artigos por aqui, com intuito de repassar
            conhecimento. Além disso, você também poderá encontrar alguns
            projetos pessoais por aqui.
          </h1>
        </div>

        <div className="flex pt-6 gap-x-4">
          <Link href="https://www.instagram.com/opedromel?igsh=MXprZm5pdnJzN3V3">
            <Instagram size={30} color="#737373" />
          </Link>
          <Link href="https://www.linkedin.com/in/pedro-melo-8841731b1/">
            <Linkedin size={30} color="#737373" />
          </Link>
          <Link href="https://github.com/pedrohmelo">
            <Github size={30} color="#737373" />
          </Link>
        </div>

        {/* TODO: refazer isso aqui de forma dinâmica em um único componente. Fazendo fetch de X posts */}
        <Link
          href="/posts/masks"
          className="text-neutral-200 pt-10 flex flex-col md:flex-row md:gap-x-4 lg:gap-x-14 gap-y-2 rounded-sm hover:bg-[#393231]"
        >
          <div className="flex gap-x-2 items-center md:items-start">
            <div className="h-4 w-1 md:h-full bg-gray-500"></div>
            <h1 className="text-gray-500">19 de Junho, 2024</h1>
          </div>
          <div>
            <div className="flex gap-x-2">
              <VenetianMask size={24} />
              <h1 className="font-medium text-lg">Máscaras</h1>
            </div>
            <h1 className="text-gray-500">
              Fazendo máscaras para inputs sem utilizar bibliotecas externas -
              <span className="text-neutral-400"> Typescript</span>
            </h1>
            <div className="flex gap-x-1 items-center">
              <h1 className="font-medium text-red-400">Leia o artigo </h1>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </Link>

        <div className="pt-10">
          <WorkTimeline />
        </div>
      </div>
    </main>
  );
}
