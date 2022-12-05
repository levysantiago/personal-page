import { GenericContainer } from "components/styles";
import { ITheme } from "components/Theme";
import styled from "styled-components";

interface IAboutProps {
  theme: ITheme;
}

export const Container = styled(GenericContainer)(
  (props: IAboutProps) => `
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${props.theme.colors.black || "#1a181b"};
`
);

export const Title = styled.span(
  (props: IAboutProps) => `
  font-family: ${props.theme.fonts.title || "Arial"};
  font-size: 25px;
  font-weight: 700;
  line-height: 33px;
  text-align: center;
  color: ${props.theme.colors.white || "#fafafa"};
  margin-bottom: 30px;
`
);

export const TitleContinuation = styled(Title)(
  (props: IAboutProps) => `
  color: ${props.theme.colors.purpleMedium || "#a24ee4"};
`
);

export const HtmlTagImg = styled.img.attrs({
  src: require("../../assets/htmlTag.svg"),
  alt: "HTML tag icon.",
})`
  width: 50px;
  position: absolute;
  top: -13px;
`;

export const Description = styled.span(
  (props: IAboutProps) => `
  font-family: ${props.theme.fonts.text || "Roboto-Regular"};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: ${props.theme.colors.white || "#fafafa"};
`
);
