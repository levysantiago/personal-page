import * as React from "react";
import { useLanguage } from "components/contexts/LanguageContext";
import { useReveal } from "components/RevealOnScroll";
import { content } from "./content";
import {
  Dot,
  Header,
  Heading,
  Hint,
  Inner,
  Role,
  RoleBody,
  RoleCompany,
  RoleDates,
  RoleTitle,
  Section,
  Summary,
  Timeline,
} from "./styles";

const ExperienceV2: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const reveal = useReveal<HTMLElement>();

  return (
    <Section id="experience" ref={reveal.ref} $visible={reveal.isVisible}>
      <Inner>
        <Header>
          <Heading>{c.heading}</Heading>
          <Hint>{c.hint}</Hint>
        </Header>
        <Timeline>
          {c.roles.map((role, index) => (
            <Role key={`${role.company}-${role.dateRange}`} open={index === 0}>
              <Summary $isFirst={index === 0}>
                <Dot $current={role.current} />
                <span>
                  <RoleTitle>{role.title}</RoleTitle>
                  <RoleCompany> · {role.company}</RoleCompany>
                </span>
                <RoleDates>{role.dateRange}</RoleDates>
              </Summary>
              <RoleBody>
                {role.bullets.map((bullet) => (
                  <p key={bullet}>{bullet}</p>
                ))}
              </RoleBody>
            </Role>
          ))}
        </Timeline>
      </Inner>
    </Section>
  );
};

export default ExperienceV2;
