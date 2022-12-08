import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 470px) {
    flex-direction: column;
  }
`;
