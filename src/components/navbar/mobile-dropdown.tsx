"use client";
import Image from "next/image";
import Woof from "@/public/images/woof.jpg";
import { Home, StickyNote, UserRound, FileTerminal } from "lucide-react";

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
          <Link href="/" className="flex items-center gap-x-2">
            <Home size={18} />
            Home
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>
          <Link href="/posts" className="flex items-center gap-x-2">
            <StickyNote size={18} />
            Posts
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>
          <Link href="/about" className="flex items-center gap-x-2">
            <UserRound size={18} />
            Sobre mim
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>
          <Link href="/projects" className="flex items-center gap-x-2">
            <FileTerminal size={18} />
            Projetos
          </Link>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
