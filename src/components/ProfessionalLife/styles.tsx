import { IconBlock } from "components/IconBlock";
import {
  GenericContainer,
  ResponsiveDescription,
  ResponsiveTitle,
} from "components/styles";
import { ITheme } from "components/Theme";
import styled from "styled-components";
import briefcase_icon from "../../assets/briefcase.svg";
import rocket_icon from "../../assets/rocket.svg";
import play_icon from "../../assets/play.svg";

interface IProfessionalLifeProps {
  theme: ITheme;
}

export const Container = styled(GenericContainer)(
  (props: IProfessionalLifeProps) => `
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${props.theme.colors.black};
`
);

export const Title = styled(ResponsiveTitle)(
  (props: IProfessionalLifeProps) => `
  font-family: ${props.theme.fonts.title};
  font-weight: 700;
  line-height: 33px;
  text-align: center;
  color: ${props.theme.colors.white};
  margin-bottom: 30px;
`
);

export const TitleContinuation = styled(Title)(
  (props: IProfessionalLifeProps) => `
  color: ${props.theme.colors.blueMedium};
`
);

export const Description = styled(ResponsiveDescription)(
  (props: IProfessionalLifeProps) => `
  font-family: ${props.theme.fonts.text};
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: ${props.theme.colors.white};
  margin-bottom: 20px;
  text-align: justify;
`
);

export const HighlightedDescription = styled(Description)(
  (props: IProfessionalLifeProps) => `
  color: ${props.theme.colors.greenMedium};
`
);

export const BriefcaseBlock = styled(IconBlock).attrs(
  (props: IProfessionalLifeProps) => ({
    blockColor: props.theme.colors.blueIconBlock,
    iconSrc: briefcase_icon,
    iconAlt: "Briefcase icon",
  })
)``;

export const RocketBlock = styled(IconBlock).attrs(
  (props: IProfessionalLifeProps) => ({
    blockColor: props.theme.colors.greenIconBlock,
    iconSrc: rocket_icon,
    iconAlt: "Rocket icon",
  })
)``;

export const PlayBlock = styled(IconBlock).attrs(
  (props: IProfessionalLifeProps) => ({
    blockColor: props.theme.colors.purpleIconBlock,
    iconSrc: play_icon,
    iconAlt: "Play icon",
  })
)``;
