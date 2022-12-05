import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  background: rgba(19, 97, 93, 0.43);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 180px;
  height: 120px;
  padding: 20px 30px;
  margin: 10px 10px;
`;

export const Title = styled.span`
  font-family: "Roboto-Medium";
  font-size: 14px;
  font-weight: 700;
  color: #88fef3;
  margin-bottom: 10px;
`;

export const Description = styled.span`
  font-family: "Roboto-Light";
  font-size: 12px;
  font-weight: 700;
  color: #fafafa;
  text-align: center;
`;
