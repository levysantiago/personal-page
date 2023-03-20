import gifflar_img from "../../../assets/project-imgs/gifflar.jpg";

export const projects = [
  {
    title: "Personal page",
    description: `Este projeto diz respeito a esta página que você está acessando. 
    Ela foi desenvolvida com React.js, TypeScript, Styled Components e outras ferramentas. 
    Também estou utilizando IPFS (Sistema de Arquivos Interplanetário) para 
    hospedagem deste site, legal não é mesmo?`,
    readMoreLink: "https://github.com/Levysantiago/personal-page",
    githubLink: "https://github.com/Levysantiago/personal-page",
    banner: gifflar_img,
    badges: ["typescript", "reactjs", "styled-components", "IPFS"],
  },
  {
    title: "Gifflar",
    description: `Um framework que permite a criação de sistemas capazes de gerar contratos inteligentes 
    em tempo de execução. É um projeto ainda em desenvolvimento e passando por testes, correções e avaliações.`,
    readMoreLink: "https://github.com/GifflarJS-Framework/core",
    githubLink: "https://github.com/GifflarJS-Framework/core",
    banner: gifflar_img,
    badges: ["typescript", "nodejs", "web3", "tsyringe", "solc", "jest"],
  },
  {
    title: "BlockEGovMe",
    description: `Este foi um projeto de Iniciação Científica da Universidade Estadual de Santa Cruz (UESC) 
    que visa a implementação de contratos inteligentes para o Governo Eletrônico (E-Gov).`,
    readMoreLink: "https://github.com/Levysantiago/smartcontracts-for-egov",
    githubLink: "https://github.com/Levysantiago/smartcontracts-for-egov",
    banner: gifflar_img,
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
    title: "Ethereum DApp Model",
    description: `Neste repositório eu ensino de forma básica como iniciar com o
    desenvolvimento de contratos inteligentes criando também uma DApp para integrar
    com estes contratos utilizando React.js.`,
    readMoreLink: "https://github.com/Levysantiago/ethereum-dapp-react-model",
    githubLink: "https://github.com/Levysantiago/ethereum-dapp-react-model",
    banner: gifflar_img,
    badges: [
      "javascript",
      "reactjs",
      "solidity",
      "metamask",
      "ganache",
      "remix-ide",
      "solc",
      "mocha",
      "infura",
    ],
  },
];
