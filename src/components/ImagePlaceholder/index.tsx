import * as React from "react";
import { Image } from "@phosphor-icons/react";
import { Img, Placeholder, Wrapper } from "./styles";

export interface IImagePlaceholderProps {
  width: string;
  height: string;
  radius: string;
  label: string;
  src?: string;
  alt?: string;
}

const ImagePlaceholder: React.FC<IImagePlaceholderProps> = ({
  width,
  height,
  radius,
  label,
  src,
  alt,
}) => {
  return (
    <Wrapper $width={width} $height={height} $radius={radius}>
      {src ? (
        <Img src={src} alt={alt ?? label} />
      ) : (
        <Placeholder>
          <Image size={28} weight="regular" />
          {label}
        </Placeholder>
      )}
    </Wrapper>
  );
};

export default ImagePlaceholder;
