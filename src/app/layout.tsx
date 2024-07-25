import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";

const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Melo",
  description: "Website pessoal com fins educativos.",
  openGraph: {
    type: "website",
    title: "Pedro Melo",
    description: "Pedro Melo - Desenvolvedor Frontend",
    images: [
      {
        url: "https://raw.githubusercontent.com/pedrohmelo/images-repository/main/Designer.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${saira.className} bg-gradient-to-b from-[#0e1111] to-[#0e1111] `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
