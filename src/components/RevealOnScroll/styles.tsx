import { css } from "styled-components";

interface IRevealProps {
  $visible: boolean;
}

export const revealStyles = (props: IRevealProps) => css`
  opacity: ${props.$visible ? 1 : 0};
  transform: ${props.$visible ? "none" : "translateY(16px)"};
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1);

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;
