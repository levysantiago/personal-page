import personal_page from "../../../../assets/project-imgs/personal-page.jpeg";
import gifflar_img from "../../../../assets/project-imgs/gifflar.jpeg";
import boarding_pass from "../../../../assets/project-imgs/boarding-pass.jpeg";
import buymeachocolate from "../../../../assets/project-imgs/buymeachocolate.jpeg";
import textme from "../../../../assets/project-imgs/textme.jpeg";
import blockegovme from "../../../../assets/project-imgs/blockegovme.jpeg";

export const en = {
  title: "My <highlight>Portfolio</highlight>",
  description:
    "Among the different projects I worked on, these are some of the projects I can share with you here.",
  readMoreText: "Read more",
  projects: [
    {
      title: "Personal page",
      description: `This project concerns this page you are accessing. It was developed with React.js, 
      TypeScript, Styled Components and other tools. I also use IPFS (Interplanetary File System) to host this site.`,
      readMoreLink: "https://github.com/Levysantiago/personal-page",
      githubLink: "https://github.com/Levysantiago/personal-page",
      banner: personal_page,
      badges: ["typescript", "reactjs", "styled-components", "IPFS"],
    },
    {
      title: "Gifflar",
      description: `This was my masters final project. It's a framework that allows the creation of systems capable of generating smart contracts on the fly.`,
      readMoreLink: "https://github.com/GifflarJS-Framework/core",
      githubLink: "https://github.com/GifflarJS-Framework/core",
      banner: gifflar_img,
      badges: ["typescript", "nodejs", "tsyringe", "web3", "solidity", "jest"],
    },
    {
      title: "Buy Me a Chocolate",
      description: `Based on the Buy Me a Coffee project, Buy Me a Chocolate is a DApp that allows you to support others by donating money using the CHOC token. 
      Allowing you to exchange the CHOCs received for money deposited in the smart contract, which in this case is in the BNB cryptocurrency.`,
      readMoreLink: "https://github.com/levysantiago/buy-me-a-chocolate",
      githubLink: "https://github.com/levysantiago/buy-me-a-chocolate",
      banner: buymeachocolate,
      badges: [
        "typescript",
        "reactjs",
        "blockchain",
        "web3js",
        "ethersjs",
        "bsc",
        "metamask",
        "IPFS",
        "fleek",
        "styled-components",
      ],
    },
    {
      title: "TextMe",
      description: `This project is a web messaging chat built with React, Websocket, SQLite, Prisma and other technologies. 
      It was made with a design similar to an app and seeks to be very simple to use.`,
      readMoreLink: "https://github.com/levysantiago/text-me",
      githubLink: "https://github.com/levysantiago/text-me",
      banner: textme,
      badges: [
        "typescript",
        "reactjs",
        "nestjs",
        "prisma",
        "sqlite",
        "zod",
        "emotionjs",
      ],
    },
    {
      title: "BlockEGovMe",
      description: `This was an Academic project at the State University of Santa Cruz (UESC) 
      that consisted of creating smart contracts for Electronic Government (E-Gov) using Solidity.`,
      readMoreLink: "https://github.com/Levysantiago/smartcontracts-for-egov",
      githubLink: "https://github.com/Levysantiago/smartcontracts-for-egov",
      banner: blockegovme,
      badges: [
        "javascript",
        "reactjs",
        "nodejs",
        "expressjs",
        "solidity",
        "web3",
        "solc",
        "mysql",
        "ganache",
        "solc",
        "mocha",
        "metamask",
      ],
    },
    {
      title: "Boarding-Pass",
      description: `This project simulates the purchase of airline tickets by selecting the 
      flight and seats, then generating your "boarding-pass". In this project I used 
      Nest.js in the backend and Prisma ORM for database integration.`,
      readMoreLink: "https://github.com/Levysantiago/boarding-pass",
      githubLink: "https://github.com/Levysantiago/boarding-pass",
      banner: boarding_pass,
      badges: ["typescript", "nodejs", "nestjs", "prisma", "reactjs", "axios"],
    },
    // {
    //   title: "Music Player",
    //   description: `It is a music player. In this player I added the features to play, pause,
    //   skip to the next song, go back, select a song, advance or delay the song's progress using the progress bar.`,
    //   readMoreLink: "https://github.com/levysantiago/desafio-music-player",
    //   githubLink: "https://github.com/levysantiago/desafio-music-player",
    //   banner: music_player,
    //   badges: ["typescript", "reactjs", "styled-components"],
    // },
    // {
    //   title: "Habits",
    //   description: `This project was created during Rocketseat's NLW. It is an app to control daily habits,
    //   being able to check and visualize your habits each day. For this app, a web version was created with
    //   React.js and also an application with React Native.`,
    //   readMoreLink: "https://github.com/Levysantiago/habits-client-web",
    //   githubLink: "https://github.com/Levysantiago/habits-client-web",
    //   banner: habits,
    //   badges: [
    //     "typescript",
    //     "reactjs",
    //     "react-native",
    //     "tailwindcss",
    //     "fastify",
    //     "prisma",
    //     "sqlite",
    //   ],
    // },
    // {
    //   title: "Notifications Service",
    //   description: `A microservice for push message notification using Nest.js, Prisma, SQLite. This project was created during Rocketseat's Ignite Lab event.`,
    //   readMoreLink: "https://github.com/levysantiago/notifications-service",
    //   githubLink: "https://github.com/levysantiago/notifications-service",
    //   banner: notifications_service,
    //   badges: ["typescript", "nestjs", "prisma", "sqlite", "jest"],
    // },
  ],
};
