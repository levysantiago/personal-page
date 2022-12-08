import { GenericContainer, ResponsiveTitle } from "components/styles";
import { ITheme } from "components/Theme";
import styled from "styled-components";

interface IProps {
  theme: ITheme;
}

export const Container = styled(GenericContainer)(
  (props: IProps) => `
  display: flex;
  flex-direction: column;
  background: ${props.theme.colors.orangeGradient}
`
);

export const Title = styled(ResponsiveTitle)(
  (props: IProps) => `
  font-family: ${props.theme?.fonts.title};
  font-weight: 700;
  line-height: 33px;
  text-align: left;
  color: ${props.theme?.colors.orangeLight};
  margin-bottom: 30px;
`
);

export const TitleContinuation = styled(Title)(
  (props: IProps) => `
  color: ${props.theme?.colors.black};
`
);

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferer",
})(
  (props: IProps) => `
  font-family: ${props.theme.fonts.text};
  color: ${props.theme.colors.black};
  text-decoration: underline;
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
`
);
