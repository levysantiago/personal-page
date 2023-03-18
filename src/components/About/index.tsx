import { IconBlock } from "components/IconBlock";
import { Link } from "components/styles";
import React from "react";
import {
  AcademyIconBlock,
  Container,
  Description,
  HighlightedDescription,
  HighlightedSubTitle,
  HtmlTagImg,
  LevysdevPicture,
  PictureTextContainer,
  ProfissionIconBlock,
  RelativeDiv,
  SubTitle,
  SubTitleDescriptionContainer,
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

      <PictureTextContainer>
        <LevysdevPicture />
        <SubTitleDescriptionContainer>
          <SubTitle>
            Bem vindo(a) ao mundo{" "}
            <HighlightedSubTitle>levysdev</HighlightedSubTitle>!
          </SubTitle>
          <Description>
            Prazer em te conhecer, me chamo Levy, mas muitos me chamam de
            Levy's. Sou de originalidade brasileira, sou fascinado pela área da
            tecnologia, principalmente pelo desenvolvimento de sistemas. Também
            gosto muito de aprender novos conteúdos e utilizar meu conhecimento
            para contribuir com o avanço da tecnologia no mundo.
          </Description>
        </SubTitleDescriptionContainer>
      </PictureTextContainer>

      <PictureTextContainer>
        <AcademyIconBlock />
        <SubTitleDescriptionContainer>
          <SubTitle>Formação Acadêmica</SubTitle>
          <Description>
            Sou bacharelado em Ciência da Computação na UESC (Universidade
            Estadual de Santa Cruz). Hoje sou aluno de mestrado na UFBA
            (Universidade Federal da Bahia).
          </Description>
        </SubTitleDescriptionContainer>
      </PictureTextContainer>

      <PictureTextContainer>
        <ProfissionIconBlock />
        <SubTitleDescriptionContainer>
          <SubTitle>Dev Freelancer Fullstack BE-Heavy</SubTitle>
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
        </SubTitleDescriptionContainer>
      </PictureTextContainer>
    </Container>
  );
};

export default About;
