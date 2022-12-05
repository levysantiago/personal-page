import { GenericContainer } from "components/styles";
import { ITheme } from "components/Theme";
import styled from "styled-components";

interface IProfessionalLifeProps {
  theme: ITheme;
}

export const Container = styled(GenericContainer)(
  (props: IProfessionalLifeProps) => `
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${props.theme.colors.black || "#1a181b"};
`
);

export const Title = styled.span(
  (props: IProfessionalLifeProps) => `
  font-family: ${props.theme.fonts.title || "Arial"};
  font-size: 25px;
  font-weight: 700;
  line-height: 33px;
  text-align: center;
  color: ${props.theme.colors.white || "#fafafa"};
  margin-bottom: 30px;
`
);

export const TitleContinuation = styled(Title)(
  (props: IProfessionalLifeProps) => `
  color: ${props.theme.colors.purpleMedium || "##a24ee4"};
`
);

export const Description = styled.span(
  (props: IProfessionalLifeProps) => `
  font-family: ${props.theme.fonts.text || "Roboto-Regular"};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: ${props.theme.colors.white || "#fafafa"};
`
);
