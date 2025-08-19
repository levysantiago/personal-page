import { ITheme } from "components/Theme";
import { HashLink } from "react-router-hash-link";
import styled, { css } from "styled-components";

interface IProps {
  theme: ITheme;
}

interface ISideNavProps extends IProps {
  sideNavOpened: boolean;
}

export const Container = styled.div(
  (props: IProps) => css`
    display: flex;
    justify-content: flex-end;
    background-color: ${props.theme?.colors.purpleDark2};
    width: 100%;

    @media (max-width: 768px) {
      justify-content: space-between;
    }
  `
);

export const NavItem = styled(HashLink).attrs({ smooth: true })(
  (props: IProps) => css`
    display: flex;
    width: 120px;
    height: 60px;
    text-align: center;
    align-items: center;
    font-family: ${props.theme?.fonts.title};
    justify-content: center;
    background-color: ${props.theme?.colors.purpleDark2};
    color: ${props.theme?.colors.blueLight};
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: ${props.theme.colors.blueMedium};
    }

    @media (max-width: 1024px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  `
);

export const NavItemLang = styled.a(
  (props: IProps) => css`
    display: flex;
    width: 120px;
    height: 60px;
    text-align: center;
    align-items: center;
    font-family: ${props.theme?.fonts.title};
    justify-content: center;
    background-color: ${props.theme?.colors.purpleDark2};
    color: ${props.theme?.colors.blueLight};
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: ${props.theme.colors.blueMedium};
    }

    @media (max-width: 1024px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  `
);

export const LangIcon = styled.img.attrs({
  src: require("../../assets/lang.svg").default,
  alt: "Language icon, click to change it",
})`
  width: 25px;
  margin-right: 5px;
`;

export const MenuIcon = styled.img.attrs({
  src: require("../../assets/menu.svg").default,
  alt: "Menu icon",
})`
  width: 34px;
`;

export const NavMenu = styled.a.attrs({ href: "#" })`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 120px;
    height: 60px;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const Sidenav = styled.div(
  (props: ISideNavProps) => `
  display: none;

  @media (max-width: 768px) {
    z-index: 1;
    height: 100%;
    display: flex;
    visibility: ${props.sideNavOpened ? "visible" : "hidden"};
    flex-direction: column;
    width: ${props.sideNavOpened ? "50%" : "0px"};
    transition: width 0.4s;
    background-color: ${props.theme?.colors.purpleDark3};
    position: absolute;
    top: 0px;
    left: 0px;
  }
`
);

export const SidenavItem = styled(HashLink).attrs({ smooth: true })(
  (props: IProps) => css`
    display: flex;
    text-align: center;
    align-items: center;
    height: 60px;
    font-family: ${props.theme?.fonts.title};
    justify-content: center;
    background-color: ${props.theme?.colors.purpleDark3};
    color: ${props.theme?.colors.blueLight};
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: ${props.theme.colors.blueMedium};
      background-color: ${props.theme?.colors.purpleDark4};
    }
  `
);

export const SidenavItemLang = styled.a(
  (props: IProps) => css`
    display: none;

    @media (max-width: 768px) {
      display: flex;
      text-align: center;
      align-items: center;
      height: 60px;
      width: 120px;
      font-family: ${props.theme?.fonts.title};
      justify-content: center;
      color: ${props.theme?.colors.blueLight};
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
      padding: 0px 5px;

      &:hover {
        color: ${props.theme.colors.blueMedium};
        background-color: ${props.theme?.colors.purpleDark4};
      }
    }
  `
);
