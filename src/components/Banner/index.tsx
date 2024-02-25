import { useLanguage } from "components/contexts/LanguageContext";
import { content } from "./content";
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
import { formatContent } from "util/content-formatter";

const Banner: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <Container>
      <ImgContainer>
        <ProfileImg />
      </ImgContainer>
      <TextContentContainer>
        <TitleContainer>
          <HelloIcon />
          <Title>
            {formatContent({
              message: content[lang].titleInit,
              components: { HighlightComponent: TitleHighlight },
            })}
          </Title>
        </TitleContainer>
        <Text>{content[lang].subtitle}</Text>

        <Text>{content[lang].subtitle2}</Text>
      </TextContentContainer>
    </Container>
  );
};

export default Banner;
