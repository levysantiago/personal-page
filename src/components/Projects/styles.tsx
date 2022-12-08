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
  background-color: ${props.theme.colors.black};
`
);

export const Title = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title};
  font-size: 25px;
  font-weight: 700;
  line-height: 33px;
  text-align: center;
  color: ${props.theme.colors.white};
  margin-bottom: 30px;
`
);

export const TitleContinuation = styled(Title)(
  (props: IProps) => `
  color: ${props.theme.colors.purpleMedium};
`
);

export const Description = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.text};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: justify;
  color: ${props.theme.colors.white};
  margin-bottom: 50px;
`
);

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
