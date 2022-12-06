import * as React from "react";
import {
  Anchor,
  AnchorsContainer,
  Container,
  HtmlTagImg,
  Title,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <HtmlTagImg />
      <Title>Levy Santiago</Title>

      <AnchorsContainer>
        <Anchor>Sobre</Anchor>
        <Anchor>Hard Skills</Anchor>
        <Anchor>Vida Profissional</Anchor>
        <Anchor>Soft Skills</Anchor>
        <Anchor>Vida Acadêmica</Anchor>
        <Anchor>Artigos Publicados</Anchor>
        <Anchor>Meus Projetos</Anchor>
      </AnchorsContainer>
    </Container>
  );
};

export default Footer;
