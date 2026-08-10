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
    border-top: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    border-bottom: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    background: linear-gradient(
      to bottom,
      color-mix(
        in srgb,
        ${props.theme.colors.neutralRamp[900]} 72%,
        transparent
      ),
      color-mix(
        in srgb,
        ${props.theme.colors.neutralRamp[900]} 30%,
        transparent
      )
    );
  `
);

export const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 88px 24px 92px;
`;

export const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 12px;
`;

export const Heading = styled.h2(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 36px;
    letter-spacing: -0.02em;
    margin: 0;
  `
);

export const SeeAllLink = styled.a(
  (props: IProps) => css`
    font-size: 15px;
    color: ${props.theme.colors.green};
  `
);

export const Description = styled.p(
  (props: IProps) => css`
    margin: 0 0 32px;
    max-width: 60ch;
    font-size: 15.5px;
    color: color-mix(in srgb, ${props.theme.colors.text} 76%, transparent);
  `
);

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article(
  (props: IProps) => css`
    background: color-mix(
      in srgb,
      ${props.theme.colors.surface} 78%,
      transparent
    );
    border: 1px solid ${props.theme.colors.neutralRamp[800]};
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  `
);

export const CardBody = styled.div`
  padding: 20px 22px 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const CardTitle = styled.h3(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 19px;
    margin: 0;
  `
);

export const CardDescription = styled.p(
  (props: IProps) => css`
    margin: 0;
    flex: 1;
    font-size: 14.5px;
    color: color-mix(in srgb, ${props.theme.colors.text} 76%, transparent);
  `
);

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Tag = styled.span(
  (props: IProps) => css`
    display: inline-flex;
    align-items: center;
    font-size: 11px;
    letter-spacing: 0.02em;
    padding: 3px 10px;
    border-radius: 6px;
    border: 1px solid ${props.theme.colors.accent};
    color: ${props.theme.colors.accent};
  `
);

export const LinkRow = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  padding-top: 2px;
`;

export const CardLink = styled.a(
  (props: IProps) => css`
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${props.theme.colors.text};
  `
);

export const LiveLink = styled(CardLink)(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
  `
);
