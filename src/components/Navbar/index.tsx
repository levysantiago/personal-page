import React, { useEffect, useState } from "react";
import {
  Container,
  MenuIcon,
  NavItem,
  NavMenu,
  Sidenav,
  SidenavItem,
} from "./styles";
import { INavbarProps } from "./types/INavbarProps";

const Navbar: React.FC<INavbarProps> = (props: INavbarProps) => {
  const [sideNavOpened, setSideNavOpened] = useState(false);

  useEffect(() => {
    const ref = document.getElementById("sidenav");
    if (ref) {
      function handleClickOutside(event: Event) {
        const children = Array.prototype.slice.call(ref?.children);
        if (event.target !== ref && !children.includes(event.target)) {
          setSideNavOpened(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);

  const { items } = props;

  return (
    <Container>
      {/* For big screen devices */}
      {items.map((item, key) => {
        return <NavItem key={key}>{item}</NavItem>;
      })}

      {/* For small screen devices */}
      <NavMenu
        onClick={() => {
          setSideNavOpened(!sideNavOpened);
        }}
      >
        <MenuIcon />
      </NavMenu>
      <Sidenav id="sidenav" {...{ sideNavOpened }}>
        {items.map((item, key) => {
          return <SidenavItem key={key}>{item}</SidenavItem>;
        })}
      </Sidenav>
    </Container>
  );
};

export default Navbar;
