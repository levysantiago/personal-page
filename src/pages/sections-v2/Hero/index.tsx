import * as React from "react";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useLanguage } from "components/contexts/LanguageContext";
import ImagePlaceholder from "components/ImagePlaceholder";
import { useReveal } from "components/RevealOnScroll";
import { GITHUB_URL, LINKEDIN_URL } from "../socialLinks";
import { content } from "./content";
import {
  Accent,
  Actions,
  Body,
  GhostButton,
  Green,
  Heading,
  Kicker,
  KickerRule,
  PortraitCol,
  PortraitOutline,
  PrimaryButton,
  Section,
  SocialLink,
  SocialRow,
  TextCol,
} from "./styles";

const Hero: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const textReveal = useReveal<HTMLDivElement>();
  const portraitReveal = useReveal<HTMLDivElement>();

  return (
    <Section id="top">
      <TextCol ref={textReveal.ref} $visible={textReveal.isVisible}>
        <Kicker>
          <KickerRule />
          {c.kicker}
        </Kicker>
        <Heading>
          {c.headingLine1}
          <br />
          {c.headingLine2}
          <br />
          {c.headingPrefix}
          <Accent>{c.headingApis}</Accent>
          {c.headingJoin}
          <Green>{c.headingAi}</Green>
          {c.headingSuffix}
        </Heading>
        <Body>{c.body}</Body>
        <Actions>
          <PrimaryButton href={LINKEDIN_URL} target="_blank" rel="noopener">
            {c.primaryCta}
          </PrimaryButton>
          <GhostButton href={GITHUB_URL} target="_blank" rel="noopener">
            {c.secondaryCta}
          </GhostButton>
        </Actions>
        <SocialRow>
          <SocialLink href={GITHUB_URL} target="_blank" rel="noopener" aria-label="GitHub">
            <GithubLogo size={20} />
          </SocialLink>
          <SocialLink href={LINKEDIN_URL} target="_blank" rel="noopener" aria-label="LinkedIn">
            <LinkedinLogo size={20} />
          </SocialLink>
        </SocialRow>
      </TextCol>

      <PortraitCol ref={portraitReveal.ref} $visible={portraitReveal.isVisible}>
        <PortraitOutline />
        <ImagePlaceholder width="400px" height="480px" radius="16px" label={c.portraitLabel} />
      </PortraitCol>
    </Section>
  );
};

export default Hero;
