import { GenericContainer } from "components/styles";
import { ITheme } from "components/Theme";
import styled from "styled-components";

interface IProps {
  theme: ITheme;
}

export const Container = styled(GenericContainer)(
  (props: IProps) => `
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  background-color: ${props.theme.colors.black};
`
);

export const Title = styled.span(
  (props: IProps) => `
  color: ${props.theme.colors.purpleMedium};
  font-family: "LeagueGothic-Regular";
  font-size: 30px;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: center;
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

export const AnchorsContainer = styled.div``;

export const Anchor = styled.span(
  (props: IProps) => `
  display: block;
  text-align: center;
  margin-bottom: 10px;
  font-family: ${props.theme.fonts.title2};
  color: ${props.theme.colors.white};
  cursor: pointer;

  &:hover{
    color: ${props.theme.colors.purpleMedium}
  }
`
);
