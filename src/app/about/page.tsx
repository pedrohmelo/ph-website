import Image from "next/image";
import { TechsCarousel } from "@/src/components/carousel/techs-carousel";
import myselfGraduated from "@/public/images/meGraduated.jpg";

import { Phone, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <main className="pt-20 px-4 md:px-16">
      <h1 className="text-white font-semibold text-xl md:text-2xl pb-10">
        Sobre mim
      </h1>
      <div className="flex flex-col items-center md:flex-row md:gap-x-8">
        <Image
          src={myselfGraduated}
          alt="Foto de minha formatura"
          className="rounded-xl w-72 rotate-6 md:w-72"
        />
        <div className="text-white pt-14 md:pt-0">
          <p>
            Me chamo Pedro Melo, sou bacharel em Ciência da Computação pela
            Universidade Estadual de Maringá (UEM), formado em 2023.
          </p>
          <p className="pt-4">
            Sinto paixão por transformar ideias em realidade desde que me
            entendo por gente, quando criança isso acontecia desmontando meus
            brinquedos (desculpe, mãe), retirando todas as peças e tentando
            montar algo novo do zero &#8212; na maioria das vezes eu fracassava
            colossalmente, mas lembro de uma vez ter feito um barquinho usando
            um motor elétrico e palitos de sorvete, provavelmente minha maior
            criação no auge dos meus 10 anos de idade.
          </p>
          <p className="pt-4">
            O tempo passou e hoje transformo ideias em realidade através de
            algoritmos &#8212; e ultimamente com serrotes e pregos também, já
            que resolvi me aventurar no hobbie da marcenaria.
          </p>
          <p className="pt-4">
            Gosto de estar sempre a par das novas tecnologias no mercado,
            tentando sempre ser o melhor profissional possível. No momento meu
            foco está no desenvolvimento web e mobile.
          </p>
        </div>
      </div>
      <div className="pt-10 text-white">
        <h2 className="text-lg md:text-xl font-medium pb-4">
          Tecnologias que tenho prática:
        </h2>
        <TechsCarousel />

        <div className="flex flex-col gap-4 mt-10">
          <h1 className="text-lg font-medium">Minhas redes:</h1>
          <Link
            href="https://www.instagram.com/opedromel?igsh=MXprZm5pdnJzN3V3"
            className="flex gap-x-2 items-center"
          >
            <Instagram size={30} color="white" />
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/in/pedro-melo-8841731b1/"
            className="flex gap-x-2 items-center"
          >
            <Linkedin size={30} color="white" />
            Linkedin
          </Link>
          <Link
            href="https://github.com/pedrohmelo"
            className="flex gap-x-2 items-center"
          >
            <Github size={30} color="white" />
            GitHub
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
