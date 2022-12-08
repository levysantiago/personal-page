import { GenericContainer, ResponsiveDescription } from "components/styles";
import { ITheme } from "components/Theme";
import styled from "styled-components";

interface IProps {
  theme: ITheme;
}

export const Container = styled(GenericContainer)(
  (props: IProps) => `
  background-color: ${props.theme.colors.purpleMedium};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`
);

export const QuoteSuperContainer = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const VerticalLine = styled.div(
  (props: IProps) => `
  background-color: ${props.theme.colors.purpleDark};
  height: 60px;
  width: 8px;
  margin-right: 8px;

  @media(max-width: 768px){
    display: none;
  }
`
);

export const QuoteImg = styled.img.attrs({
  src: require("../../assets/quote.svg").default,
  alt: "A quote icon.",
})`
  position: absolute;
  top: 0px;
  left: -50px;

  @media (max-width: 350px) {
    top: -20px;
    left: -10px;
  }
`;

export const QuoteImgReverse = styled.img.attrs({
  src: require("../../assets/quote.svg").default,
  alt: "A quote icon.",
})`
  position: absolute;
  transform: rotate(180deg);
  right: -50px;
  bottom: 0px;

  @media (max-width: 350px) {
    bottom: -20px;
    right: -10px;
  }
`;

export const Phrase = styled(ResponsiveDescription)(
  (props: IProps) => `
  font-family: ${props.theme.fonts.text};
  color: ${props.theme.colors.white};
  line-height: 25px
`
);
