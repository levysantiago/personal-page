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
    padding: 96px 24px 84px;
  `
);

export const Heading = styled.h2(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 36px;
    letter-spacing: -0.02em;
    margin: 0 0 40px;
  `
);

export const HeadingAccent = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.accent};
  `
);

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 56px;
  align-items: start;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const Lead = styled.p(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 21px;
    line-height: 1.5;
    margin: 0 0 18px;
  `
);

export const Paragraph = styled.p(
  (props: IProps & { $opacity: number }) => css`
    margin: 0 0 14px;
    color: color-mix(
      in srgb,
      ${props.theme.colors.text} ${props.$opacity}%,
      transparent
    );
    max-width: 56ch;
  `
);

export const Facts = styled.dl(
  (props: IProps) => css`
    margin: 0;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px 24px;
    font-size: 15px;
    border-top: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    padding-top: 22px;
  `
);

export const FactTerm = styled.dt(
  (props: IProps) => css`
    color: ${props.theme.colors.neutralRamp[500]};
    margin: 0;
  `
);

export const FactValue = styled.dd`
  margin: 0;
`;

export const StatusValue = styled(FactValue)(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
  `
);

export const EmailLink = styled.a(
  (props: IProps) => css`
    color: ${props.theme.colors.text};

    &:hover {
      color: ${props.theme.colors.green};
    }
  `
);

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Card = styled.div(
  (props: IProps & { $accent: "accent" | "green" }) => css`
    background: color-mix(
      in srgb,
      ${props.theme.colors.surface} 72%,
      transparent
    );
    border: 1px solid ${props.theme.colors.neutralRamp[800]};
    border-radius: 12px;
    padding: 22px 24px;
    border-bottom: 2px solid
      ${props.$accent === "green"
        ? props.theme.colors.green
        : props.theme.colors.accent};
  `
);

export const CardIcon = styled.div(
  (props: IProps & { $accent: "accent" | "green" }) => css`
    color: ${props.$accent === "green"
      ? props.theme.colors.green
      : props.theme.colors.accent};
    margin-bottom: 12px;
  `
);

export const CardTitle = styled.h3(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 18px;
    margin: 0 0 6px;
  `
);

export const CardBody = styled.p(
  (props: IProps) => css`
    margin: 0;
    font-size: 14.5px;
    color: color-mix(in srgb, ${props.theme.colors.text} 74%, transparent);
  `
);
