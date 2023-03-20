import { ResponsiveCardTitle, ResponsiveSmallText } from "components/styles";
import { ITheme } from "components/Theme";
import styled from "styled-components";

interface ISimpleCardInfoProps {
  theme: ITheme;
}

export const CardContainer = styled.div(
  (props: ISimpleCardInfoProps) => `
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  background: ${props.theme.colors.blueDarkTransparent};
  box-shadow: 2px 4px 6px ${props.theme.colors.blackShadowTransparent};
  border-radius: 4px;
  width: 180px;
  height: 120px;
  padding: 20px 30px;
  margin: 10px 10px;
`
);

export const Title = styled(ResponsiveCardTitle)(
  (props: ISimpleCardInfoProps) => `
  font-family: ${props.theme.fonts.title2};
  font-weight: 700;
  color: ${props.theme.colors.blueLight};
  margin-bottom: 10px;
`
);

export const Description = styled(ResponsiveSmallText)(
  (props: ISimpleCardInfoProps) => `
  font-family: ${props.theme.fonts.description};
  font-weight: 700;
  color: ${props.theme.colors.white};
  text-align: center;
`
);
