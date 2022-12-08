import { Container, ImgContainer, ProfileImg, Title } from "./styles";
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
    <>
      <Container>
        <ImgContainer onClick={changeImage}>
          <ProfileImg
            src={images[imageSelected.toString()]}
            alt="Levy's image."
          />
        </ImgContainer>
        <Title>Levy Santiago</Title>
      </Container>
    </>
  );
};

export default Banner;
