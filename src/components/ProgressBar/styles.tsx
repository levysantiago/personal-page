import { ITheme } from "components/Theme";
import styled from "styled-components";

interface IProgressBarProps {
  barWidthPercent?: string;
  theme: ITheme;
}

export const BaseBar = styled.div(
  (props: IProgressBarProps) => `
  width: 95%;
  height: 10px;
  border-radius: 100px;
  background-color: ${props.theme.colors.purpleDark};
  display: flex;
  align-items: center;
  padding: 0px 2px;
  margin-bottom: 10px;
`
);

export const InsideBar = styled.div(
  (props: IProgressBarProps) => `
  width: ${props.barWidthPercent || "50%"};
  height: 6px;
  border-radius: 100px;
  background-color: ${props.theme.colors.purpleMedium};
`
);

export const Title = styled.span(
  (props: IProgressBarProps) => `
  font-family: ${props.theme.fonts.text};
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  color: ${props.theme.colors.purbleLight};
  margin-bottom: 10px;
`
);
