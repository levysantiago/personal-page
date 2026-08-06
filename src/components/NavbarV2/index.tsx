import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "components/contexts/LanguageContext";
import { navItemsV2 } from "./content/navItems";
import {
  Brand,
  BrandDot,
  Container,
  LangActive,
  LangDivider,
  LangInactive,
  LangWrap,
  NavLink,
} from "./styles";

const NavbarV2: React.FC = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  const changeLangPath = () => {
    navigate({ pathname: lang === "en" ? "/pt" : "/en", hash: "#" });
  };

  return (
    <Container>
      <Brand>
        Levy
        <BrandDot>.</BrandDot>
      </Brand>

      {navItemsV2[lang].map((item) => (
        <NavLink key={item.route} to={item.route}>
          {item.title}
        </NavLink>
      ))}

      <LangWrap>
        {lang === "en" ? (
          <>
            <LangActive>EN</LangActive>
            <LangDivider>/</LangDivider>
            <LangInactive onClick={changeLangPath}>PT-BR</LangInactive>
          </>
        ) : (
          <>
            <LangInactive onClick={changeLangPath}>EN</LangInactive>
            <LangDivider>/</LangDivider>
            <LangActive>PT-BR</LangActive>
          </>
        )}
      </LangWrap>
    </Container>
  );
};

export default NavbarV2;
