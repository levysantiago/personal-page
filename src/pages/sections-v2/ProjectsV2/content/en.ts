import { IProjectV2 } from "./types";

const projects: IProjectV2[] = [
  {
    title: "Boarding-Pass",
    description:
      "Flight booking flow with seat selection and boarding-pass generation, built on a Nest.js API.",
    tags: ["Nest.js", "Prisma"],
    githubUrl: "https://github.com/Levysantiago/boarding-pass",
  },
  {
    title: "TextMe",
    description:
      "Real-time web chat with a Nest.js and Prisma back end over WebSockets.",
    tags: ["Nest.js", "Prisma"],
    githubUrl: "https://github.com/levysantiago/text-me",
  },
  {
    title: "Gifflar",
    description:
      "MSc thesis framework for generating smart contracts on the fly from TypeScript.",
    tags: ["TypeScript", "Node.js"],
    githubUrl: "https://github.com/GifflarJS-Framework/core",
  },
];

export const en = {
  heading: "Projects",
  seeAll: "See all projects →",
  codeLabel: "Code",
  liveLabel: "Live",
  imageLabel: "Screenshot",
  projects,
};
