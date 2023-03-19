import { ResponsiveDescription, ResponsiveTopic } from "components/styles";
import styled from "styled-components";

interface ISideTopicProps {
  titleColor?: string;
  descriptionColor?: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0px;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const TitleDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;

  @media (max-width: 650px) {
    margin-left: 0px;
  }
`;

export const Title = styled(ResponsiveTopic)(
  (props: ISideTopicProps) => `
  font-family: "Roboto-Medium";
  font-weight: 700;
  line-height: 33px;
  color: ${props.titleColor || "#fafafa"};
  margin-bottom: 20px;
`
);

export const Description = styled(ResponsiveDescription)(
  (props: ISideTopicProps) => `
  font-family: "Roboto-Regular";
  font-weight: 300;
  line-height: 22px;
  color: ${props.descriptionColor || "#fafafa"};
  margin-bottom: 20px;
  text-align: justify;
`
);
