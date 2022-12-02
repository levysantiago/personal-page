import styled from "styled-components";
import { INavbarProps } from "./types/INavbarProps";

export const Container = styled.div(
  (props: INavbarProps) => `
  display: flex;
  justify-content: flex-end;
  background-color: #1E1C1F;
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
  font-family: Arial;
  justify-content: center;
  background-color: #1E1C1F;
  color: #f3dbff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover{
    background-color: #222023;
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
  (props: { sideNavOpened: boolean }) => `
  display: none;

  @media (max-width: 768px) {
    display: flex;
    visibility: ${props.sideNavOpened ? "visible" : "hidden"};
    flex-direction: column;
    width: ${props.sideNavOpened ? "50%" : "0px"};
    height: 100%;
    transition: width 0.4s;
    background-color: #222023;
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
  font-family: Arial;
  justify-content: center;
  background-color: #1E1C1F;
  color: #f3dbff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover{
    background-color: #29272B;
  }
`
);
