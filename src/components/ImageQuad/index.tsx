import * as React from "react";
import { Image, ImageContainer } from "./styles";

interface IImageQuadProps {
  src: string;
  alt?: string;
}

const ImageQuad: React.FC<IImageQuadProps> = (props: IImageQuadProps) => {
  const { src, alt } = props;
  return (
    <ImageContainer>
      <Image src={src} alt={alt} />
    </ImageContainer>
  );
};

export default ImageQuad;
