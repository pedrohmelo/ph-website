import { Phone, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <main className="flex pt-20 pb-6 px-4 md:px-16 justify-between md:text-xl">
      <div className="flex flex-col">
        <h1 className="text-white ">&copy; Pedro Melo - 2024</h1>
        <h1 className="text-white flex gap-x-2 items-center">
          <Phone size={16} /> (44) 9 8802-6367
        </h1>
      </div>
      <div className="flex gap-2 md:gap-x-4">
        <Link href="https://www.instagram.com/opedromel?igsh=MXprZm5pdnJzN3V3">
          <Instagram size={30} color="white" />
        </Link>
        <Link href="https://www.linkedin.com/in/pedro-melo-8841731b1/">
          <Linkedin size={30} color="white" />
        </Link>
        <Link href="https://github.com/pedrohmelo">
          <Github size={30} color="white" />
        </Link>
      </div>
    </main>
  );
};

export default Footer;
