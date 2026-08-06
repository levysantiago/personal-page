import boardingPassImage from "../../../../assets/project-imgs/boarding-pass.jpeg";
import gifflarImage from "../../../../assets/project-imgs/gifflar.jpeg";
import textMeImage from "../../../../assets/project-imgs/textme.jpeg";
import { IProjectV2 } from "./types";

const projects: IProjectV2[] = [
  {
    title: "Boarding-Pass",
    description:
      "Flight booking flow with seat selection and boarding-pass generation, built on a Nest.js API.",
    tags: ["Nest.js", "Prisma"],
    githubUrl: "https://github.com/Levysantiago/boarding-pass",
    imageSrc: boardingPassImage,
    imageAlt: "Boarding-Pass project screenshot",
  },
  {
    title: "TextMe",
    description:
      "Real-time web chat with a Nest.js and Prisma back-end over WebSockets, including OpenAI API integration.",
    tags: ["Nest.js", "Prisma", "OpenAI API"],
    githubUrl: "https://github.com/levysantiago/text-me",
    imageSrc: textMeImage,
    imageAlt: "TextMe project screenshot",
  },
  {
    title: "Gifflar",
    description:
      "MSc thesis framework for generating smart contracts on the fly from TypeScript.",
    tags: ["TypeScript", "Node.js"],
    githubUrl: "https://github.com/GifflarJS-Framework/core",
    imageSrc: gifflarImage,
    imageAlt: "Gifflar project screenshot",
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
