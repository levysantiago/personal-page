import { GenericContainer } from "components/styles";
import { ITheme } from "components/Theme";
import styled from "styled-components";

interface ISoftSkillsProps {
  theme: ITheme;
}

export const Container = styled(GenericContainer)(
  (props: ISoftSkillsProps) => `
  display: flex;
  flex-direction: column;
  background: ${props.theme.colors.greenGradient}
`
);

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.span(
  (props: ISoftSkillsProps) => `
  font-family: ${props.theme.fonts.title};
  font-size: 25px;
  font-weight: 700;
  line-height: 33px;
  text-align: left;
  color: ${props.theme.colors.greenLight};
  margin-bottom: 30px;
`
);

export const TitleContinuation = styled(Title)`
  color: #1e1c1f;
`;
