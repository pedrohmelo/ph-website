"use client";

import { useEffect, useState } from "react";
import { NavbarItem } from "./navbar-item";
import MobileMenu from "@/src/components/navbar/mobile-dropdown";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex fixed z-50 items-center justify-between px-4 md:px-16 lg:px-24 2xl:px-36 3xl:px-52 py-4 w-full transition-colors duration-300 ${
        isScrolled ? "bg-[#0e1111]/50 backdrop-blur-md" : "bg-[#0e1111]"
      }`}
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
        <NavbarItem path="/">Home</NavbarItem>
        <NavbarItem path="/posts">Posts</NavbarItem>
        <NavbarItem path="/about">Sobre mim</NavbarItem>
        <NavbarItem path="/projects">Projetos</NavbarItem>
      </div>
    </nav>
  );
};

export default Navbar;
