import styled, { css } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";
import { revealStyles } from "components/RevealOnScroll/styles";

interface IProps {
  theme: INocturneTheme;
}

export const Section = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  padding: 80px 24px 96px;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;

  & > * {
    min-width: 0;
  }

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

interface IRevealProps extends IProps {
  $visible: boolean;
}

export const TextCol = styled.div(
  (props: IRevealProps) => css`
    ${revealStyles(props)}

    @media (max-width: 880px) {
      order: 2;
    }
  `
);

export const Kicker = styled.p(
  (props: IProps) => css`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${props.theme.colors.green};
    margin: 0 0 20px;
  `
);

export const KickerRule = styled.span(
  (props: IProps) => css`
    width: 38px;
    height: 1px;
    background: ${props.theme.colors.green};
  `
);

export const Heading = styled.h1(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: clamp(40px, 5vw, 60px);
    line-height: 1.06;
    letter-spacing: -0.025em;
    margin: 0 0 20px;
  `
);

export const Accent = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.accent};
  `
);

export const Green = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
  `
);

export const Body = styled.p(
  (props: IProps) => css`
    font-size: 17.5px;
    max-width: 46ch;
    margin: 0 0 30px;
    color: color-mix(in srgb, ${props.theme.colors.text} 80%, transparent);
  `
);

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
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

export const SocialRow = styled.div(
  (props: IProps) => css`
    display: flex;
    gap: 20px;
    margin-top: 34px;
    font-size: 20px;
    color: ${props.theme.colors.neutralRamp[500]};
  `
);

export const SocialLink = styled.a`
  color: inherit;
  display: flex;
`;

export const PortraitCol = styled.div(
  (props: IRevealProps) => css`
    ${revealStyles(props)}
    position: relative;
    width: min(400px, calc(100vw - 48px));
    max-width: 400px;
    justify-self: end;

    @media (max-width: 880px) {
      justify-self: center;
      order: 1;
    }
  `
);

export const PortraitOutline = styled.div(
  (props: IProps) => css`
    position: absolute;
    inset: -14px -14px 24px 24px;
    border: 1px solid color-mix(in srgb, ${props.theme.colors.green} 40%, transparent);
    border-radius: 16px;
  `
);
