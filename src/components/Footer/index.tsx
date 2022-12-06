import React from "react";
import {
  Anchor,
  AnchorsContainer,
  Container,
  HtmlTagImg,
  RelativeDiv,
  Title,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <RelativeDiv>
        <HtmlTagImg />
      </RelativeDiv>

      <Title>Levy Santiago</Title>

      <AnchorsContainer>
        <Anchor to="#about">Sobre</Anchor>
        <Anchor to="#hard-skills">Hard Skills</Anchor>
        <Anchor to="#professional-life">Vida Profissional</Anchor>
        <Anchor to="#soft-skills">Soft Skills</Anchor>
        <Anchor to="#academic-life">Vida Acadêmica</Anchor>
        <Anchor to="#articles">Artigos Publicados</Anchor>
        <Anchor to="#projects">Meus Projetos</Anchor>
      </AnchorsContainer>
    </Container>
  );
};

export default Footer;
