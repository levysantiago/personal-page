import {
  GenericContainer,
  ResponsiveDescription,
  ResponsiveTitle,
} from "components/styles";
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

export const RelativeDiv = styled.div`
  position: relative;
`;

export const Title = styled(ResponsiveTitle)(
  (props: IAboutProps) => `
  font-family: ${props.theme.fonts.title || "Arial"};
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
  src: require("../../assets/htmlTag.svg").default,
  alt: "HTML tag icon.",
})`
  width: 50px;
  position: absolute;
  top: -113px;
  left: -25px;

  @media (max-width: 1024px) {
    top: -63px;
  }
`;

export const Description = styled(ResponsiveDescription)(
  (props: IAboutProps) => `
  font-family: ${props.theme.fonts.text || "Roboto-Regular"};
  font-weight: 400;
  line-height: 22px;
  color: ${props.theme.colors.white || "#fafafa"};
  margin-bottom: 20px;
  text-align: justify;
`
);

export const HighlightedDescription = styled(Description)(
  (props: IAboutProps) => `
  color: ${props.theme.colors.purpleMedium};
`
);
