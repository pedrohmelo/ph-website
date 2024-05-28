const Navbar = () => {
  return (
    <main className="flex fixed items-center justify-between px-4 py-4 w-full ">
      <h1>Logo</h1>
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
