import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Card from "./components/Card";
import { AnimatePresence } from "framer-motion";
import MainCard from "./components/MainCard";
import CalendarDdayCard from "./components/CalendarDdayCard";
import FinalThanksCard from "./components/FinalThanksCard";
import { motion } from "framer-motion";
import KakaoMapCard from "./components/NaverMapCard";
import GalleryCard from "./components/GalleryCard";

const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
    color: #222;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 1.5rem 0 3rem 0;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <MainCard />
        <AnimatePresence>
          {/* 초대 문구 카드 */}
          <Card key="intro" index={0}>
            <div style={{ textAlign: "center" }}>
              {[
                "내가 사랑하는 사람은",
                "슬픔을 나누어 가질 줄 아는 사람",
                "기쁨을 함께 나눌 줄 아는 사람",
                "정호승, <내가 사랑하는 사람>",
              ].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + i * 0.18,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  style={{
                    fontSize: i === 3 ? "0.95rem" : "1.1rem",
                    color: i === 3 ? "#bbb" : "#222",
                    fontWeight: i === 3 ? 400 : 400,
                    marginBottom: i === 3 ? 8 : 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 1.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  marginTop: 18,
                  fontWeight: 500,
                  fontSize: "1.15rem",
                  color: "#222",
                }}
              >
                소중한 분들을 초대합니다
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 1.3,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{ fontSize: "1rem", color: "#888", marginTop: 8 }}
              >
                사랑이 머무는 계절에
                <br />
                두 사람이 인생의 반려자가 되어
                <br />
                새로운 시작을 함께 하려 합니다.
                <br />
                따뜻한 축복으로 함께해 주시면 감사하겠습니다.
              </motion.div>
            </div>
          </Card>
          {/* 갤러리 카드 */}
          <GalleryCard index={1} />
          {/* 캘린더+D-DAY 통합 카드 */}
          <Card key="calendar" index={2}>
            <CalendarDdayCard date="2026-03-07T13:30:00" />
          </Card>
          {/* 오시는 길 카드 */}
          <Card key="map" index={3}>
            <KakaoMapCard />
          </Card>
          {/* 예식 정보 카드 */}
          <Card key="info" index={4}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 600, marginBottom: 10, color: "#222" }}>
                예식 정보 및 안내사항
              </div>
              <div style={{ color: "#888" }}>
                포토부스, 식사, 주차 안내 등 다양한 편의가 준비되어 있습니다.
              </div>
            </div>
          </Card>
          {/* 방명록 카드 */}
          <Card key="guestbook" index={5}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 600, marginBottom: 10, color: "#222" }}>
                방명록
              </div>
              <input
                type="text"
                placeholder="축하 메시지를 남겨주세요"
                style={{
                  width: "80%",
                  padding: 8,
                  borderRadius: 8,
                  border: "1px solid #eee",
                  marginBottom: 8,
                  background: "#fafafa",
                  color: "#222",
                }}
              />
              <button
                style={{
                  background: "#eee",
                  color: "#222",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 18px",
                  fontWeight: 500,
                }}
              >
                작성하기
              </button>
            </div>
          </Card>
          {/* 계좌 안내 카드 */}
          <Card key="account" index={6}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 600, marginBottom: 12, color: "#222" }}>
                마음 전하실 곳
              </div>
              <div style={{ marginBottom: 8 }}>
                신랑측:{" "}
                <span style={{ color: "#888" }}>
                  하나 123456-78-90000 (김신랑)
                </span>
              </div>
              <div>
                신부측:{" "}
                <span style={{ color: "#888" }}>
                  농협 1234-5678-98765 (이신부)
                </span>
              </div>
            </div>
          </Card>
          {/* 마무리 인사 카드 (신랑신부 사진+오버랩 텍스트) */}
          <Card key="thanks" index={7}>
            <FinalThanksCard />
          </Card>
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default App;
