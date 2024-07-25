"use client";

import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { usePathname } from "next/navigation";

interface HeaderItemProps {
  children: React.ReactNode;
  path: string;
}

export const HeaderItem = ({ children, path }: HeaderItemProps) => {
  const pathname = usePathname();

  const getLinkClassname = (page: string) => {
    return pathname === page ? "font-semibold" : "font-normal";
  };

  return (
    <Link
      href={path}
      className={cn(
        getLinkClassname(path),
        "flex items-center justify-center gap-x-1 hover:underline"
      )}
    >
      {children}
    </Link>
  );
};
