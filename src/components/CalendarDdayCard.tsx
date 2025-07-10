import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
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

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.3rem;
  margin-top: 1rem;
`;

const DayCell = styled.div<{ $highlight?: boolean; $isHoliday?: boolean }>`
  padding: 0.5rem 0;
  border-radius: 50%;
  background: ${({ $highlight }) => ($highlight ? "#e0e0e0" : "transparent")};
  color: ${({ $highlight, $isHoliday }) =>
    $highlight ? "#222" : $isHoliday ? "#d32f2f" : "#444"};
  font-weight: ${({ $highlight }) => ($highlight ? 700 : 400)};
  transition: background 0.2s;
`;

const DdayBox = styled.div`
  margin: 2.2rem auto 0 auto;
  background: #f7f7f7;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(224, 224, 224, 0.3);
  padding: 1.2rem 0.5rem 1.1rem 0.5rem;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DdayTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.7rem;
`;

const DdaySection = styled.div`
  font-size: 1.35rem;
  font-weight: 700;
  color: #222;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: nowrap;
`;

const DdayGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const DdayNumber = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin: 0 0.18rem 0 0;
`;

const DdayLabel = styled.span`
  font-size: 1rem;
  color: #888;
  margin-top: 0.32em;
  display: inline-block;
`;

interface CalendarDdayCardProps {
  date: string; // YYYY-MM-DDTHH:mm:ss
}

// 2025년 1월 대한민국 공휴일 (신정)
const holidays = [1]; // 1월 1일

function getCalendarMatrix(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDay = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  const matrix: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) matrix.push(null);
  for (let d = 1; d <= daysInMonth; d++) matrix.push(d);
  while (matrix.length % 7 !== 0) matrix.push(null);
  return matrix;
}

const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

const CalendarDdayCard: React.FC<CalendarDdayCardProps> = ({ date }) => {
  const d = new Date(date);
  const matrix = getCalendarMatrix(d);
  const highlightDay = d.getDate();
  // D-DAY 계산
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
    <CardWrapper>
      <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 4 }}>
        {d.getFullYear()}년 {d.getMonth() + 1}월
      </div>
      <CalendarGrid>
        {weekDays.map((day, i) => (
          <DayCell
            key={day}
            style={{ fontWeight: 600, color: i === 0 ? "#d32f2f" : "#888" }}
          >
            {day}
          </DayCell>
        ))}
        {matrix.map((day, idx) => {
          // 일요일(첫번째 컬럼) 또는 공휴일이면 빨간색
          const col = idx % 7;
          const isHoliday =
            (col === 0 && day !== null) || holidays.includes(day ?? -1);
          return (
            <DayCell
              key={idx}
              $highlight={day === highlightDay && day !== null}
              $isHoliday={isHoliday}
            >
              {day ? day : ""}
            </DayCell>
          );
        })}
      </CalendarGrid>
      <DdayBox>
        <DdayTitle>D-DAY</DdayTitle>
        <DdaySection>
          <DdayGroup>
            <DdayNumber>{timeLeft.days}</DdayNumber>
            <DdayLabel>일</DdayLabel>
          </DdayGroup>
          <DdayGroup>
            <DdayNumber>{timeLeft.hours}</DdayNumber>
            <DdayLabel>시간</DdayLabel>
          </DdayGroup>
          <DdayGroup>
            <DdayNumber>{timeLeft.minutes}</DdayNumber>
            <DdayLabel>분</DdayLabel>
          </DdayGroup>
          <DdayGroup>
            <DdayNumber>{timeLeft.seconds}</DdayNumber>
            <DdayLabel>초</DdayLabel>
          </DdayGroup>
        </DdaySection>
      </DdayBox>
    </CardWrapper>
  );
};

export default CalendarDdayCard;
