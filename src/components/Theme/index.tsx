import * as React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#fafafa",
    black: "#1A181B",
    purpleMedium: "#A24EE4",
    purpleMedium2: "#7724B8",
    purpleMedium3: "#3E2C46",
    purpleMedium4: "#4C4153",
    purpleDark: "#3A0B5F",
    purpleDark2: "#1E1c1f",
    purpleDark3: "#222023",
    purpleDark4: "#29272B",
    purbleLight: "#BF83EF",
    purpleGray: "#f3dbff",
    greenMedium: "#13615D",
    greenLight: "#88FEF3",
    yellowLight: "#FFFA7E",
  },
  fonts: {
    title: "Arial",
    title2: "Roboto-Medium",
    description: "Roboto-Light",
    text: "Roboto-Regular",
  },
};

export type ITheme = typeof theme;

const Theme: React.FC<{ children: React.ReactElement }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
