import React from "react";
import styled from "styled-components";

const CalendarWrapper = styled.div`
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

const DayCell = styled.div<{ highlight?: boolean }>`
  padding: 0.5rem 0;
  border-radius: 50%;
  background: ${({ highlight }) => (highlight ? "#e0e0e0" : "transparent")};
  color: ${({ highlight }) => (highlight ? "#222" : "#444")};
  font-weight: ${({ highlight }) => (highlight ? 700 : 400)};
  transition: background 0.2s;
`;

interface CalendarCardProps {
  date: string; // YYYY-MM-DD
}

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

const CalendarCard: React.FC<CalendarCardProps> = ({ date }) => {
  const d = new Date(date);
  const matrix = getCalendarMatrix(d);
  const highlightDay = d.getDate();
  return (
    <CalendarWrapper>
      <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 4 }}>
        {d.getFullYear()}년 {d.getMonth() + 1}월
      </div>
      <CalendarGrid>
        {weekDays.map((day) => (
          <DayCell key={day} style={{ fontWeight: 600, color: "#888" }}>
            {day}
          </DayCell>
        ))}
        {matrix.map((day, idx) => (
          <DayCell key={idx} highlight={day === highlightDay && day !== null}>
            {day ? day : ""}
          </DayCell>
        ))}
      </CalendarGrid>
    </CalendarWrapper>
  );
};

export default CalendarCard;
