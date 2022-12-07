import {
  GenericContainer,
  ResponsiveDescription,
  ResponsiveTitle,
} from "components/styles";
import { ITheme } from "components/Theme";
import styled from "styled-components";

interface IAcademicLifeProps {
  theme: ITheme;
}

export const Container = styled(GenericContainer)(
  (props: IAcademicLifeProps) => `
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${props.theme?.colors.black};
`
);

export const Title = styled(ResponsiveTitle)(
  (props: IAcademicLifeProps) => `
  font-family: ${props.theme?.fonts.title};
  font-weight: 700;
  line-height: 33px;
  text-align: center;
  color: ${props.theme?.colors.white};
  margin-bottom: 30px;
`
);

export const TitleContinuation = styled(Title)(
  (props: IAcademicLifeProps) => `
  color: ${props.theme.colors.purpleMedium};
`
);

export const Description = styled(ResponsiveDescription)(
  (props: IAcademicLifeProps) => `
  font-family: ${props.theme?.fonts.text};
  font-weight: 400;
  line-height: 22px;
  text-align: justify;
  margin-top: 20px;
  color: ${props.theme?.colors.white};
`
);

export const HighlightedDescription = styled(Description)(
  (props: IAcademicLifeProps) => `
  color: ${props.theme.colors.purpleMedium};
`
);
