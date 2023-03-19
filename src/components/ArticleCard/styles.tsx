import styled from "styled-components";
import { ResponsiveCardTitle, ResponsiveSmallText } from "components/styles";
import { ITheme } from "components/Theme";
import external_link_icon from "../../assets/external-link.svg";

interface IProps {
  theme: ITheme;
}

export const CardContainer = styled.div(
  (props: IProps) => `
  padding: 20px 30px;
  border-radius: 6px;
  background: ${props.theme.colors.orangeMediumTransparent};
  box-shadow: 2px 4px 6px ${props.theme.colors.blackShadowTransparent};
  border: 2px solid ${props.theme.colors.orangeMediumTransparent};
  width: 40%;
  height: 110px;
  min-width: 400px;
  max-width: 500px;
  margin: 10px 10px;
  position: relative;

  @media(max-width: 768px){
    width: 100%;
    min-width: 300px;
    height: 110px;
  }

  @media(max-width: 500px){
    min-width: 200px;
    height: 140px;
  }

  @media(max-width: 400px){
    height: 140px;
  }
`
);

export const ReadLinkContainer = styled.div.attrs({ id: "readDiv" })(
  (props: IProps) => `
  width: 100%;
  border-radius: 6px;
  text-align: center;
  position: absolute;
  bottom: 10px;
  right: 20px;
  display: flex;
  justify-content: flex-end;
`
);

export const ReadLink = styled.a(
  (props: IProps) => `
  color: ${props.theme.colors.orangeLight};
  text-decoration: none;
  font-family: ${props.theme.fonts.title2};
  font-size: 14px;

  &:hover{
    text-decoration: underline;
  }
`
);

export const ExternalLinkIcon = styled.img.attrs({
  src: external_link_icon,
  alt: "External link icon",
})`
  width: 12px;
`;

export const Title = styled(ResponsiveCardTitle)(
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
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props.theme.colors.white};
`
);

export const ItemTitle = styled(ResponsiveSmallText)(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title2};
  font-weight: 700;
  color: ${props.theme.colors.white};
  margin-bottom: 5px;
  margin-right: 4px;
  `
);

export const ItemDescription = styled(ResponsiveSmallText)(
  (props: IProps) => `
  font-family: ${props.theme.fonts.description};
  font-weight: 700;
  color: ${props.theme.colors.white};
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  white-space: nowrap;
  `
);
