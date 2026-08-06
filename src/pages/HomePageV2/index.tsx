import * as React from "react";
import NocturneTheme from "components/NocturneTheme";
import NavbarV2 from "components/NavbarV2";
import AboutV2 from "pages/sections-v2/AboutV2";
import Hero from "pages/sections-v2/Hero";
import StatStrip from "pages/sections-v2/StatStrip";
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
        </Content>
      </Page>
    </NocturneTheme>
  );
};

export default HomePageV2;
