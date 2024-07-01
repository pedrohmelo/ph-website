import {
  Phone,
  Instagram,
  Linkedin,
  Github,
  VenetianMask,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Caveat } from "next/font/google";

import Myself from "@/public/images/eudenovo.jpg";
import WorkTimeline from "../components/work-timeline";

const caveat = Caveat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="pt-6 lg:pt-20 h-screen mb-10">
      <div className="px-4 md:px-16 lg:px-24 2xl:px-36 pt-12 md:text-start">
        <div className="flex flex-col pt-6 gap-y-2">
          <div className="flex items-center gap-x-4 md:justify-between">
            <h1 className="text-neutral-300 font-bold text-2xl w-2/3 md:text-4xl lg:text-5xl">
              Desenvolvedor frontend e marceneiro amador.
            </h1>
            <Image
              src={Myself}
              alt="pedromelo"
              className="w-24 h-24 rounded-full lg:w-40 lg:h-40 object-cover"
            />
          </div>
          <h1 className="text-neutral-500 md:pt-4">
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
        <div className="pt-20 xl:pt-40 flex flex-col lg:flex-row gap-y-20 lg:items-start lg:justify-between">
          <div className="lg:w-3/4 xl:w-2/3">
            <Link
              href="/posts/masks"
              className="text-neutral-200 flex flex-col md:flex-row md:gap-x-2 xl:gap-x-10 gap-y-2 rounded-sm "
            >
              <div className="flex gap-x-2 items-center md:items-start">
                <div className="h-4 w-1 md:h-full bg-gray-500"></div>
                <h1 className="text-gray-500">20 de Junho, 2024</h1>
              </div>
              <div>
                <div className="flex gap-x-2">
                  <VenetianMask size={24} />
                  <h1 className="font-medium text-lg">
                    {" "}
                    Implementação Manual de Máscaras com Typescript e React
                  </h1>
                </div>
                <h1 className="text-gray-500">
                  Implementando máscaras para inputs sem utilizar bibliotecas
                  externas
                </h1>
                <div className="flex gap-x-1 items-center">
                  <h1 className="font-medium text-red-400">Leia o artigo </h1>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>

          <div className="">
            <WorkTimeline />
          </div>
        </div>
      </div>
    </main>
  );
}
