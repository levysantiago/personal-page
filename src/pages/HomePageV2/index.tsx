import * as React from "react";
import NocturneTheme from "components/NocturneTheme";
import NavbarV2 from "components/NavbarV2";
import { Content, Mesh, Page } from "./styles";

const HomePageV2: React.FC = () => {
  return (
    <NocturneTheme>
      <Page>
        <Mesh />
        <Content>
          <NavbarV2 />
        </Content>
      </Page>
    </NocturneTheme>
  );
};

export default HomePageV2;
