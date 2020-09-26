import React from "react";

const lang = {
  /**
   * HOME PAGE
   */
  about: {
    title: "Sobre",
    description: (
      <article>
        <p>
          Eu sou Levy. Sou originariamente brasileiro. Considero-me uma pessoa
          calma, amigável, curiosa e dedicada. Gosto de viajar, de aprender
          coisas novas e de conhecer novas pessoas.
        </p>
        <br />
        <p>
          Hoje sou bacharelado em Ciência da Computação na UESC -{" "}
          <a
            href="http://www.uesc.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Universidade Estadual de Santa Cruz
          </a>
          . Faço parte do grupo LIF - Laboratório de Internet do Futuro, um
          grupo iniciado na UESC que envolve tanto estudantes como professores.
          Muitos dos meus projetos e publicações foram desenvolvidos juntamente
          com este grupo. Atualmente estou trabalhando em um projeto que envolve
          criação de contratos inteligentes utilizando a rede Ethereum.
        </p>
        <br />
        <p>
          Tenho experiência em Programação Web, Internet das Coisas, Ontologias,
          Blockchain e outras áreas e tecnologias.
        </p>
        <br />
      </article>
    ),
  },
  languages: {
    title: "Linguagens",
    description: (
      <article>
        <p style={{ color: "white" }}>
          Os gráficos abaixo demonstram as linguagens de programação as quais
          adquiri experiência até hoje. As porcentagens representam o quanto
          tenho de experiência e conhecimento em cada uma das linguagens. É uma
          forma controversa, uma vez que conhecimento não se quantifica, porém é
          direta e compreensível.
        </p>
      </article>
    ),
  },
  articles: {
    title: "Artigos",
    description: (
      <article>
        <p style={{ color: "white" }}></p>
      </article>
    ),
  },
  projects: {
    title: "Projetos",
    description: (
      <article>
        <p style={{ color: "white" }}></p>
      </article>
    ),
  },
  articlespage: {
    title: "Artigos",
    description:
      "Esta página mostra os artigos publicados que escrevi junto com outros autores. A maioria desses autores faz parte do grupo LIF (Laboratório de Internet do Futuro) e GAUDI (Grupo de Algoritmos e Computação Distribuída).",
  },
  projectspage: {
    title: "Projetos",
    description:
      "Nesta página são apresentados alguns dos projetos que desenvolvi para faculdade, bolsas e para necessidades pessoais. A maioria deles está no GitHub. Cada projeto contém o link para a página que o descreve.",
  },
  blogpage: {
    title: "Life of Levy's",
    description: "",
  },
  hellowtipspage: {
    title: "Hellow Tips",
    description:
      'Hellow Tips é uma página do Instagram que criei para publicar dicas para qualquer informação relacionada a programação, tecnologia e outros conceitos. O nome "Tips" vem da do inglês "Dicas", sendo autoexplicativo e "Hellow" vem da frase usada no primeiro programa de cada programador: "Hello World!".',
    description2:
      "Depois que entrei no curso de Ciência da Computação, percebi que muitas pessoas desistiam imediatamente ao entrar no curso, pois acreditavam que iriam tratar de assuntos como manutenção de computadores ou uso de Excel, Word e outras ferramentas, e não sabiam o que programação realmente era. Em 2017, mais especificamente no meu 4º semestre do curso, quando já tinha um conhecimento razoável das matérias, resolvi criar Hellow Tips para publicar dicas de programação, assim, pessoas que querem ser desta área entendam a ideia de programação e outras tecnologias e conceitos. Também quem está estudando programação em um curso e que já são programadores, podem também aprimorar seus conhecimentos.",
  },
  footer: {
    title: "Sobre",
    contact: "Contato",
    description:
      "Eu sou Levy. Hoje sou formado em Ciência da Computação pela UESC. Esta é a minha página pessoal onde apresento artigos, projetos e outros trabalhos.",
  },
  menu: {
    home: "Home",
    articles: "Artigos",
    projects: "Projetos",
    hellowtips: "Hellow Tips",
    blog: "Blog",
  },

  /**
   * CONSTANTS
   */
  constants: {
    place: "Local",
    year: "Ano",
    in: "Em",
    read: "Ler",
    moreArticles: "Veja mais publicações aqui",
    moreProjects: "Veja mais projetos aqui",
  },

  messages: {
    gettingInfo: "Obtendo informações",
    leaveAComment: "Deixe um comentário aqui",
  },
};

export default lang;
