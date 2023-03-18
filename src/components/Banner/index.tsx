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
import React, { useState } from "react";

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
        <Text>Sou desenvolvedor de sistemas e criador de conteúdo.</Text>

        <Text>Quer saber mais? Vem comigo!</Text>
      </TextContentContainer>
    </Container>
  );
};

export default Banner;
