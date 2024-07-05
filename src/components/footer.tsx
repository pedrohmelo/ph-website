import Link from "next/link";
import { Phone, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <main className="flex pt-52 pb-6 px-4 md:px-16 lg:px-24 2xl:px-36 justify-between md:text-xl">
      <div className="flex flex-col">
        <h1 className="text-[#696969] text-center">
          &copy; Pedro Melo - 2024. Todos os direitos reservados.
        </h1>

        <div className="flex items-center justify-center pt-6 gap-x-4">
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

        <div className="flex pt-4 gap-x-2 items-center justify-center">
          <Link href="/">
            <h1 className="text-[#696969]">Home</h1>
          </Link>
          <h1 className="text-[#696969]">|</h1>
          <Link href="/about">
            <h1 className="text-[#696969]">Sobre mim</h1>
          </Link>
          <h1 className="text-[#696969]">|</h1>

          <Link href="/posts">
            <h1 className="text-[#696969]">Posts</h1>
          </Link>
          <h1 className="text-[#696969]">|</h1>

          <Link href="/projects">
            <h1 className="text-[#696969]">Projetos</h1>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Footer;
