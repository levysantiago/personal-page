import styled, { css } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";

interface IWrapperProps {
  theme: INocturneTheme;
  $width: string;
  $height: string;
  $radius: string;
}

export const Wrapper = styled.div(
  (props: IWrapperProps) => css`
    position: relative;
    width: ${props.$width};
    max-width: 100%;
    height: ${props.$height};
    border-radius: ${props.$radius};
    overflow: hidden;
    mix-blend-mode: lighten;
    background: ${props.theme.colors.neutralRamp[900]};
  `
);

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

interface IPlaceholderProps {
  theme: INocturneTheme;
}

export const Placeholder = styled.div(
  (props: IPlaceholderProps) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: ${props.theme.colors.neutralRamp[500]};
    font-size: 13px;
    text-align: center;
    padding: 12px;
  `
);
