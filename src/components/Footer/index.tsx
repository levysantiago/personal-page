import NetworkButtons from "components/NetworkButtons";
import React from "react";
import {
  Anchor,
  AnchorsContainer,
  Container,
  HtmlTagImg,
  RelativeDiv,
  Title,
} from "./styles";
import { navItems } from "components/Navbar/content/navItems";
import { useLanguage } from "components/contexts/LanguageContext";

const Footer: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <Container>
      <RelativeDiv>
        <HtmlTagImg />
      </RelativeDiv>

      <Title>Levy Santiago</Title>

      <AnchorsContainer>
        {navItems[lang].map((item) => {
          return <Anchor to={item.route}>{item.title}</Anchor>;
        })}
      </AnchorsContainer>

      <NetworkButtons />
    </Container>
  );
};

export default Footer;
