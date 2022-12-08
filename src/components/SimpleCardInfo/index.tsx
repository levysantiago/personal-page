import * as React from "react";
import { CardContainer, Description, Title } from "./styles";

interface ISimpleCardInfoProps {
  title: string;
  description: string;
}

const SimpleCardInfo: React.FC<ISimpleCardInfoProps> = (
  props: ISimpleCardInfoProps
) => {
  const { title, description } = props;

  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default SimpleCardInfo;
