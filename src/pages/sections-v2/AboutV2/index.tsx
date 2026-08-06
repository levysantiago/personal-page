import * as React from "react";
import { Brain, Database, PlugsConnected } from "@phosphor-icons/react";
import { useLanguage } from "components/contexts/LanguageContext";
import { useReveal } from "components/RevealOnScroll";
import { formatContent } from "util/content-formatter";
import { EMAIL } from "../socialLinks";
import { content } from "./content";
import {
  Card,
  CardBody,
  CardIcon,
  Cards,
  CardTitle,
  EmailLink,
  FactTerm,
  Facts,
  FactValue,
  Grid,
  Heading,
  HeadingAccent,
  Lead,
  Paragraph,
  Section,
  StatusValue,
} from "./styles";

const icons: Record<string, React.ElementType> = {
  plugsConnected: PlugsConnected,
  brain: Brain,
  database: Database,
};

const AboutV2: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const reveal = useReveal<HTMLElement>();

  return (
    <Section id="about" ref={reveal.ref} $visible={reveal.isVisible}>
      <Heading>
        {formatContent({
          message: c.heading,
          components: { HighlightComponent: HeadingAccent },
        })}
      </Heading>
      <Grid>
        <div>
          <Lead>{c.lead}</Lead>
          <Paragraph $opacity={80}>{c.paragraph1}</Paragraph>
          <Paragraph $opacity={72}>{c.paragraph2}</Paragraph>
          <Facts>
            <FactTerm>{c.facts.locationLabel}</FactTerm>
            <FactValue>{c.facts.location}</FactValue>
            <FactTerm>{c.facts.languagesLabel}</FactTerm>
            <FactValue>{c.facts.languages}</FactValue>
            <FactTerm>{c.facts.statusLabel}</FactTerm>
            <StatusValue>{c.facts.status}</StatusValue>
            <FactTerm>{c.facts.emailLabel}</FactTerm>
            <FactValue>
              <EmailLink href={`mailto:${EMAIL}`}>{EMAIL}</EmailLink>
            </FactValue>
          </Facts>
        </div>
        <Cards>
          {c.cards.map((card) => {
            const Icon = icons[card.icon];

            return (
              <Card key={card.title} $accent={card.accent}>
                <CardIcon $accent={card.accent}>
                  <Icon size={24} />
                </CardIcon>
                <CardTitle>{card.title}</CardTitle>
                <CardBody>{card.description}</CardBody>
              </Card>
            );
          })}
        </Cards>
      </Grid>
    </Section>
  );
};

export default AboutV2;
