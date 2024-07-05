import {
  Github,
  Linkedin,
  Instagram,
  VenetianMask,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Caveat } from "next/font/google";

import Myself from "@/public/images/eudenovo.jpg";
import WorkTimeline from "../components/work-timeline";
import PostsCard from "../components/cards/posts-card";

const caveat = Caveat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="pt-6 lg:pt-20 h-screen mb-10">
      <div className="px-4 md:px-16 lg:px-24 2xl:px-36 pt-12 md:text-start">
        <div className="flex flex-col pt-6 gap-y-2">
          <div className="flex items-center gap-x-2 md:justify-between">
            <h1 className="text-[#C7BEBE] font-semibold text-2xl md:text-4xl lg:text-5xl">
              Desenvolvedor frontend
              <br /> e marceneiro amador.
            </h1>
            <Image
              src={Myself}
              alt="pedromelo"
              className="w-20 h-20 rounded-full lg:w-40 lg:h-40 object-cover"
            />
          </div>
          <h1 className="text-[#696969] md:pt-4">
            Olá, me chamo Pedro e sou um desenvolvedor frontend. Estarei
            escrevendo alguns artigos por aqui, com intuito de repassar
            conhecimento. Além disso, você também poderá encontrar alguns
            projetos pessoais por aqui.
          </h1>
        </div>

        <div className="flex pt-6 gap-x-4">
          <Link href="https://www.instagram.com/opedromel?igsh=MXprZm5pdnJzN3V3">
            <Instagram size={30} color="#696969" />
          </Link>
          <Link href="https://www.linkedin.com/in/pedro-melo-8841731b1/">
            <Linkedin size={30} color="#696969" />
          </Link>
          <Link href="https://github.com/pedrohmelo">
            <Github size={30} color="#696969" />
          </Link>
        </div>

        {/* TODO: refazer isso aqui de forma dinâmica em um único componente. Fazendo fetch de X posts */}
        <div className="pt-20 xl:pt-40 flex flex-col lg:flex-row gap-y-20 lg:items-start lg:justify-between">
          <div className="lg:w-3/4 xl:w-2/3">
            <PostsCard />
          </div>

          <div className="">
            <WorkTimeline />
          </div>
        </div>
      </div>
    </main>
  );
}
