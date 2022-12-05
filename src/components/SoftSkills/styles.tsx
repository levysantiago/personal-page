import { GenericContainer } from "components/styles";
import styled from "styled-components";

export const Container = styled(GenericContainer)`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    275.36deg,
    #8afff4 0%,
    #58cbd2 36.98%,
    #3998df 66.15%,
    #0b66aa 100%
  );
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.span`
  font-family: Arial;
  font-size: 25px;
  font-weight: 700;
  line-height: 33px;
  text-align: left;
  color: #88fef3;
  margin-bottom: 30px;
`;

export const TitleContinuation = styled(Title)`
  color: #1e1c1f;
`;
