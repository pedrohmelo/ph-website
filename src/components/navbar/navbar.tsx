import MobileMenu from "@/src/components/navbar/mobile-dropdown";

const Navbar = () => {
  return (
    <main className="flex fixed z-50 items-center justify-between px-4 md:px-16 lg:px-24 2xl:px-36 py-4 w-full bg-[#0e1111]">
      <div className="text-neutral-200 text-2xl md:text-3xl font-medium">
        <span>&lt;/&gt;</span>
      </div>
      <div className="lg:hidden">
        <MobileMenu />
      </div>

      <div className="hidden lg:flex">
        <ul className="flex gap-x-4 font-medium text-xl text-neutral-200">
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
      </div>
    </main>
  );
};

export default Navbar;
