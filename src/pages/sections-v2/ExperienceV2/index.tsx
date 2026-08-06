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
  RoleBulletHighlight,
  RoleBulletText,
  RoleCompany,
  RoleDates,
  RoleList,
  RoleListItem,
  RoleSection,
  RoleSectionTitle,
  RoleTitle,
  Section,
  Summary,
  Timeline,
} from "./styles";

interface IRoleSectionContent {
  title: string;
  bullets: string[];
}

interface IRoleDetailsContent {
  bullets?: string[];
  sections?: IRoleSectionContent[];
}

function hasSections(role: IRoleDetailsContent): role is {
  sections: IRoleSectionContent[];
} {
  return Array.isArray(role.sections);
}

function formatBullet(bullet: string) {
  const separatorIndex = bullet.indexOf(": ");

  if (separatorIndex === -1) {
    return <RoleBulletText>{bullet}</RoleBulletText>;
  }

  return (
    <RoleBulletText>
      <RoleBulletHighlight>
        {bullet.slice(0, separatorIndex + 1)}
      </RoleBulletHighlight>{" "}
      {bullet.slice(separatorIndex + 2)}
    </RoleBulletText>
  );
}

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
                {hasSections(role) ? (
                  role.sections.map((section) => (
                    <RoleSection key={section.title}>
                      <RoleSectionTitle>{section.title}</RoleSectionTitle>
                      <RoleList>
                        {section.bullets.map((bullet) => (
                          <RoleListItem key={bullet}>
                            <RoleBulletText>{bullet}</RoleBulletText>
                          </RoleListItem>
                        ))}
                      </RoleList>
                    </RoleSection>
                  ))
                ) : (
                  <RoleList>
                    {role.bullets?.map((bullet) => (
                      <RoleListItem key={bullet}>
                        {formatBullet(bullet)}
                      </RoleListItem>
                    ))}
                  </RoleList>
                )}
              </RoleBody>
            </Role>
          ))}
        </Timeline>
      </Inner>
    </Section>
  );
};

export default ExperienceV2;
