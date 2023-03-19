import * as React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#fafafa",
    black: "#1A181B",
    blackShadowTransparent: "rgba(0, 0, 0, 0.25)",
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
    purpleGradient: `linear-gradient(275.38deg,#bf83ee 3.12%,#9249cc 28.35%,#7a33b3 50.67%,#6f25aa 77.17%,#4c117a 100%);`,
    greenMedium: "#31F645",
    blueLight: "#80A3FF",
    greenLight2: "#58cbd2",
    blueDarkTransparent: "rgba(3, 15, 47, 0.4);",
    orangeLight: "#FFFA7E",
    orangeMedium: "#FFAC1D",
    orangeDarkTransparent: "rgba(84, 56, 6, 0.8);",
    orangeMediumTransparent: "rgba(134, 99, 37, 0.43);",
    orangeGradient: `linear-gradient(275.36deg,#ffee55 0%,#ffc900 33.33%,#ffac1d 71.36%,#a86d08 100%);`,
    blueGradient: `linear-gradient(275.38deg, #799EFD 3.12%, #507FF7 28.35%, #396BEA 55.09%, #2655CD 77.17%, #10328A 100%);`,
    blueLinkedin: "#2868B2",
    redInstagram: "#ED4B64",
    blueMedium: "#4A7DFF",
    orangeIconBlock: "rgba(206, 173, 0, 0.08);",
    greenIconBlock: "rgba(49, 246, 69, 0.08);",
    blueIconBlock: "rgba(74, 125, 255, 0.08);",
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
