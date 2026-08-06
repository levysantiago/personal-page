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
  margin-bottom: 36px;
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

export const Hint = styled.span(
  (props: IProps) => css`
    font-size: 14px;
    color: ${props.theme.colors.neutralRamp[500]};
  `
);

export const Timeline = styled.div(
  (props: IProps) => css`
    border-left: 1px solid ${props.theme.colors.neutralRamp[800]};
    padding-left: 34px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `
);

export const Role = styled.details``;

export const Summary = styled.summary(
  (props: IProps & { $isFirst: boolean }) => css`
    list-style: none;
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    align-items: baseline;
    padding: 18px 0;
    position: relative;
    ${!props.$isFirst &&
    css`
      border-top: 1px solid
        color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    `}

    &::-webkit-details-marker {
      display: none;
    }

    &::marker {
      content: "";
    }
  `
);

export const Dot = styled.span(
  (props: IProps & { $current: boolean }) => css`
    position: absolute;
    left: -40px;
    top: ${props.$current ? "26px" : "27px"};
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${props.$current
      ? props.theme.colors.green
      : props.theme.colors.neutralRamp[700]};
    ${props.$current &&
    css`
      box-shadow: 0 0 0 4px
        color-mix(in srgb, ${props.theme.colors.green} 18%, transparent);
    `}
  `
);

export const RoleTitle = styled.span(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-size: 21px;
    font-weight: 500;
  `
);

export const RoleCompany = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.accent};
    font-size: 15px;
  `
);

export const RoleDates = styled.span(
  (props: IProps) => css`
    font-size: 14px;
    color: ${props.theme.colors.neutralRamp[500]};
    font-feature-settings: "tnum" 1;
  `
);

export const RoleBody = styled.div(
  (props: IProps) => css`
    padding: 0 0 24px;
    max-width: 70ch;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 15.5px;
    color: color-mix(in srgb, ${props.theme.colors.text} 78%, transparent);

    p {
      margin: 0;
    }
  `
);
