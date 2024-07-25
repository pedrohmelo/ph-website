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
      <div className="px-4 md:px-16 lg:px-24 2xl:px-36 3xl:px-52 pt-12 md:text-start">
        <div className="flex flex-col pt-2 md:flex-row-reverse gap-y-6">
          <div className="w-full flex items-start justify-end">
            <Image
              src={Myself}
              alt="pedromelo"
              className="w-20 h-20 rounded-full md:w-40 md:h-40 3xl:w-60 3xl:h-60 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#C7BEBE] font-semibold text-2xl md:text-4xl lg:text-5xl 3xl:text-6xl">
              Desenvolvedor frontend e marceneiro amador.
            </h1>
            <h1 className="text-[#696969] md:pt-4 xl:text-2xl">
              Olá, me chamo Pedro e sou um desenvolvedor frontend. Estarei
              escrevendo alguns artigos por aqui, com intuito de repassar
              conhecimento. Além disso, você também poderá encontrar alguns
              projetos pessoais por aqui.
            </h1>
          </div>
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
