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
  const [imageSelected, setImageSelected] = useState(true);

  const images = {
    true: require("../../assets/profile/me.jpg"),
    false: require("../../assets/profile/avatar.svg").default,
  };

  const changeImage = () => {
    setImageSelected(!imageSelected);
  };

  return (
    <Container>
      <ImgContainer onClick={changeImage}>
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
