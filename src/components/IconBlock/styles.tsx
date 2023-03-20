import styled from "styled-components";

export const BlockContainer = styled.div(
  (props: { blockColor: string }) => `
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${props.blockColor};
`
);

export const Icon = styled.img`
  width: 50px;
`;
