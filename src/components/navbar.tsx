import Image from "next/image";
import WolfLogo from "@/public/images/woof.jpg";

const Navbar = () => {
  return (
    <main className="flex fixed items-center justify-between px-4 py-4 w-full ">
      <Image src={WolfLogo} alt="logo" className="w-10" />
      <ul className="flex gap-x-2 font-semibold">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/posts">Posts</a>
        </li>
        <li>
          <a href="/about">Sobre mim</a>
        </li>
        <li>
          <a href="/projects">Projetos</a>
        </li>
      </ul>
    </main>
  );
};

export default Navbar;
