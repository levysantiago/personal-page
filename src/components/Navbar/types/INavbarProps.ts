import { ITheme } from "components/Theme";

export interface INavbarProps {
  items: string[];
  fontColor?: string;
  backgroundColor?: string;
  theme?: ITheme;
}
