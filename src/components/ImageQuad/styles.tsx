import styled from "styled-components";

export const ImageContainer = styled.div`
  background: #7724b8;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;
  position: relative;
`;

export const InfoContainer = styled.div`
  background: transparent;
  opacity: 0;
  border-radius: 6px;
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0px;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #7724b8;
    opacity: 1;
  }
`;

export const Title = styled.span`
  font-family: Arial;
  font-size: 12px;
  font-weight: 700;
  color: #fafafa;
`;

export const Image = styled.img`
  width: 85px;
  height: 85px;
`;
