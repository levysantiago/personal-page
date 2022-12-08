import { GenericContainer, ResponsiveTitle } from "components/styles";
import { ITheme } from "components/Theme";
import styled from "styled-components";

interface IHardSkillsProps {
  theme: ITheme;
}

export const Container = styled(GenericContainer)(
  (props: IHardSkillsProps) => `
  display: flex;
  flex-direction: column;
  background: ${props.theme.colors.purpleGradient}
`
);

export const Title = styled(ResponsiveTitle)(
  (props: IHardSkillsProps) => `
  font-family: ${props.theme?.fonts.title};
  font-weight: 700;
  line-height: 33px;
  text-align: left;
  color: ${props.theme?.colors.purbleLight};
  margin-bottom: 30px;
`
);

export const TitleContinuation = styled(Title)(
  (props: IHardSkillsProps) => `
  color: ${props.theme?.colors.black};
`
);

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px 10px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const RightContent = styled(LeftContent)`
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
`;
