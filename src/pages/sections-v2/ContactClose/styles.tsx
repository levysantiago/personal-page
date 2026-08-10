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
    padding: 96px 24px 104px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 40px;
    align-items: center;

    @media (max-width: 720px) {
      grid-template-columns: 1fr;
    }
  `
);

export const Heading = styled.h2(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: clamp(30px, 3.4vw, 40px);
    letter-spacing: -0.02em;
    margin: 0 0 12px;
  `
);

export const HeadingAccent = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
  `
);

export const Paragraph = styled.p(
  (props: IProps) => css`
    margin: 0;
    color: color-mix(in srgb, ${props.theme.colors.text} 76%, transparent);
    max-width: 46ch;
  `
);

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonBase = styled.a(
  (props: IProps) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    padding: 10px 16px;
    border-radius: 8px;
    border: 1px solid transparent;
    cursor: pointer;
  `
);

export const PrimaryButton = styled(ButtonBase)(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
    border-color: ${props.theme.colors.green};

    &:hover {
      background: color-mix(in srgb, ${props.theme.colors.green} 12%, transparent);
    }
  `
);

export const GhostButton = styled(ButtonBase)(
  (props: IProps) => css`
    color: ${props.theme.colors.accent};

    &:hover {
      background: color-mix(in srgb, ${props.theme.colors.accent} 10%, transparent);
    }
  `
);
