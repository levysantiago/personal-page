import styled from "styled-components";
import {
  GenericContainer,
  ResponsiveDescription,
  ResponsiveTitle,
  ResponsiveTopic,
} from "components/styles";
import levysdev_picture from "../../../assets/profile/levysdev.jpeg";
import academy_hat_icon from "../../../assets/academy-hat.svg";
import tags_icon from "../../../assets/tags-icon.svg";
import { IconBlock } from "components/IconBlock";
import { ITheme } from "components/Theme";

interface IAboutProps {
  theme: ITheme;
}

export const Container = styled(GenericContainer)(
  (props: IAboutProps) => `
  display: flex;
  flex-direction: column;
  background-color: ${props.theme.colors.black || "#1a181b"};
  gap: 30px;
  position: relative;
`
);

export const RelativeDiv = styled.div`
  position: absolute;
  width: 100%;
  top: -12px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HtmlTagImg = styled.img.attrs({
  src: require("../../../assets/htmlTag.svg").default,
  alt: "HTML tag icon.",
})`
  width: 50px;
  top: -12px;
  left: 0px;

  @media (max-width: 1024px) {
    top: -63px;
  }
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

export const SubTitle = styled(ResponsiveTopic)(
  (props: IAboutProps) => `
  font-family: ${props.theme.fonts.title || "Arial"};
  font-weight: 700;
  line-height: 33px;
  color: ${props.theme.colors.white || "#fafafa"};
  margin-bottom: 20px;
`
);

export const HighlightedSubTitle = styled(SubTitle)(
  (props: IAboutProps) => `
  color: ${props.theme.colors.blueMedium || "#fafafa"};
`
);

export const TitleContinuation = styled(Title)(
  (props: IAboutProps) => `
  color: ${props.theme.colors.blueMedium || "#a24ee4"};
`
);

export const Description = styled(ResponsiveDescription)(
  (props: IAboutProps) => `
  font-family: ${props.theme.fonts.text || "Roboto-Regular"};
  font-weight: 300;
  line-height: 22px;
  color: ${props.theme.colors.white || "#fafafa"};
  margin-bottom: 20px;
  text-align: justify;
`
);

export const HighlightedDescription = styled(Description)(
  (props: IAboutProps) => `
  font-family: ${props.theme.fonts.title2};
  color: ${props.theme.colors.greenMedium};
  font-weight: 500;
`
);

export const LevysdevPicture = styled.img.attrs({
  src: levysdev_picture,
  alt: "Levy's picture",
})`
  border-radius: 100%;
  width: 200px;
`;

export const AcademyIconBlock = styled(IconBlock).attrs(
  (props: IAboutProps) => ({
    blockColor: props.theme.colors.orangeIconBlock,
    iconSrc: academy_hat_icon,
    iconAlt: "Graduation cap icon",
  })
)``;

export const ProfissionIconBlock = styled(IconBlock).attrs(
  (props: IAboutProps) => ({
    blockColor: props.theme.colors.greenIconBlock,
    iconSrc: tags_icon,
    iconAlt: "HTML tags icon",
  })
)``;
