import NetworkButtons from "components/NetworkButtons";
import { SideTopic } from "components/SideTopic";
import React from "react";
import { withTheme } from "styled-components";
import {
  Container,
  Description,
  HighlightedDescription,
  Title,
  TitleContinuation,
} from "./styles";
import { content } from "./content";
import { useLanguage } from "components/contexts/LanguageContext";
import { formatContent } from "util/content-formatter";
import { Link } from "components/styles";
import { IconBlock } from "components/IconBlock";

const ProfessionalLife: React.FC = () => {
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

      {content[lang].sections.map((section, index) => {
        return (
          <SideTopic
            key={`professional-life-section-${index}`}
            imageElement={
              <IconBlock
                iconSrc={section.imageSrc}
                iconAlt={section.imageAlt}
                blockColor={section.backgroundColor}
              />
            }
            title={section.title}
            descriptionElement={
              <Description>
                {formatContent({
                  message: section.description,
                  components: {
                    HighlightComponent: HighlightedDescription,
                    LinkComponent: Link,
                  },
                })}
              </Description>
            }
          />
        );
      })}

      <NetworkButtons />
    </Container>
  );
};

export default withTheme(ProfessionalLife);
