import Image from "next/image";
import { Button } from "../components/ui/button";

import Myself from "@/public/images/eu.jpg";
import MeLeft from "@/public/images/eu-esquerda.png";
import MeRight from "@/public/images/eu-direita.png";

export default function Home() {
  return (
    <main className="h-screen px-4 pt-20">
      <div className="flex items-center justify-center bg-pink-100">
        <Image
          src={Myself}
          alt="Pedro Melo Picture"
          className="rounded-2xl h-40 w-40 object-cover"
        />
      </div>

      <div className="py-4 text-[#e5e5e5]">
        <h1 className="text-lg">
          Olá! Me chamo{" "}
          <span className="font-semibold text-xl text-red-200">Pedro Melo</span>
          , sou um
          <span className="font-semibold text-lg underline">
            {" "}
            desenvolvedor frontend.
          </span>
        </h1>
        <h1 className="pt-4">
          Esse website é um{" "}
          <span className="line-through font-semibold text-base">
            marketing escancarado{" "}
          </span>
          <span className="font-semibold">projeto pessoal</span> onde estarei
          compartilhando meus projetos pessoais e eventualmente escreverei
          alguns artigos educacionais para ajudar a comunidade.
        </h1>

        <h1 className="pt-4">
          Caso queira realizar um projeto, entre em contato comigo! Estou sempre
          interessado em tornar ideias realidade através da tecnologia.
        </h1>
      </div>

      <Button className="w-full">Entre em contato</Button>
    </main>
  );
}
