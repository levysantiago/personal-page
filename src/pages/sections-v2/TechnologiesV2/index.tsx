import * as React from "react";
import { Cloud, Code, Database, Sparkle } from "@phosphor-icons/react";
import { useLanguage } from "components/contexts/LanguageContext";
import { useReveal } from "components/RevealOnScroll";
import { content } from "./content";
import { Grid, GroupLabel, Heading, Section, Tag, TagRow } from "./styles";

const icons: Record<string, React.ElementType> = {
  code: Code,
  sparkle: Sparkle,
  database: Database,
  cloud: Cloud,
};

const TechnologiesV2: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const reveal = useReveal<HTMLElement>();

  return (
    <Section id="tech" ref={reveal.ref} $visible={reveal.isVisible}>
      <Heading>{c.heading}</Heading>
      <Grid>
        {c.groups.map((group) => {
          const Icon = icons[group.icon];

          return (
            <div key={group.label}>
              <GroupLabel>
                <Icon size={16} />
                {group.label}
              </GroupLabel>
              <TagRow>
                {group.tags.map((tag) => (
                  <Tag key={tag.label} $variant={tag.variant}>
                    {tag.label}
                  </Tag>
                ))}
              </TagRow>
            </div>
          );
        })}
      </Grid>
    </Section>
  );
};

export default TechnologiesV2;
