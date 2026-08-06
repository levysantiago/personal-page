import boardingPassImage from "../../../../assets/project-imgs/boarding-pass.jpeg";
import gifflarImage from "../../../../assets/project-imgs/gifflar.jpeg";
import textMeImage from "../../../../assets/project-imgs/textme.jpeg";
import { IProjectV2 } from "./types";

const projects: IProjectV2[] = [
  {
    title: "TextMe",
    description:
      "Chat web em tempo real com back-end em Nest.js e Prisma via WebSockets, incluindo integração com a OpenAI API.",
    tags: ["Nest.js", "Prisma", "OpenAI API"],
    githubUrl: "https://github.com/levysantiago/text-me",
    imageSrc: textMeImage,
    imageAlt: "Captura de tela do projeto TextMe",
  },
  {
    title: "Boarding-Pass",
    description:
      "Fluxo de compra de passagens com seleção de assentos e geração de boarding-pass, com API em Nest.js.",
    tags: ["Nest.js", "Prisma"],
    githubUrl: "https://github.com/Levysantiago/boarding-pass",
    imageSrc: boardingPassImage,
    imageAlt: "Captura de tela do projeto Boarding-Pass",
  },
  {
    title: "Gifflar",
    description:
      "Framework do meu mestrado para gerar smart contracts em tempo de execução a partir de TypeScript.",
    tags: ["TypeScript", "Node.js"],
    githubUrl: "https://github.com/GifflarJS-Framework/core",
    imageSrc: gifflarImage,
    imageAlt: "Captura de tela do projeto Gifflar",
  },
];

export const pt = {
  heading: "Projetos pessoais",
  seeAll: "Ver todos os projetos →",
  codeLabel: "Código",
  liveLabel: "Live",
  imageLabel: "Captura de tela",
  projects,
};
