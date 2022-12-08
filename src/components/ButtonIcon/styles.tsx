import { ITheme } from "components/Theme";
import styled from "styled-components";

interface IProps {
  theme: ITheme;
}

interface IContainerProps extends IProps {
  backgroundColor: string;
}

interface ITitleProps extends IProps {
  titleColor: string;
}

export const Container = styled.div(
  (props: IContainerProps) => `
  width: 80px;
  height: 20px;
  border-radius: 2px;
  background-color: ${props.backgroundColor};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin: 10px 10px;
  cursor: pointer;
`
);

export const Icon = styled.img`
  width: 14px;
  top: 2px;
  margin-right: 5px;
`;

export const Title = styled.span(
  (props: ITitleProps) => `
  font-family: ${props.theme.fonts.title2};
  font-size: 14px;
  line-height: 0px;
  color: ${props.titleColor}
`
);
