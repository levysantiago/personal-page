import * as React from "react";
import { useLanguage } from "components/contexts/LanguageContext";
import { useReveal } from "components/RevealOnScroll";
import { LINKEDIN_URL } from "../socialLinks";
import { content } from "./content";
import {
  Actions,
  Heading,
  HeadingAccent,
  Paragraph,
  PrimaryButton,
  Section,
} from "./styles";

const ContactClose: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const reveal = useReveal<HTMLElement>();

  return (
    <Section ref={reveal.ref} $visible={reveal.isVisible}>
      <div>
        <Heading>
          {c.headingLine1}
          <br />
          <HeadingAccent>{c.headingAccent}</HeadingAccent>
          {c.headingSuffix}
        </Heading>
        <Paragraph>{c.paragraph}</Paragraph>
      </div>
      <Actions>
        <PrimaryButton href={LINKEDIN_URL} target="_blank" rel="noopener">
          {c.linkedinLabel}
        </PrimaryButton>
      </Actions>
    </Section>
  );
};

export default ContactClose;
