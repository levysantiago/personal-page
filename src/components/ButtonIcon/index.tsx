import * as React from "react";
import { Container, Icon, Title } from "./styles";

interface IButtonIconProps {
  title: string;
  iconSrc: string;
  iconAlt: string | undefined;
  backgroundColor: string;
  titleColor: string;
  link: string;
  isExternalLink: boolean;
}

const ButtonIcon: React.FC<IButtonIconProps> = ({
  title,
  iconSrc,
  iconAlt,
  backgroundColor,
  titleColor,
  link,
  isExternalLink,
}: IButtonIconProps) => {
  return (
    <a
      href={link}
      target={isExternalLink ? "_blank" : ""}
      rel={isExternalLink ? "noopener noreferer" : ""}
      style={{ textDecoration: "none" }}
    >
      <Container backgroundColor={backgroundColor}>
        <Icon src={iconSrc} alt={iconAlt} />

        <Title titleColor={titleColor}>{title}</Title>
      </Container>
    </a>
  );
};

export default ButtonIcon;
