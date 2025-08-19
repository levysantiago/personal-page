import personal_page from "../../../../assets/project-imgs/personal-page.jpeg";
import gifflar_img from "../../../../assets/project-imgs/gifflar.jpeg";
import boarding_pass from "../../../../assets/project-imgs/boarding-pass.jpeg";
import buymeachocolate from "../../../../assets/project-imgs/buymeachocolate.jpeg";
import textme from "../../../../assets/project-imgs/textme.jpeg";

export const pt = {
  title: "Meu <highlight>Portfólio</highlight>",
  description:
    "Dentre os diversos projetos que trabalhei, estes são alguns dos projetos que posso compartilhar com vocês por aqui.",
  readMoreText: "Ver projeto",
  projects: [
    {
      title: "Personal page",
      description: `Este projeto diz respeito a esta página que você está acessando. 
    Ela foi desenvolvida com React.js, TypeScript, Styled Components e outras ferramentas.`,
      readMoreLink: "https://github.com/Levysantiago/personal-page",
      githubLink: "https://github.com/Levysantiago/personal-page",
      banner: personal_page,
      badges: ["typescript", "reactjs", "styled-components", "IPFS"],
    },
    {
      title: "Gifflar",
      description: `Este foi o projeto final do meu mestrado. É um framework que permite a criação de sistemas capazes de gerar contratos inteligentes 
    em tempo de execução.`,
      readMoreLink: "https://github.com/GifflarJS-Framework/core",
      githubLink: "https://github.com/GifflarJS-Framework/core",
      banner: gifflar_img,
      badges: ["typescript", "nodejs", "tsyringe", "web3", "solidity", "jest"],
    },
    {
      title: "Buy Me a Chocolate",
      description: `Baseado no projeto Buy Me a Coffee, o Buy Me a Chocolate é uma 
    DApp que permite apoiar outras pessoas doando 
    dinheiro usando o token CHOC. Permitindo trocar os CHOCs
    recebidos pelo dinheiro depositado no smart contract, que no caso é
    na criptomoeda BNB.`,
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
      description: `Este projeto é um chat de mensagens web feito com React, Websocket, SQLite, Prisma e outras tecnologias. Ele foi feito num design semelhante ao de um aplicativo 
    e busca ser bem simples de ser utilizado.`,
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
      title: "Boarding-Pass",
      description: `Este projeto simula a compra de passagens aéreas selecionando o voo e assentos gerando por fim o seu "boarding-pass".
      Neste projeto eu utilizei Nest.js no Back-End e Prisma ORM para integração com banco de dados.`,
      readMoreLink: "https://github.com/Levysantiago/boarding-pass",
      githubLink: "https://github.com/Levysantiago/boarding-pass",
      banner: boarding_pass,
      badges: ["typescript", "nodejs", "nestjs", "prisma", "reactjs", "axios"],
    },
    // {
    //   title: "BlockEGovMe",
    //   description: `Este foi um projeto de Iniciação Científica da Universidade Estadual de Santa Cruz (UESC)
    //   que consistiu no criação de contratos inteligentes para o Governo Eletrônico (E-Gov) utilizando Solidity.`,
    //   readMoreLink: "https://github.com/Levysantiago/smartcontracts-for-egov",
    //   githubLink: "https://github.com/Levysantiago/smartcontracts-for-egov",
    //   banner: blockegovme,
    //   badges: [
    //     "javascript",
    //     "reactjs",
    //     "nodejs",
    //     "expressjs",
    //     "solidity",
    //     "web3",
    //     "solc",
    //     "mysql",
    //     "ganache",
    //     "solc",
    //     "mocha",
    //     "metamask",
    //   ],
    // },
    // {
    //   title: "Music Player",
    //   description: `Trata-se de um player de música. Neste player adicionei as funcionalidades de
    // dar play, pause, pular para próxima música, voltar, selecionar
    // uma música, adiantar ou voltar o progresso da música pela barra de progresso.`,
    //   readMoreLink: "https://github.com/levysantiago/desafio-music-player",
    //   githubLink: "https://github.com/levysantiago/desafio-music-player",
    //   banner: music_player,
    //   badges: ["typescript", "reactjs", "styled-components"],
    // },
    // {
    //   title: "Habits",
    //   description: `Este projeto foi criado durante a NLW da Rocketseat.
    // É uma aplicação para controlar os hábitos diários, podendo checar e visualizar os
    // hábitos que de cada dia. Para esta aplicação foi criada uma versão
    // web com React.js e também um aplicativo com React Native.`,
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
    //   description: `Um microsserviço para notificação de mensagens via push utilizando Nest.js,
    // Prisma, SQLite. Este projeto foi criado durante o evento do Ignite Lab da Rocketseat.`,
    //   readMoreLink: "https://github.com/levysantiago/notifications-service",
    //   githubLink: "https://github.com/levysantiago/notifications-service",
    //   banner: notifications_service,
    //   badges: ["typescript", "nestjs", "prisma", "sqlite", "jest"],
    // },
  ],
};
