import styled from "styled-components";

export const BaseBar = styled.div`
  width: 95%;
  height: 10px;
  border-radius: 100px;
  background-color: #3a0b5f;
  display: flex;
  align-items: center;
  padding: 0px 2px;
  margin-bottom: 10px;
`;

export const InsideBar = styled.div(
  (props: { barWidthPercent?: string }) => `
  width: ${props.barWidthPercent || "50%"};
  height: 6px;
  border-radius: 100px;
  background-color: #BA69FA;
`
);

export const Title = styled.span`
  font-family: "Roboto-Regular";
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  color: #bf83ef;
  margin-bottom: 10px;
`;
