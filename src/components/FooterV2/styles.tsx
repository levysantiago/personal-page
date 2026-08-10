import styled, { css } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";

interface IProps {
  theme: INocturneTheme;
}

export const Container = styled.footer(
  (props: IProps) => css`
    border-top: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
  `
);

export const Inner = styled.div(
  (props: IProps) => css`
    max-width: 1080px;
    margin: 0 auto;
    padding: 28px 24px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 14px;
    color: ${props.theme.colors.neutralRamp[500]};
  `
);

export const IconRow = styled.div`
  display: flex;
  gap: 18px;
  font-size: 18px;
`;

export const IconLink = styled.a`
  color: inherit;
  display: flex;
`;
