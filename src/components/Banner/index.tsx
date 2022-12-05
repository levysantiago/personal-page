import { Container, ImgContainer, Title } from "./styles";
import React from "react";

interface IBannerProps {
  title: string;
}

const Banner: React.FC<IBannerProps> = (props: IBannerProps) => {
  const { title } = props;
  return (
    <>
      <Container>
        <ImgContainer />
        <Title>{title}</Title>
      </Container>
    </>
  );
};

export default Banner;
