import styled, { css } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";

interface IProps {
  theme: INocturneTheme;
}

export const Section = styled.section(
  (props: IProps) => css`
    border-top: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    border-bottom: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    background: color-mix(in srgb, ${props.theme.colors.neutralRamp[900]} 60%, transparent);
  `
);

export const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 36px 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const Stat = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
`;

export const Value = styled.span(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 38px;
    line-height: 1;
    color: ${props.theme.colors.green};
    font-feature-settings: "tnum" 1;
  `
);

export const Label = styled.span(
  (props: IProps) => css`
    font-size: 14px;
    color: ${props.theme.colors.neutralRamp[400]};
  `
);
