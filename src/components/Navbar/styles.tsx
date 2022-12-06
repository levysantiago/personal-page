import styled from "styled-components";
import { INavbarProps } from "./types/INavbarProps";
import { ISideNavProps } from "./types/ISideNavProps";

export const Container = styled.div(
  (props: INavbarProps) => `
  display: flex;
  justify-content: flex-end;
  background-color: ${props.theme?.colors.purpleDark2};
  width: 100%;

  @media(max-width: 768px){
    justify-content: flex-start;
  }
`
);

export const NavItem = styled.a(
  (props: INavbarProps) => `
  display: flex;
  width: 120px;
  height: 60px;
  text-align: center;
  align-items: center;
  font-family: ${props.theme?.fonts.title};
  justify-content: center;
  background-color: ${props.theme?.colors.purpleDark2};
  color: ${props.theme?.colors.purpleGray};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover{
    background-color: ${props.theme?.colors.purpleDark3};
  }

  @media(max-width: 1024px){
    font-size: 14px;
  }

  @media(max-width: 768px){
    display: none;
  }
`
);

export const MenuIcon = styled.img.attrs({
  src: require("../../assets/menu.svg"),
  alt: "Menu icon",
})`
  width: 34px;
`;

export const NavMenu = styled.a(
  (props: INavbarProps) => `
  display: none;
  
  @media(max-width: 768px){
    display: flex;
    width: 120px;
    height: 60px;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`
);

export const Sidenav = styled.div(
  (props: ISideNavProps) => `
  display: none;

  @media (max-width: 768px) {
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

export const SidenavItem = styled.a(
  (props: INavbarProps) => `
  display: flex;
  text-align: center;
  align-items: center;
  height: 60px;
  font-family: ${props.theme?.fonts.title};
  justify-content: center;
  background-color: ${props.theme?.colors.purpleDark3};
  color: ${props.theme?.colors.purpleGray};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover{
    background-color: ${props.theme?.colors.purpleDark4};
  }
`
);
