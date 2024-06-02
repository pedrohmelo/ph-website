import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

import Navbar from "../components/navbar/navbar";

const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Melo",
  description: "Descrição blablabla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${saira.className} bg-gradient-to-b from-[#0e1111] to-[#0e1111]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
