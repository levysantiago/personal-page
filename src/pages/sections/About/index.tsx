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
        {formatContent({
          message: content[lang].title,
          components: {
            HighlightComponent: TitleContinuation,
          },
        })}
      </Title>

      <SideTopic
        imageElement={<LevysdevPicture />}
        titleElement={
          <SubTitle>
            {formatContent({
              message: content[lang].subtitle,
              components: {
                HighlightComponent: HighlightedSubTitle,
              },
            })}
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
