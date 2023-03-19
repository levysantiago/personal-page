import { ChatQuoteIcon, Container, Description } from "./styles";

interface IBlockQuoteProps {
  description: string;
}

export function BlockQuote({ description }: IBlockQuoteProps) {
  return (
    <Container>
      <ChatQuoteIcon />
      <Description>{description}</Description>
    </Container>
  );
}
