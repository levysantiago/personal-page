import {
  Container,
  ImgContainer,
  ProfileImg,
  Title,
  TitleHighlight,
  HelloIcon,
  TitleContainer,
  TextContentContainer,
  Text,
} from "./styles";
import React from "react";

const Banner: React.FC = () => {
  return (
    <Container>
      <ImgContainer>
        <ProfileImg />
      </ImgContainer>
      <TextContentContainer>
        <TitleContainer>
          <HelloIcon />
          <Title>
            Olá, eu sou <TitleHighlight>Levy</TitleHighlight>!
          </Title>
        </TitleContainer>
        <Text>Sou dev Backend + Blockchain e criador de conteúdo.</Text>

        <Text>Quer saber mais? Vem comigo!</Text>
      </TextContentContainer>
    </Container>
  );
};

export default Banner;
