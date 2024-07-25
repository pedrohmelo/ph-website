"use client";

import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { usePathname } from "next/navigation";

interface NavbarItem {
  children: React.ReactNode;
  path: string;
}

export const NavbarItem = ({ children, path }: NavbarItem) => {
  const pathname = usePathname();

  const getLinkClassname = (page: string) => {
    return pathname === page
      ? "font-medium after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#D25F5F] after:absolute after:-bottom-1 after:left-0"
      : "font-normal";
  };

  return (
    <Link
      href={path}
      className={cn(
        getLinkClassname(path),
        "relative flex items-center justify-center gap-x-1 hover:text-gray-400"
      )}
    >
      {children}
    </Link>
  );
};
