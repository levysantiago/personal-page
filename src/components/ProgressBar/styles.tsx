import { ResponsiveTopic } from "components/styles";
import { ITheme } from "components/Theme";
import styled from "styled-components";

interface IProps {
  theme: ITheme;
}

interface IProgressBarProps extends IProps {
  barWidthPercent: string | undefined;
}

export const BaseBar = styled.div(
  (props: IProps) => `
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

export const Title = styled(ResponsiveTopic)(
  (props: IProps) => `
  font-family: ${props.theme.fonts.text};
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  color: ${props.theme.colors.purbleLight};
  margin-bottom: 10px;
`
);
