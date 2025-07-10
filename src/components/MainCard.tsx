import React from "react";
import styled, { createGlobalStyle } from "styled-components";

// 폰트 import는 index.html <head>에 <link>로 추가하세요.
const FontStyle = createGlobalStyle``;

const MainCardWrapper = styled.div`
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 6px 32px rgba(224, 224, 224, 0.7);
  padding: 36px 0 0 0;
  margin: 0 0 2rem 0;
  width: 100%;
  max-width: 440px;
  box-sizing: border-box;
  overflow: hidden;
`;

const DateScriptTop = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.5rem;
  color: #888;
  font-weight: 700;
  margin-bottom: 18px;
  letter-spacing: 0.01em;
`;

const MainImageBox = styled.div`
  position: relative;
  padding: 0 18px;
  background: #fff;
`;

const MainImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
  border-radius: 24px 24px 24px 24px;
`;

const InfoSection = styled.div`
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  text-align: center;
`;

const DateText = styled.div`
  font-size: 1.1rem;
  color: #888;
  margin-bottom: 0.5rem;
`;

const NameText = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  color: #222;
  margin-bottom: 0.3rem;
`;

const PlaceText = styled.div`
  font-size: 1rem;
  color: #888;
`;

const MainCard: React.FC = () => {
  return (
    <>
      <FontStyle />
      <MainCardWrapper>
        <DateScriptTop>2026.03.07</DateScriptTop>
        <MainImageBox>
          <MainImage
            src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&w=800"
            alt="신랑신부"
          />
        </MainImageBox>
        <InfoSection>
          <DateText>2026년 3월 7일 토요일 오후 1시 30분</DateText>
          <NameText>김신랑 & 이신부</NameText>
          <PlaceText>메리스에이프럴 하우스웨딩홀</PlaceText>
        </InfoSection>
      </MainCardWrapper>
    </>
  );
};

export default MainCard;
