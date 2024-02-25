import React, { useEffect, useState } from "react";
import { navItems } from "./content/navItems";
import {
  Container,
  LangIcon,
  MenuIcon,
  NavItem,
  NavItemLang,
  NavMenu,
  Sidenav,
  SidenavItem,
} from "./styles";
import { useLanguage } from "components/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

export interface INavbarProps {
  fontColor?: string;
  backgroundColor?: string;
}

const Navbar: React.FC<INavbarProps> = (props: INavbarProps) => {
  const { lang } = useLanguage();
  const [sideNavOpened, setSideNavOpened] = useState(false);
  const navigate = useNavigate();

  const changeLangPath = () => {
    if (lang === "en") {
      navigate({
        pathname: "/pt",
        hash: "#",
      });
    } else {
      navigate({
        pathname: "/en",
        hash: "#",
      });
    }
  };

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
      {
        <>
          {navItems[lang].map((item, key) => {
            return (
              <NavItem to={item.route} key={key}>
                {item.title}
              </NavItem>
            );
          })}

          <NavItemLang onClick={changeLangPath}>
            <LangIcon />
            {lang.toUpperCase()}
          </NavItemLang>
        </>
      }

      {/* For small screen devices */}
      <NavMenu
        onClick={() => {
          setSideNavOpened(!sideNavOpened);
        }}
      >
        <MenuIcon />
      </NavMenu>
      <Sidenav id="sidenav" {...{ sideNavOpened }}>
        {navItems[lang].map((item, key) => {
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
