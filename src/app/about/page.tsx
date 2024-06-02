import Image from "next/image";

import { TechsCarousel } from "@/src/components/carousel/techs-carousel";
import myselfGraduated from "@/public/images/meGraduated.jpg";
import PLSQL from "@/public/svgs/icons8-oracle-pl-sql.svg";

const About = () => {
  return (
    <main className="h-screen pt-20 px-4">
      <h1 className="text-white font-semibold text-xl pb-6">Sobre mim</h1>
      <Image
        src={myselfGraduated}
        alt="myself graduating"
        className="rounded-xl"
      />

      <div className="text-white pt-6">
        Me chamo Pedro Melo, possuo bacharelado em Ciência da Computação pela
        Universidade Estadual de Maringá (UEM), obtido em 2023. <br /> <br /> Ao
        longo do tempo trabalhei com as seguintes tecnologias:
        <div className="flex items-center">
          <Image src={PLSQL} alt="PLSQL" />
          PLSQL
        </div>
        <TechsCarousel />
      </div>
    </main>
  );
};

export default About;
