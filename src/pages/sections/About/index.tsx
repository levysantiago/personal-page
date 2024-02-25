import { SideTopic } from "components/SideTopic";
import React from "react";
import {
  AcademyIconBlock,
  Container,
  Description,
  HighlightedDescription,
  HighlightedSubTitle,
  HtmlTagImg,
  LevysdevPicture,
  ProfissionIconBlock,
  RelativeDiv,
  SubTitle,
  Title,
  TitleContinuation,
} from "./styles";
import { Link } from "components/styles";
import { content } from "./content";
import { useLanguage } from "components/contexts/LanguageContext";
import { formatContent } from "util/content-formatter";

const About: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <Container>
      <Title>
        Um pouco <TitleContinuation>Sobre mim</TitleContinuation>
      </Title>

      <SideTopic
        imageElement={<LevysdevPicture />}
        titleElement={
          <SubTitle>
            {content[lang].titleInit}
            <HighlightedSubTitle>levysdev</HighlightedSubTitle>!
          </SubTitle>
        }
        description={content[lang].description}
      />

      <SideTopic
        imageElement={<AcademyIconBlock />}
        title={content[lang].academicSectionTitle}
        description={content[lang].academicSectionDescription}
      />

      <SideTopic
        imageElement={<ProfissionIconBlock />}
        title={`Blockchain Developer`}
        descriptionElement={
          <Description>
            {formatContent({
              message: content[lang].positionSectionDescription,
              components: {
                HighlightComponent: HighlightedDescription,
                LinkComponent: Link,
              },
            })}
            {/* Hoje trabalho como{" "}
            <HighlightedDescription>
              Blockchain Developer
            </HighlightedDescription>{" "}
            na{" "}
            <Link href="https://blockchainwebservices.com.br/">
              BWS (Blockchain Web Services)
            </Link>{" "}
            e também compartilho conteúdo nas redes sociais. Tenho experiência
            principalmente em Programação Backend e de Aplicações Blockchain. */}
          </Description>
        }
      />

      <RelativeDiv>
        <HtmlTagImg />
      </RelativeDiv>
    </Container>
  );
};

export default About;
