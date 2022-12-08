import ButtonIcon from "components/ButtonIcon";
import { ITheme } from "components/Theme";
import React from "react";
import { withTheme } from "styled-components";
import { ButtonsContainer } from "./styles";

interface IProps {
  theme?: ITheme;
}

const NetworkButtons: React.FC = ({ theme }: IProps) => {
  return (
    <ButtonsContainer>
      <ButtonIcon
        title={"LinkedIn"}
        backgroundColor={theme?.colors.blueLinkedin || ""}
        titleColor={theme?.colors.white || ""}
        iconSrc={require("../../assets/linkedin.svg")}
        iconAlt={"Linkedin icon."}
        link={"https://www.linkedin.com/in/levy-santiago-88a807162/"}
        isExternalLink={true}
      />
      <ButtonIcon
        title={"GitHub"}
        backgroundColor={theme?.colors.white || ""}
        titleColor={theme?.colors.black || ""}
        iconSrc={require("../../assets/github.svg")}
        iconAlt={"Github icon."}
        link={"https://github.com/Levysantiago"}
        isExternalLink={true}
      />
      <ButtonIcon
        title={"Email"}
        backgroundColor={theme?.colors.purpleMedium3 || ""}
        titleColor={theme?.colors.white || ""}
        iconSrc={require("../../assets/email.svg")}
        iconAlt={"Github icon."}
        link={"mailto:levyssantiago@gmail.com"}
        isExternalLink={false}
      />
    </ButtonsContainer>
  );
};

export default withTheme(NetworkButtons);
