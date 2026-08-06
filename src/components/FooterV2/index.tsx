import * as React from "react";
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useLanguage } from "components/contexts/LanguageContext";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "pages/sections-v2/socialLinks";
import { content } from "./content";
import { Container, IconLink, IconRow, Inner } from "./styles";

const FooterV2: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <Container>
      <Inner>
        <span>{c.locationLine}</span>
        <IconRow>
          <IconLink
            href={GITHUB_URL}
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <GithubLogo size={18} />
          </IconLink>
          <IconLink
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <LinkedinLogo size={18} />
          </IconLink>
          <IconLink href={`mailto:${EMAIL}`} aria-label="Email">
            <EnvelopeSimple size={18} />
          </IconLink>
        </IconRow>
      </Inner>
    </Container>
  );
};

export default FooterV2;
