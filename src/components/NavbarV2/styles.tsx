import styled, { css } from "styled-components";
import { HashLink } from "react-router-hash-link";
import { INocturneTheme } from "components/NocturneTheme";

interface IProps {
  theme: INocturneTheme;
}

export const Container = styled.nav(
  (props: IProps) => css`
    display: flex;
    align-items: center;
    gap: 26px;
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(16px);
    background: color-mix(in srgb, ${props.theme.colors.bg} 74%, transparent);
    border-bottom: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    padding: 12px max(24px, calc((100% - 1080px) / 2));
  `
);

export const Brand = styled(HashLink).attrs({ smooth: true, to: "#top" })(
  (props: IProps) => css`
    font-family: ${props.theme.fonts.heading};
    font-weight: 500;
    font-size: 18px;
    margin-right: auto;
    text-decoration: none;
    color: ${props.theme.colors.text};
  `
);

export const BrandDot = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
  `
);

export const NavLink = styled(HashLink).attrs({ smooth: true })(
  (props: IProps) => css`
    color: ${props.theme.colors.text};
    text-decoration: none;
    font-size: 14px;
    white-space: nowrap;

    &:hover {
      color: ${props.theme.colors.green};
    }

    @media (max-width: 1020px) {
      display: none;
    }
  `
);

export const LangWrap = styled.span(
  (props: IProps) => css`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    padding-left: 14px;
    margin-left: 4px;
    border-left: 1px solid
      color-mix(in srgb, ${props.theme.colors.text} 16%, transparent);
    white-space: nowrap;
    flex: none;
  `
);

export const LangActive = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.green};
    white-space: nowrap;
  `
);

export const LangDivider = styled.span(
  (props: IProps) => css`
    color: ${props.theme.colors.neutralRamp[700]};
  `
);

export const LangInactive = styled.a(
  (props: IProps) => css`
    color: ${props.theme.colors.neutralRamp[500]};
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      color: ${props.theme.colors.green};
    }
  `
);
