import * as React from "react";
import { Image, ImageContainer, InfoContainer, Title } from "./styles";

interface IImageQuadProps {
  title?: string;
  src: string;
  alt?: string;
}

const ImageQuad: React.FC<IImageQuadProps> = (props: IImageQuadProps) => {
  const { title, src, alt } = props;
  return (
    <ImageContainer>
      <InfoContainer>
        <Title>{title}</Title>
      </InfoContainer>
      <Image src={src} alt={alt} />
    </ImageContainer>
  );
};

export default ImageQuad;
