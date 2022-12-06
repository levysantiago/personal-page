import { ITheme } from "components/Theme";
import styled from "styled-components";

interface IProps {
  theme: ITheme;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 0px;
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  background-color: #d9d9d9;
  border-radius: 100px;
`;

export const Title = styled.h2(
  (props: IProps) => `
  color: ${props.theme.colors.purpleMedium};
  font-family: "LeagueGothic-Regular";
  font-size: 40px;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: center;
`
);
