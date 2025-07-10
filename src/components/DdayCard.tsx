import React from "react";
import styled from "styled-components";

const DdayWrapper = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(224, 224, 224, 0.7);
  padding: 1.5rem 1.2rem;
  margin: 1.2rem 0;
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;
  color: #222;
  text-align: center;
`;

const DdayNumber = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  color: #222;
  margin: 0 0.5rem;
`;

const DdayLabel = styled.span`
  font-size: 1.1rem;
  color: #888;
`;

interface DdayCardProps {
  date: string; // YYYY-MM-DDTHH:mm:ss
}

const DdayCard: React.FC<DdayCardProps> = ({ date }) => {
  const [timeLeft, setTimeLeft] = React.useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  React.useEffect(() => {
    const target = new Date(date).getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);
  return (
    <DdayWrapper>
      <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 8 }}>
        D-DAY
      </div>
      <DdayNumber>{timeLeft.days}</DdayNumber>
      <DdayLabel>일</DdayLabel>
      <span style={{ margin: "0 0.3rem" }}></span>
      <DdayNumber style={{ fontSize: "1.3rem" }}>{timeLeft.hours}</DdayNumber>
      <DdayLabel>시간</DdayLabel>
      <span style={{ margin: "0 0.3rem" }}></span>
      <DdayNumber style={{ fontSize: "1.3rem" }}>{timeLeft.minutes}</DdayNumber>
      <DdayLabel>분</DdayLabel>
      <span style={{ margin: "0 0.3rem" }}></span>
      <DdayNumber style={{ fontSize: "1.3rem" }}>{timeLeft.seconds}</DdayNumber>
      <DdayLabel>초</DdayLabel>
    </DdayWrapper>
  );
};

export default DdayCard;
