import { ITheme } from "components/Theme";
import styled from "styled-components";
import chat_quote_icon from "../../assets/chat-quote.svg";

interface IBlockQuoteProps {
  theme: ITheme;
}

export const Container = styled.div(
  (props: IBlockQuoteProps) => `
  background-color: ${props.theme.colors.blueIconBlock};
  display: flex;
  gap: 20px;
  padding: 20px 20px;
  width: 500px;
  border-radius: 10px;
  margin: 50px 0px;

  @media(max-width: 900px){
    width: auto;
  }
`
);

export const Description = styled.span(
  (props: IBlockQuoteProps) => `
  font-family: "Roboto-Medium";
  font-weight: 500;
  font-size: 12px;
  color: ${props.theme.colors.white}
`
);

export const ChatQuoteIcon = styled.img.attrs({
  src: chat_quote_icon,
  alt: "Quote icon",
})`
  width: 50px;

  @media (max-width: 650px) {
    display: none;
  }
`;
