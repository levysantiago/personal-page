import { ITheme } from "components/Theme";
import styled from "styled-components";

interface IProps {
  theme: ITheme;
}

export const CardContainer = styled.div(
  (props: IProps) => `
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  background-color: ${props.theme.colors.purpleMedium3};
  box-shadow: 2px 4px 6px ${props.theme.colors.blackShadowTransparent}
  border-radius: 4px;
  width: 180px;
  height: 240px;
  padding: 20px 30px;
  margin: 10px 10px;
  position: relative;
`
);

export const Title = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title2};
  font-size: 16px;
  font-weight: 700;
  color: ${props.theme.colors.white};
  margin-bottom: 20px;
`
);

export const Description = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.description};
  font-size: 12px;
  font-weight: 700;
  color: ${props.theme.colors.white};
  text-align: center;
  margin-bottom: 10px;
`
);

export const ReadMoreLink = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.description};
  font-size: 12px;
  font-weight: 700;
  color: ${props.theme.colors.orangeMedium};
  text-align: center;
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
`
);

export const WebsiteIcon = styled.img.attrs({
  src: require("../../assets/websiteIcon.svg"),
  alt: "Website icon.",
})`
  width: 50px;
  position: absolute;
  top: -13px;
`;

export const GithubIcon = styled.img.attrs({
  src: require("../../assets/githubIcon.svg"),
  alt: "Github icon.",
})`
  width: 30px;
  position: absolute;
  bottom: 10px;
  right: 30px;
`;
