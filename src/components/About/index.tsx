import { SideTopic } from "components/SideTopic";
import React from "react";
import {
  AcademyIconBlock,
  Container,
  Description,
  HighlightedDescription,
  HighlightedSubTitle,
  HtmlTagImg,
  LevysdevPicture,
  ProfissionIconBlock,
  RelativeDiv,
  SubTitle,
  Title,
  TitleContinuation,
} from "./styles";

const About: React.FC = () => {
  return (
    <Container>
      <Title>
        Um pouco <TitleContinuation>Sobre Levy</TitleContinuation>
      </Title>

      <SideTopic
        imageElement={<LevysdevPicture />}
        titleElement={
          <SubTitle>
            Bem vindo(a) ao mundo{" "}
            <HighlightedSubTitle>levysdev</HighlightedSubTitle>!
          </SubTitle>
        }
        description={`Prazer em te conhecer, me chamo Levy, mas muitos me chamam de
            Levy's. Sou de originalidade brasileira, sou fascinado pela área da
            tecnologia, principalmente pelo desenvolvimento de sistemas. Também
            gosto muito de aprender novos conteúdos e utilizar meu conhecimento
            para contribuir com o avanço da tecnologia no mundo.`}
      />

      <SideTopic
        imageElement={<AcademyIconBlock />}
        title={`Formação Acadêmica`}
        description={`Sou bacharelado em Ciência da Computação na UESC (Universidade
            Estadual de Santa Cruz). Hoje sou aluno de mestrado na UFBA
            (Universidade Federal da Bahia).`}
      />

      <SideTopic
        imageElement={<ProfissionIconBlock />}
        title={`Dev Freelancer Fullstack BE-Heavy`}
        descriptionElement={
          <Description>
            Hoje trabalho como{" "}
            <HighlightedDescription>
              Dev Freelancer Fullstack JavaScript
            </HighlightedDescription>{" "}
            e também sou{" "}
            <HighlightedDescription>
              Mentor de programação
            </HighlightedDescription>
            . Tenho experiência principalmente em Programação Backend e de
            Contratos Inteligentes com Solidity. Também tenho bom conhecimento
            em Frontend.
          </Description>
        }
      />

      <RelativeDiv>
        <HtmlTagImg />
      </RelativeDiv>
    </Container>
  );
};

export default About;
