import { Phone, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <main className="flex pt-20 pb-6 px-4 md:px-16 lg:px-24 justify-between md:text-xl">
      <div className="flex flex-col">
        <h1 className="text-neutral-200 ">&copy; Pedro Melo - 2024</h1>
        <h1 className="text-neutral-200 flex gap-x-2 items-center">
          <Phone size={16} /> (44) 9 8802-6367
        </h1>
      </div>
    </main>
  );
};

export default Footer;
