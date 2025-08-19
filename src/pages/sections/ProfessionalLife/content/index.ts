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
      title: "Full-Stack & Solidity QA na GravelCoin (voluntário)",
      imageSrc: briefcase_icon,
      imageAlt: "Briefcase icon",
      backgroundColor: colors.blueIconBlock,
      description: `Iniciei minha vida profissional trabalhando em
            uma empresa na área de Blockchain. Eu fui responsável por testar a qualidade
            de contratos inteligentes utilizando ferramentas como <highlight>Mocha.js</highlight> e <highlight>Chai.js</highlight>. Também
            trabalhei no desenvolvimento de uma aplicação para integrada à Blockchain utilizando
            <highlight>React.js</highlight>, <highlight>Express.js</highlight>, <highlight>MySQL</highlight>, dentre outros. Em Blockchain
            trabalhei com <highlight>Solidity</highlight>, <highlight>Truffle.js</highlight>, <highlight>Web3.js</highlight>, dentre outros.`,
    },
    {
      title: "Back-End Developer na Softrends",
      imageSrc: briefcase_icon,
      imageAlt: "Briefcase icon",
      backgroundColor: colors.blueIconBlock,
      description: `Durante o mestrado, trabalhei na Softrends, ainda na área de Blockchain. Nesta empresa eu fui responsável
            principalmente por toda a infraestrutura de Back-End da empresa e de contratos inteligentes. Como Back-End trabalhei
            com <highlight>Node.js</highlight>, <highlight>Express.js</highlight>, <highlight>Adonis.js</highlight>, 
            <highlight>Nest.js</highlight>, bancos de dados <highlight>SQL e NoSQL</highlight>, clouds, hospedagem, etc. 
            Além disso, fui responsável por liderar uma equipe pequena de devs Back-End,
            <highlight>foi a primeira oportunidade que tive de compartilhar o meu conhecimento, liderar e participar de 
            decisões de grande impacto na empresa</highlight>.`,
    },
    {
      title: "Freelancer & Digital Creator",
      imageSrc: play_icon,
      imageAlt: "Play icon",
      backgroundColor: colors.purpleIconBlock,
      description: `Após sair da Softrends, continuei trabalhando como freelancer
            <highlight>e a participar de forma mais ativa dentro da comunidade de devs</highlight>
            contribuindo com o desenvolvimento de novas aplicações, e também compartilhando conhecimento. Isso foi essencial
            para o aprimoramento minhas <highlight>Hard Skills</highlight> e <highlight>Soft Skills</highlight> e atualmente
            continuo me desenvolvendo e compartilhando meus aprendizados com a comunidade.`,
    },
    {
      title: "Blockchain Developer",
      // imageSrc: rocket_icon,
      // imageAlt: "Rocket icon",
      // backgroundColor: colors.greenIconBlock,
      imageSrc: briefcase_icon,
      imageAlt: "Briefcase icon",
      backgroundColor: colors.blueIconBlock,
      description: `Nesta empresa tive o cargo de 
            <highlight>Blockchain Developer</highlight>, mas também promovi diversas colaborações como dev Back-End. Ou seja, continuei trabalhando na criação de soluções com a tecnologia blockchain mas,
            ainda assim, colaborei na criação de APIs e aprimorei algumas APIs legadas aplicando técnicas de padrões de projeto,
            Domain Driven Design, e outras, o que otimizou o processo de manutenção e criação de novas funcionalidades.`,
    },
    {
      title: "Back-end Developer na Rocketseat",
      imageSrc: rocket_icon,
      imageAlt: "Rocket icon",
      backgroundColor: colors.greenIconBlock,
      // imageSrc: briefcase_icon,
      // imageAlt: "Briefcase icon",
      // backgroundColor: colors.blueIconBlock,
      description: `Atualmente, atuo como Back-end Developer na <link href="https://rocketseat.com.br">Rocketseat</link>, ajudando a impulsionar a carreira de milhares de desenvolvedores. 
      Contribuo para o desenvolvimento das plataformas de ensino e para a criação de soluções que aprimoram a experiência dos(as) alunos(as).`,
    },
  ],
};

const en = {
  title: "<highlight>Profissional</highlight> Life",
  sections: [
    {
      title: "Full-Stack & Solidity QA na GravelCoin (volunteer)",
      imageSrc: briefcase_icon,
      imageAlt: "Briefcase icon",
      backgroundColor: colors.blueIconBlock,
      description: `I started my professional life working at a company in the Blockchain area. I was responsible for testing the quality
        of smart contracts using tools as <highlight>Mocha.js</highlight> and <highlight>Chai.js</highlight>. I also worked in the 
        development of an application integrated to Blockchain using <highlight>React.js</highlight>, <highlight>Express.js</highlight>, <highlight>MySQL</highlight>, 
        and other technologies. As Blockchain dev I worked with <highlight>Solidity</highlight>, <highlight>Truffle.js</highlight>, <highlight>Web3.js</highlight>, and others.`,
    },
    {
      title: "Back-End Developer at Softrends",
      imageSrc: briefcase_icon,
      imageAlt: "Briefcase icon",
      backgroundColor: colors.blueIconBlock,
      description: `During my master's degree, I worked at Softrends, still in the Blockchain area. There I was responsible mainly 
        for the whole Back-End infrastructure of the company and smart contracts development. As a Back-End dev, I worked with <highlight>Node.js</highlight>,
        <highlight>Express.js</highlight>, <highlight>Adonis.js</highlight>, <highlight>Nest.js</highlight>, databases <highlight>SQL and NoSQL</highlight>, 
        clouds, hosting, etc. I was also responsible for leading a small Back-End team, 
        <highlight>it was the first opportunity I had to share my knowledge, lead and participate in decisions of 
        great impact on the company</highlight>.`,
    },
    {
      title: "Freelancer & Digital Creator",
      imageSrc: play_icon,
      imageAlt: "Play icon",
      backgroundColor: colors.purpleIconBlock,
      description: `After leaving Softrends, I continued working as a freelancer <highlight>and participating 
      more actively within the dev community</highlight> contributing to the development of new applications, and also 
      sharing knowledge. This was essential to improve my <highlight>Hard Skills</highlight> and 
      <highlight>Soft Skills</highlight> and currently I continue improving these skills and sharing my experience with the community.`,
    },
    {
      title: "Blockchain Developer",
      // imageSrc: rocket_icon,
      // imageAlt: "Rocket icon",
      // backgroundColor: colors.greenIconBlock,
      imageSrc: briefcase_icon,
      imageAlt: "Briefcase icon",
      backgroundColor: colors.blueIconBlock,
      description: `In this company was hired as a Blockchain developer, but I also provided many collaborations as a Back-End dev.
          That is, I continued working on creating solutions with blockchain technology but, even so, I collaborated in the creation 
          of APIs and improved some legacy APIs by applying design pattern techniques, Domain Driven Design, and others, which optimized 
          the process of maintenance and creation of new functionalities.`,
    },
    {
      title: "Back-end Developer na Rocketseat",
      imageSrc: rocket_icon,
      imageAlt: "Rocket icon",
      backgroundColor: colors.greenIconBlock,
      // imageSrc: briefcase_icon,
      // imageAlt: "Briefcase icon",
      // backgroundColor: colors.blueIconBlock,
      description: `I currently work as a Back-end Developer at <link href="https://rocketseat.com.br">Rocketseat</link>, helping to boost the careers of thousands of developers. 
      I contribute to the development of educational platforms and the creation of solutions that enhance the student experience.`,
    },
  ],
};

export const content = { pt, en };
