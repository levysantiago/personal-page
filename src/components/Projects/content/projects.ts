import personal_page from "../../../assets/project-imgs/personal-page.jpeg";
import gifflar_img from "../../../assets/project-imgs/gifflar.jpeg";
import boarding_pass from "../../../assets/project-imgs/boarding-pass.jpeg";
import blockegovme from "../../../assets/project-imgs/blockegovme.jpeg";
import music_player from "../../../assets/project-imgs/music-player.jpeg";
import textme from "../../../assets/project-imgs/textme.jpeg";
import habits from "../../../assets/project-imgs/habits.jpeg";
import notifications_service from "../../../assets/project-imgs/notifications-service.jpeg";

export const projects = [
  {
    title: "Personal page",
    description: `Este projeto diz respeito a esta página que você está acessando. 
    Ela foi desenvolvida com React.js, TypeScript, Styled Components e outras ferramentas. 
    Também estou utilizando IPFS (Sistema de Arquivos Interplanetário) para 
    hospedagem deste site, legal não é mesmo?`,
    readMoreLink: "https://github.com/Levysantiago/personal-page",
    githubLink: "https://github.com/Levysantiago/personal-page",
    banner: personal_page,
    badges: ["typescript", "reactjs", "styled-components", "IPFS"],
  },
  {
    title: "Gifflar",
    description: `Um framework que permite a criação de sistemas capazes de gerar contratos inteligentes 
    em tempo de execução. É um projeto ainda em desenvolvimento e passando por testes, correções e avaliações.`,
    readMoreLink: "https://github.com/GifflarJS-Framework/core",
    githubLink: "https://github.com/GifflarJS-Framework/core",
    banner: gifflar_img,
    badges: ["typescript", "nodejs", "tsyringe", "web3", "solidity", "jest"],
  },
  {
    title: "Boarding-Pass",
    description: `Este projeto é uma extensão do desafio #boraCodar lançado pela 
    Rocketseat. Neste projeto eu adicionei mais algumas páginas para selecionar voo, 
    escolher assento, inserir dados do passageiro e mostrar o cartão de embarque o 
    qual foi criado para o desafio da Rocketseat.`,
    readMoreLink: "https://github.com/Levysantiago/boarding-pass",
    githubLink: "https://github.com/Levysantiago/boarding-pass",
    banner: boarding_pass,
    badges: ["typescript", "nodejs", "nestjs", "prisma", "reactjs", "axios"],
  },
  {
    title: "TextMe",
    description: `Este projeto é um chat de mensagens web. É um projeto que 
    ainda está sendo aperfeiçoado e foi criado durante meu estudo em utilizar
    websocket com NestJS. Ele foi feito num design semelhante ao de um aplicativo 
    e busca ser bem simples de ser utilizado.`,
    readMoreLink: "https://github.com/levysantiago/text-me",
    githubLink: "https://github.com/levysantiago/text-me",
    banner: textme,
    badges: ["typescript", "reactjs", "nestjs","prisma", "sqlite", "zod", "emotionjs"],
  },
  {
    title: "Music Player",
    description: `Este projeto foi feito durante o desafio #boraCodar da Rocketseat.
    Trata-se de um player de música. Neste player adicionei as funcionalidades de 
    dar play, pause, pular para próxima música, voltar para a anterior, selecionar 
    uma música, adiantar ou voltar o progresso da música pela barra de progresso.`,
    readMoreLink: "https://github.com/levysantiago/desafio-music-player",
    githubLink: "https://github.com/levysantiago/desafio-music-player",
    banner: music_player,
    badges: ["typescript", "reactjs", "styled-components"],
  },
  {
    title: "Habits",
    description: `Este projeto foi criado durante a Next Level Week (NLW) Setup da Rocketseat.
    Trata-se de uma aplicação para controlar os hábitos diários, podendo checar e visualizar os 
    hábitos que de cada dia. Para esta aplicação foi criada uma versão
    web com React.js e também um aplicativo com React Native.`,
    readMoreLink: "https://github.com/Levysantiago/habits-client-web",
    githubLink: "https://github.com/Levysantiago/habits-client-web",
    banner: habits,
    badges: ["typescript", "reactjs", "react-native", "tailwindcss", "fastify", "prisma", "sqlite"],
  },
  {
    title: "Notifications Service",
    description: `Um microsserviço para notificação de mensagens via push utilizando Nest.js, 
    Prisma, SQlite. Este projeto foi criado durante o evento do Ignite Lab da Rocketseat.`,
    readMoreLink: "https://github.com/levysantiago/notifications-service",
    githubLink: "https://github.com/levysantiago/notifications-service",
    banner: notifications_service,
    badges: ["typescript", "nestjs", "prisma", "sqlite", "jest"],
  },
  {
    title: "BlockEGovMe",
    description: `Este foi um projeto de Iniciação Científica da Universidade Estadual de Santa Cruz (UESC) 
    que visa a implementação de contratos inteligentes para o Governo Eletrônico (E-Gov).`,
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
];
