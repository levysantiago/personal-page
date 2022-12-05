import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 120px;
  position: relative;
  background: linear-gradient(
    275.38deg,
    #bf83ee 3.12%,
    #9249cc 28.35%,
    #7a33b3 50.67%,
    #6f25aa 77.17%,
    #4c117a 100%
  );
`;

export const Title = styled.span`
  font-family: Arial;
  font-size: 25px;
  font-weight: 700;
  line-height: 33px;
  text-align: left;
  color: #bf83ef;
  margin-bottom: 30px;
`;

export const TitleContinuation = styled(Title)`
  color: #1e1c1f;
`;

export const LeftContent = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
`;
