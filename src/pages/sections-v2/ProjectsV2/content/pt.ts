import { IProjectV2 } from "./types";

const projects: IProjectV2[] = [
  {
    title: "Boarding-Pass",
    description:
      "Fluxo de compra de passagens com seleção de assentos e geração de boarding-pass, com API em Nest.js.",
    tags: ["Nest.js", "Prisma"],
    githubUrl: "https://github.com/Levysantiago/boarding-pass",
  },
  {
    title: "TextMe",
    description:
      "Chat web em tempo real com back end em Nest.js e Prisma via WebSockets.",
    tags: ["Nest.js", "Prisma"],
    githubUrl: "https://github.com/levysantiago/text-me",
  },
  {
    title: "Gifflar",
    description:
      "Framework do meu mestrado para gerar smart contracts em tempo de execução a partir de TypeScript.",
    tags: ["TypeScript", "Node.js"],
    githubUrl: "https://github.com/GifflarJS-Framework/core",
  },
];

export const pt = {
  heading: "Projetos",
  seeAll: "Ver todos os projetos →",
  codeLabel: "Código",
  liveLabel: "Live",
  imageLabel: "Captura de tela",
  projects,
};
