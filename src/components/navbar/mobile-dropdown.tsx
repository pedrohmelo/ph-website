"use client";

import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu color="white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Telas</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem>
          <Link href="/">Home</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>
          <Link href="/posts">Posts</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>
          <Link href="/about">Sobre mim</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>
          <Link href="/projects">Projetos</Link>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
