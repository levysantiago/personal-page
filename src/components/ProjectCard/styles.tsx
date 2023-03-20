import styled from "styled-components";
import { ResponsiveCardTitle, ResponsiveSmallText } from "components/styles";
import { ITheme } from "components/Theme";
import { ReactComponent as external_link } from "../../assets/external-link.svg";

interface IProps {
  theme: ITheme;
}

export const CardContainerBorder = styled.div(
  (props: IProps) => `
  background: linear-gradient(275.38deg, #799EFD 3.12%, #507FF7 28.35%, #396BEA 55.09%, #2655CD 77.17%, #10328A 100%);
  box-shadow: 2px 4px 6px ${props.theme.colors.blackShadowTransparent};
  border-radius: 4px;
  width: 250px;
  height: 350px;
  margin: 10px 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
);

export const CardContainer = styled.div(
  (props: IProps) => `
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  position: absolute;
  padding: 10px 10px;
  border-radius: 4px;
  inset: 2px;
  background-color: ${props.theme.colors.blueDark};
`
);

export const ImageHeaderContainer = styled.div`
  width: 100%;
  border-radius: 6px;
`;

export const ImageHeader = styled.img`
  width: 100%;
  border-radius: 6px;
`;

export const BadgeList = styled.div`
  display: flex;
  gap: 5px;
  overflow-y: hidden;
  width: 100%;
  margin: 5px 0px 20px 0px;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const Badge = styled.div(
  (props: IProps) => `
  border-radius: 100px;
  width: auto;
  height: 12px;
  background-color: ${props.theme.colors.blueDark2};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 10px;
  white-space: nowrap;
`
);

export const BadgeTitle = styled.span(
  (props: IProps) => `
  font-family: "Roboto-Light";
  font-weight: 300;
  color: ${props.theme.colors.blueMedium};
  font-size: 10px;
`
);

export const Title = styled(ResponsiveCardTitle)(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title2};
  font-weight: 700;
  color: ${props.theme.colors.blueMedium};
  margin-bottom: 20px;
`
);

export const Description = styled(ResponsiveSmallText)(
  (props: IProps) => `
  font-family: ${props.theme.fonts.description};
  font-weight: 700;
  color: ${props.theme.colors.white};
  text-align: center;
  margin-bottom: 10px;
`
);

export const ExternalLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;

  position: absolute;
  bottom: 12px;
`;

export const ExternalLinkIcon = styled(external_link)(
  (props: IProps) => `
  width: 12px;

  path {
    stroke: ${props.theme.colors.orangeMedium};
  }
`
);

export const ReadMoreLink = styled(ResponsiveSmallText)(
  (props: IProps) => `
  font-family: "Roboto-Medium";
  font-weight: 500;
  color: ${props.theme.colors.orangeMedium};
  text-align: center;
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
`
);

export const WebsiteIcon = styled.img.attrs({
  src: require("../../assets/websiteIcon.svg").default,
  alt: "Website icon.",
})`
  width: 50px;
  position: absolute;
  top: -13px;
`;
