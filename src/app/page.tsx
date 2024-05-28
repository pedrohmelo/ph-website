import Image from "next/image";
import { Button } from "../components/ui/button";

import Myself from "@/public/images/eu.jpg";

export default function Home() {
  return (
    <main className="h-screen px-4 pt-20 bg-gradient-to-b from-gray-700 to-gray-300">
      <Image
        src={Myself}
        alt="Pedro Melo Picture"
        className="rounded-2xl w-full h-80 object-cover"
      />

      <div className="py-4">
        <h1 className="text-lg">
          Olá! Me chamo{" "}
          <span className="font-semibold text-xl">Pedro Melo</span>, sou um
          <span className="font-semibold text-lg underline">
            {" "}
            desenvolvedor frontend.
          </span>
        </h1>
        <h1 className="pt-4">
          Esse website é um projeto pessoal onde estarei compartilhando meus
          projetos pessoais e eventualmente escreverei alguns artigos
          educacionais para ajudar a comunidade.
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
