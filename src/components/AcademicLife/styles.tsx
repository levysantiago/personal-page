import { GenericContainer } from "components/styles";
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
  background-color: ${props.theme?.colors.black || "#1A181B"};
`
);

export const Title = styled.span(
  (props: IAcademicLifeProps) => `
  font-family: ${props.theme?.fonts.title || "Arial"};
  font-size: 25px;
  font-weight: 700;
  line-height: 33px;
  text-align: center;
  color: ${props.theme?.colors.white || "#fafafa"};
  margin-bottom: 30px;
`
);

export const TitleContinuation = styled(Title)(
  (props: IAcademicLifeProps) => `
  color: ${props.theme.colors.purpleMedium};
`
);

export const Description = styled.span(
  (props: IAcademicLifeProps) => `
  font-family: ${props.theme?.fonts.text || "Roboto-Regular"};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: ${props.theme?.colors.white || "#fafafa"};
`
);
