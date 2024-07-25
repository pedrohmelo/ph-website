import TSicon from "@/public/svgs/typescriptDark.svg";
import ReactIcon from "@/public/svgs/icons8-react.svg";

export const postsData = [
  {
    id: 1,
    href: "/posts/masks",
    date: "20 de Junho, 2024",
    title: "Implementação Manual de Máscaras com Typescript e React",
    description:
      "Implementando máscaras para inputs sem utilizar bibliotecas externas",
    readMore: "Leia o artigo",
    icons: [
      {
        src: TSicon,
        alt: "TS icon",
        className: "w-8",
      },
      {
        src: ReactIcon,
        alt: "React icon",
        className: "w-20",
      },
    ],
    colors: {
      main: "#C7BEBE",
      secondary: "#696969",
      highlight: "#D25F5F",
    },
  },
  // Adicione mais objetos de post conforme necessário
];
