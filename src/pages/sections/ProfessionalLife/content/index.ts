import briefcase_icon from "../../../../assets/briefcase.svg";
import rocket_icon from "../../../../assets/rocket.svg";
import play_icon from "../../../../assets/play.svg";

const colors = {
  greenIconBlock: "rgba(49, 246, 69, 0.08);",
  purpleIconBlock: "rgba(154, 74, 255, 0.08);",
  blueIconBlock: "rgba(74, 125, 255, 0.08);",
};

const pt = {
  title: "Vida <highlight>Profissional</highlight>",
  sections: [
    {
      title: "Boarding",
      imageSrc: briefcase_icon,
      imageAlt: "Briefcase icon",
      backgroundColor: colors.blueIconBlock,
      description: `Iniciei minha vida profissional trabalhando voluntariamente em
            uma empresa na área de Blockchain na criação/testes de SmCs (Smart Contracts), também
            na criação de DApp para integrar com estes SmCs utilizando <highlight>React.js</highlight> 
            para o front-end e <highlight>Web3.js</highlight>, <highlight>Metamask</highlight>,
            <highlight>Truffle.js</highlight>, e outras ferramentas para criação e testes de SmCs. `,
    },
    {
      title: "Boosting",
      imageSrc: briefcase_icon,
      imageAlt: "Briefcase icon",
      backgroundColor: colors.blueIconBlock,
      description: `Durante o mestrado, trabalhei em outra empresa, ainda na área de Blockchain, onde tive
            a oportunidade de desenvolver mais projetos envolvendo 
            <highlight>tokens, NFTs, DEXs, DApps</highlight>, etc. Também adquiri maior conhecimento em 
            backend (<highlight>Node.js</highlight>) e frontend (<highlight>React.js</highlight>), banco de dados (<highlight>SQL e NoSQL</highlight>),
            clouds, hospedagem, etc. Além disso, fui responsável por liderar uma equipe,
            <highlight>foi a primeira oportunidade que tive de compartilhar o meu conhecimento, liderar e participar de 
            decisões de grande impacto na empresa</highlight>.`,
    },
    {
      title: "Freelancer & Digital Creator",
      imageSrc: play_icon,
      imageAlt: "Play icon",
      backgroundColor: colors.purpleIconBlock,
      description: `Após sair da última empresa, continuei trabalhando como freelancer
            <highlight>e a participar de forma mais ativa dentro da comunidade de devs</highlight>
            contribuindo com o desenvolvimento de novas aplicações, e também compartilhando conhecimento. Isso foi essencial
            para aprimorar minhas <highlight>Hard Skills</highlight> e <highlight>Soft Skills</highlight>, o que
            fez surgir a próxima oportunidade e cargo atual.`,
    },
    {
      title: "Blockchain Developer na BWS (cargo atual)",
      imageSrc: rocket_icon,
      imageAlt: "Rocket icon",
      backgroundColor: colors.greenIconBlock,
      description: `Em outubro de 2023 comecei a trabalhar na <link href="https://blockchainwebservices.com.br/">BWS</Link> como 
            <highlight>Blockchain Developer</highlight> na criação de soluções com a tecnologia blockchain,
            a tecnologia de foco na minha carreira. Nesta empresa eu sou responsável por desenvolver APIs, aplicações e infraestruturas blockchain,
            pesquisar e desenvolver novas soluções em blockchain. Sinta-se à vontade para me seguir
            e entrar em contato no Linkedin, GitHub, Instagram, etc.`,
    },
  ],
};

const en = {
  title: "<highlight>Profissional</highlight> Life",
  sections: [
    {
      title: "Boarding",
      imageSrc: briefcase_icon,
      imageAlt: "Briefcase icon",
      backgroundColor: colors.blueIconBlock,
      description: `I started my professional life working voluntarily at a company in the Blockchain area, 
        creating/testing SmCs (Smart Contracts), also creating a DApp to integrate with these SmCs using <highlight>React.js</highlight> 
        para o front-end e <highlight>Web3.js</highlight>, <highlight>Metamask</highlight>, <highlight>Truffle.js</highlight>, and 
        other tools for creating and testing SmCs.`,
    },
    {
      title: "Boosting",
      imageSrc: briefcase_icon,
      imageAlt: "Briefcase icon",
      backgroundColor: colors.blueIconBlock,
      description: `During my master's degree, I worked at another company, still in the Blockchain area, where 
        I had the opportunity to develop more projects involving <highlight>tokens, NFTs, DEXs, DApps</highlight>, etc. 
        I also acquired greater knowledge in backend (<highlight>Node.js</highlight>) and frontend (<highlight>React.js</highlight>), database 
        (<highlight>SQL and NoSQL</highlight>), clouds , hosting, etc. Furthermore, I was responsible for leading a team, 
        <highlight>it was the first opportunity I had to share my knowledge, lead and participate in decisions of 
        great impact on the company</highlight>.`,
    },
    {
      title: "Freelancer & Digital Creator",
      imageSrc: play_icon,
      imageAlt: "Play icon",
      backgroundColor: colors.purpleIconBlock,
      description: `After leaving the last company, I continued working as a freelancer <highlight>and participating 
      more actively within the dev community</highlight> contributing to the development of new applications, and also 
      sharing knowledge. This was essential to improve my <highlight>Hard Skills</highlight> and 
      <highlight>Soft Skills</highlight>, which led to the next opportunity and current position.`,
    },
    {
      title: "Blockchain Developer na BWS (cargo atual)",
      imageSrc: rocket_icon,
      imageAlt: "Rocket icon",
      backgroundColor: colors.greenIconBlock,
      description: `In October 2023 I started working at <link href="https://blockchainwebservices.com.br/">BWS</Link> 
      as <highlight>Blockchain Developer</highlight> creating solutions with blockchain technology, the technology of 
      focus in my career. In this company I am responsible for developing APIs, applications and blockchain infrastructures, 
      researching and developing new blockchain solutions. Feel free to follow and contact me on Linkedin, GitHub, Instagram, etc.`,
    },
  ],
};

export const content = { pt, en };
