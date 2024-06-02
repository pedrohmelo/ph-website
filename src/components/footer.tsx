import { Phone, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <main className="flex pt-20 pb-6 px-4 justify-between">
      <div className="flex flex-col">
        <h1 className="text-white">&copy; Pedro Melo - 2024</h1>
        <h1 className="text-white flex gap-x-2 items-center">
          <Phone size={16} /> (44) 9 8802-6367
        </h1>
      </div>
      <div className="flex gap-2">
        <h1>
          <Instagram size={30} color="white" />
        </h1>
        <h1>
          <Linkedin size={30} color="white" />
        </h1>
        <h1>
          <Github size={30} color="white" />
        </h1>
      </div>
    </main>
  );
};

export default Footer;
