import { Link } from "components/styles";
import React from "react";
import {
  Container,
  Description,
  HighlightedDescription,
  HtmlTagImg,
  RelativeDiv,
  Title,
  TitleContinuation,
} from "./styles";

const About: React.FC = () => {
  return (
    <Container>
      <RelativeDiv>
        <HtmlTagImg />
      </RelativeDiv>

      <Title>
        Um pouco <TitleContinuation>Sobre Levy</TitleContinuation>
      </Title>

      <Description>
        Seja bem vindo(a) ao meu mundo! Prazer em te conhecer, me chamo Levy,
        sou de originalidade brasileira, sou fascinado pela área da tecnologia,
        principalmente pelo desenvolvimento de sistemas. Também gosto muito de
        aprender novos conteúdos e utilizar meu conhecimento para contribuir com
        o avanço da tecnologia no mundo.
      </Description>

      <Description>
        Sou bacharelado em Ciência da Computação na{" "}
        <Link href="http://www.uesc.br">
          UESC - Universidade Estadual de Santa Cruz
        </Link>
        . Fiz parte do grupo LIF - Laboratório de Internet do Futuro, um grupo
        iniciado na UESC que envolve tanto estudantes como professores. Hoje sou
        mestrando na{" "}
        <Link href="https://www.ufba.br/">
          UFBA - Universidade Federal da Bahia
        </Link>{" "}
        e também trabalho como{" "}
        <HighlightedDescription>Freelancer</HighlightedDescription>! Faço parte
        do grupo de pesquisa GAUDI (Grupo de Algoritmos e Computação
        Distribuída). Muitos dos meus projetos e publicações foram desenvolvidos
        juntamente com estes dois grupos. Atualmente estou trabalhando em um
        projeto que envolve criação de contratos inteligentes com Solidity em
        tempo de execução.
      </Description>

      <Description>
        Durante o mestrado, também trabalhei em algumas empresas voltadas para a
        área de Blockchain. Hoje tenho experiência principalmente em Programação
        Backend com Node.js, Banco de dados,{" "}
        <HighlightedDescription>
          Blockchain (Tokens, NFTs, DEX, Web3)
        </HighlightedDescription>
        , desenvolvimento de Contratos Inteligentes, DevOps configuração de
        Cloud e GitHub/GitLab/BitBucket. Também tenho conhecimento em
        desenvolvimento Web com React.js, HTML, CSS, Styled Components, trading
        em exchanges centralizadas e DEXs.
      </Description>

      <Description>
        Curiosidades sobre mim? Sou vegetariano! Sim, me preocupo com várias
        questões que agridem o meio ambiente e os animais. Procuro sempre opções
        de produtos e alimentos naturais e veganos. Isto também me faz pensar
        muito no impacto que determinados algoritmos de consenso de plataformas
        blockchain fazem no mundo.
      </Description>
    </Container>
  );
};

export default About;
