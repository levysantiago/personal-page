import { ITheme } from "components/Theme";
import { GenericContainer, ResponsiveTitle } from "components/styles";
import styled, { css } from "styled-components";

interface IBahiaDevsProps {
  theme: ITheme;
}

export const Container = styled(GenericContainer)(
  (props: IBahiaDevsProps) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${props.theme.colors.black};
    position: relative;
  `
);

export const SunShadow = styled.img.attrs({
  src: require("../../../assets/sun.svg").default,
  alt: "Sun shadow in section background.",
})`
  width: 500px;
  margin-right: 10px;
  position: absolute;
  top: 0px;
  left: 0px;

  @media (max-width: 1024px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 320px) {
    width: 150px;
  }
`;

export const PalmTreeShadow = styled.img.attrs({
  src: require("../../../assets/palm-tree.svg").default,
  alt: "Palm tree shadow in section background.",
})`
  width: 500px;
  margin-right: 10px;
  position: absolute;
  bottom: 0px;
  right: -10px;

  @media (max-width: 1024px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 320px) {
    width: 150px;
  }
`;

export const Title = styled(ResponsiveTitle)(
  (props: IBahiaDevsProps) => css`
    font-family: ${props.theme.fonts.title};
    font-weight: 700;
    line-height: 33px;
    text-align: center;
    color: ${props.theme.colors.white};
    margin-bottom: 30px;
    z-index: 1;
  `
);

export const TitleContinuation = styled(Title)(
  (props: IBahiaDevsProps) => css`
    color: ${props.theme.colors.orangeContrast};
    z-index: 1;
  `
);

export const Description = styled.span(
  (props: IBahiaDevsProps) => css`
    font-family: ${props.theme.fonts.text};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: justify;
    color: ${props.theme.colors.white};
    margin-bottom: 50px;
    z-index: 1;
  `
);

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const BahiaDevsLogo = styled.img.attrs({
  src: require("../../../assets/bahiadevs.svg").default,
  alt: "Bahia devs community logo.",
})`
  width: 250px;
`;

export const DiscordIcon = styled.img.attrs({
  src: require("../../../assets/discord.svg").default,
  alt: "Discord icon",
})`
  width: 40px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 25px;
  }

  @media (max-width: 300px) {
    display: none;
  }
`;

export const DiscordButton = styled.a.attrs({
  rel: "noopener noreferrer",
  target: "_blank",
})(
  (props: IBahiaDevsProps) => css`
    border: none;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 10px;
    font-family: "PassionOne-Regular";
    font-weight: 400;
    font-size: 30px;
    color: ${props.theme.colors.brownDark};
    background: linear-gradient(
      160deg,
      rgba(255, 81, 47, 1) 0%,
      rgba(240, 152, 25, 1) 100%
    );
    padding: 20px;
    display: flex;
    align-items: center;
    z-index: 1;

    @media (max-width: 768px) {
      font-size: 25px;
    }

    @media (max-width: 300px) {
      font-size: 18px;
    }
  `
);

export const Badge = styled.div(
  (props: IBahiaDevsProps) => css`
    border-radius: 100px;
    width: auto;
    height: 20px;
    background-color: ${props.theme.colors.greenIconBlock};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 2px 10px;
    white-space: nowrap;
    z-index: 1;
  `
);

export const OnlineCircle = styled.div(
  (props: IBahiaDevsProps) => css`
    border-radius: 100px;
    width: 5px;
    height: 5px;
    margin-right: 5px;
    background-color: ${props.theme.colors.greenMedium};
  `
);

export const BadgeTitle = styled.span(
  (props: IBahiaDevsProps) => css`
    font-family: "Roboto-Light";
    font-weight: 300;
    color: ${props.theme.colors.white};
    font-size: 10px;
  `
);

export const BadgeValue = styled.span(
  (props: IBahiaDevsProps) => css`
    font-family: "Roboto-Bold";
    font-weight: 700;
    color: ${props.theme.colors.white};
    font-size: 10px;
    margin-right: 3px;
  `
);
