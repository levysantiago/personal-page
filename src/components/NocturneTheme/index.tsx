import * as React from "react";
import { ThemeProvider } from "styled-components";

export const nocturneTheme = {
  colors: {
    bg: "#12131f",
    surface: "#232532",
    text: "#e9e9ed",
    accent: "#9184d9",
    green: "#5ce1a6",
    greenGlow: "#123a2c",
    accentRamp: {
      100: "#f5f4ff",
      200: "#e7e5fe",
      300: "#d2cefd",
      400: "#b5abfc",
      500: "#968ae0",
      600: "#796cbf",
      700: "#5d5294",
      800: "#423a6a",
      900: "#2b2741",
    },
    neutralRamp: {
      100: "#f3f5fe",
      200: "#e4e7f5",
      300: "#cfd3e5",
      400: "#b2b6ca",
      500: "#9397ab",
      600: "#75798c",
      700: "#595d6c",
      800: "#3f424d",
      900: "#292b31",
    },
  },
  fonts: {
    heading: `"Inter", system-ui, sans-serif`,
    body: `"Inter", system-ui, sans-serif`,
  },
};

export type INocturneTheme = typeof nocturneTheme;

const NocturneTheme: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => <ThemeProvider theme={nocturneTheme}>{children}</ThemeProvider>;

export default NocturneTheme;
