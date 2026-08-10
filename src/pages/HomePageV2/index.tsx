import * as React from "react";
import FooterV2 from "components/FooterV2";
import NocturneTheme from "components/NocturneTheme";
import NavbarV2 from "components/NavbarV2";
import AboutV2 from "pages/sections-v2/AboutV2";
import ContactClose from "pages/sections-v2/ContactClose";
import ExperienceV2 from "pages/sections-v2/ExperienceV2";
import Hero from "pages/sections-v2/Hero";
import ProjectsV2 from "pages/sections-v2/ProjectsV2";
import StatStrip from "pages/sections-v2/StatStrip";
import TechnologiesV2 from "pages/sections-v2/TechnologiesV2";
import { Content, Mesh, Page } from "./styles";

const HomePageV2: React.FC = () => {
  return (
    <NocturneTheme>
      <Page>
        <Mesh />
        <Content>
          <NavbarV2 />
          <Hero />
          <StatStrip />
          <AboutV2 />
          <ExperienceV2 />
          <TechnologiesV2 />
          <ProjectsV2 />
          <ContactClose />
          <FooterV2 />
        </Content>
      </Page>
    </NocturneTheme>
  );
};

export default HomePageV2;
