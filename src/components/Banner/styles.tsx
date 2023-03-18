import { ITheme } from "components/Theme";
import styled from "styled-components";
import hello_icon from "../../assets/hello.svg";
import arrows_down_icon from "../../assets/arrows-down.svg";
import profile_img from "../../assets/profile/me.jpeg";

interface IProps {
  theme: ITheme;
}

export const Container = styled.div`
  display: flex;
  padding: 150px 200px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1150px) {
    padding: 150px 100px;
  }

  @media (max-width: 950px) {
    padding: 150px 50px;
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div(
  (props: IProps) => `
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 2px solid ${props.theme.colors.blueMedium}
`
);

export const TextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  @media (max-width: 950px) {
    margin-left: 0px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 950px) {
    margin-top: 30px;
  }
`;

export const ProfileImg = styled.img.attrs({
  src: profile_img,
  alt: "Picture of Levy",
})`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;

export const Title = styled.h1(
  (props: IProps) => `
  color: ${props.theme.colors.white};
  font-family: "Roboto-Medium";
  font-size: 35px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: center;

  @media (max-width: 950px) {
    font-size: 25px;
  }
`
);

export const TitleHighlight = styled.span(
  (props: IProps) => `
  font-family: "Roboto-Medium";
  font-size: 35px;
  font-weight: 400;
  letter-spacing: 0em;
  color: ${props.theme.colors.blueMedium};

  @media (max-width: 950px) {
    font-size: 25px;
  }
`
);

export const Text = styled.span(
  (props: IProps) => `
  font-family: "Roboto-Light";
  font-size: 20px;
  letter-spacing: 0em;
  color: ${props.theme.colors.white};
  margin-top: 20px;

  @media (max-width: 950px) {
    font-size: 20px;
  }
`
);

export const HelloIcon = styled.img.attrs({
  src: hello_icon,
  alt: "Hello icon",
})`
  width: 30px;
  margin-right: 10px;

  @media (max-width: 330px) {
    display: none;
  }
`;
