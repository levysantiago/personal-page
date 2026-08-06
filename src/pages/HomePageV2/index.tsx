import * as React from "react";
import NocturneTheme from "components/NocturneTheme";
import { Content, Mesh, Page } from "./styles";

const HomePageV2: React.FC = () => {
  return (
    <NocturneTheme>
      <Page>
        <Mesh />
        <Content />
      </Page>
    </NocturneTheme>
  );
};

export default HomePageV2;
