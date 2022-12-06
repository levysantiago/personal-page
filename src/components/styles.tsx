import styled from "styled-components";

export const GenericContainer = styled.div`
  padding: 100px 120px;

  @media (max-width: 1024px) {
    padding: 50px 100px;
  }

  @media (max-width: 768px) {
    padding: 50px 50px;
  }

  @media (max-width: 300px) {
    padding: 50px 20px;
  }
`;

export const ResponsiveDescription = styled.span`
  font-size: 15px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 300px) {
    font-size: 12px;
  }
`;

export const ResponsiveTitle = styled.span`
  font-size: 30px;

  @media (max-width: 1024px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 300px) {
    font-size: 18px;
  }
`;

export const ResponsiveTopic = styled.span`
  font-size: 20px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

export const ResponsiveCardTitle = styled.span`
  font-size: 16px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

export const ResponsiveSmallText = styled.span`
  font-size: 12px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 300px) {
    font-size: 12px;
  }
`;
