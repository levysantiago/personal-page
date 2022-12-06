import { ITheme } from "components/Theme";
import styled from "styled-components";

interface IProps {
  theme: ITheme;
}

export const CardContainer = styled.div(
  (props: IProps) => `
  padding: 20px 30px;
  border-radius: 6px;
  background: ${props.theme.colors.orangeMediumTransparent};
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
  width: 40%;
  height: 100px;
  min-width: 400px;
  max-width: 500px;
  margin: 10px 10px;

  @media(max-width: 768px){
    min-width: 100%;
    height: 110px;
  }

  @media(max-width: 500px){
    height: 140px;
  }
`
);

export const Title = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title2};
  font-size: 14px;
  font-weight: 700;
  color: ${props.theme.colors.orangeLight};
  margin-bottom: 10px;
  display: block;
  `
);

export const ItemsContainer = styled.div(
  (props: IProps) => `
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  color: ${props.theme.colors.white};
`
);

export const ItemTitle = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title2};
  font-size: 14px;
  font-weight: 700;
  color: ${props.theme.colors.white};
  margin-bottom: 10px;`
);

export const ItemDescription = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.description};
  font-size: 14px;
  font-weight: 700;
  color: ${props.theme.colors.white};
  margin-bottom: 10px;
  white-space: nowrap;
  `
);
