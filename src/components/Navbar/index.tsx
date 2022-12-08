import React, { useEffect, useState } from "react";
import { navItems } from "./content/navItems";
import {
  Container,
  MenuIcon,
  NavItem,
  NavMenu,
  Sidenav,
  SidenavItem,
} from "./styles";

export interface INavbarProps {
  fontColor?: string;
  backgroundColor?: string;
}

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

  return (
    <Container>
      {/* For big screen devices */}
      {navItems.map((item, key) => {
        return (
          <NavItem to={item.route} key={key}>
            {item.title}
          </NavItem>
        );
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
        {navItems.map((item, key) => {
          return (
            <SidenavItem to={item.route} key={key}>
              {item.title}
            </SidenavItem>
          );
        })}
      </Sidenav>
    </Container>
  );
};

export default Navbar;
