import { GenericContainer } from "components/styles";
import styled from "styled-components";

export const Container = styled(GenericContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1a181b;
`;

export const Title = styled.span`
  font-family: Arial;
  font-size: 25px;
  font-weight: 700;
  line-height: 33px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
`;

export const TitleContinuation = styled(Title)`
  color: #a24ee4;
`;

export const Description = styled.span`
  font-family: "Roboto-Regular";
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: #fafafa;
`;
