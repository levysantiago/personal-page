import styled, { css, keyframes } from "styled-components";
import { INocturneTheme } from "components/NocturneTheme";

interface IProps {
  theme: INocturneTheme;
}

export const Page = styled.div(
  (props: IProps) => css`
    position: relative;
    overflow: hidden;
    font-size: 16px;
    line-height: 1.65;
    font-family: ${props.theme.fonts.body};
    color: ${props.theme.colors.text};
    background: radial-gradient(
        900px 620px at 84% -80px,
        color-mix(in srgb, ${props.theme.colors.accentRamp[900]} 92%, transparent),
        transparent 62%
      ),
      radial-gradient(
        700px 520px at 6% 42%,
        color-mix(in srgb, ${props.theme.colors.greenGlow} 55%, transparent),
        transparent 60%
      ),
      ${props.theme.colors.bg};

    *:focus {
      outline: none;
    }

    *:focus-visible {
      outline: 2px solid ${props.theme.colors.accent};
      outline-offset: 2px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${props.theme.colors.text};
    }
  `
);

const drift = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(-18px, 14px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

export const Mesh = styled.div`
  position: absolute;
  inset: -60px;
  opacity: 0.22;
  pointer-events: none;
  background-image: radial-gradient(
    circle at 1px 1px,
    rgba(145, 132, 217, 0.5) 1px,
    transparent 0
  );
  background-size: 46px 46px;
  mask-image: radial-gradient(900px 620px at 78% 60px, black, transparent 72%);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${drift} 26s ease-in-out infinite;
  }
`;

export const Content = styled.div`
  position: relative;
`;
