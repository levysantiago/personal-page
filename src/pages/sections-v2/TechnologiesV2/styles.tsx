import styled, { css } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";
import { revealStyles } from "components/RevealOnScroll/styles";

interface IProps {
  theme: INocturneTheme;
}

interface IRevealProps extends IProps {
  $visible: boolean;
}

export const Section = styled.section(
  (props: IRevealProps) => css`
    ${revealStyles(props)}
    max-width: 1080px;
    margin: 0 auto;
    padding: 92px 24px 84px;
  `
);

export const Heading = styled.h2(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 36px;
    letter-spacing: -0.02em;
    margin: 0 0 36px;
  `
);

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px 48px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const GroupLabel = styled.p(
  (props: IProps) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${props.theme.colors.green};
    margin: 0 0 14px;
  `
);

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span(
  (props: IProps & { $variant: "accent" | "outline" }) => css`
    display: inline-flex;
    align-items: center;
    font-size: 11px;
    letter-spacing: 0.02em;
    padding: 3px 10px;
    border-radius: 6px;
    ${props.$variant === "accent"
      ? css`
          background: ${props.theme.colors.accentRamp[800]};
          color: ${props.theme.colors.accentRamp[100]};
        `
      : css`
          border: 1px solid ${props.theme.colors.accent};
          color: ${props.theme.colors.accent};
        `}
  `
);
