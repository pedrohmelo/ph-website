import { HeaderItem } from "./navbar-item";
import MobileMenu from "@/src/components/navbar/mobile-dropdown";

const Navbar = () => {
  return (
    <nav
      className="flex fixed z-50 items-center justify-between px-4 md:px-16 lg:px-24 2xl:px-36 3xl:px-52 py-4 w-full bg-[#0e1111]"
      aria-label="Primary Navigation"
    >
      <div className="text-neutral-200 text-2xl md:text-3xl font-medium">
        <a href="/" aria-label="Home">
          <span>&lt;/&gt;</span>
        </a>
      </div>
      <div className="lg:hidden">
        <MobileMenu />
      </div>

      <div className="hidden lg:flex gap-x-4 font-medium text-xl 3xl:text-2xl text-neutral-200">
        {/* <ul className="flex ">
          <li>
            <a href="/" className="hover:text-gray-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/posts" className="hover:text-gray-400 transition-colors">
              Posts
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400 transition-colors">
              Sobre mim
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="hover:text-gray-400 transition-colors"
            >
              Projetos
            </a>
          </li>
        </ul> */}
        <HeaderItem path="/">Home</HeaderItem>
        <HeaderItem path="/posts">Posts</HeaderItem>
        <HeaderItem path="/about">Sobre mim</HeaderItem>
        <HeaderItem path="/projects">Projetos</HeaderItem>
      </div>
    </nav>
  );
};

export default Navbar;
