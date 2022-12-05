import styled from "styled-components";

export const GenericContainer = styled.div`
  padding: 100px 120px;
  position: relative;

  @media (max-width: 1024px) {
    padding: 50px 100px;
  }

  @media (max-width: 768px) {
    padding: 50px 50px;
  }
`;
