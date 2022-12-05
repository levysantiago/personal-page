import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1a181b;
  padding: 100px 120px;
  position: relative;
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

export const HtmlTagImg = styled.img.attrs({
  src: require("../../assets/htmlTag.svg"),
  alt: "HTML tag icon.",
})`
  width: 50px;
  position: absolute;
  top: -13px;
`;

export const Description = styled.span`
  font-family: "Roboto-Regular";
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: #fafafa;
`;
