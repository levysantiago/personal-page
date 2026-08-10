import * as React from "react";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import ImagePlaceholder from "components/ImagePlaceholder";
import { useLanguage } from "components/contexts/LanguageContext";
import { useReveal } from "components/RevealOnScroll";
import { content } from "./content";
import {
  Card,
  CardBody,
  CardDescription,
  CardLink,
  CardTitle,
  Description,
  Grid,
  Header,
  Heading,
  Inner,
  LinkRow,
  LiveLink,
  Section,
  SeeAllLink,
  Tag,
  TagRow,
} from "./styles";

const PROJECTS_INDEX_URL = "https://github.com/levysantiago";

const ProjectsV2: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const reveal = useReveal<HTMLElement>();

  return (
    <Section id="projects" ref={reveal.ref} $visible={reveal.isVisible}>
      <Inner>
        <Header>
          <Heading>{c.heading}</Heading>
          <SeeAllLink href={PROJECTS_INDEX_URL} target="_blank" rel="noopener">
            {c.seeAll}
          </SeeAllLink>
        </Header>
        <Description>{c.description}</Description>
        <Grid>
          {c.projects.map((project) => (
            <Card key={project.title}>
              <ImagePlaceholder
                width="100%"
                height="180px"
                radius="0px"
                label={c.imageLabel}
                src={project.imageSrc}
                alt={project.imageAlt}
              />
              <CardBody>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <TagRow>
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagRow>
                <LinkRow>
                  <CardLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener"
                  >
                    <GithubLogo size={16} />
                    {c.codeLabel}
                  </CardLink>
                  {project.liveUrl && (
                    <LiveLink
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener"
                    >
                      <ArrowSquareOut size={16} />
                      {c.liveLabel}
                    </LiveLink>
                  )}
                </LinkRow>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};

export default ProjectsV2;
