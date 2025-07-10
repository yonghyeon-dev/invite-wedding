import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardContainer = styled(motion.div)`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(224, 224, 224, 0.7);
  padding: 2rem 1.5rem;
  margin: 1.2rem 0;
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;
  color: #222;
`;

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  index?: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      delay: i * 0.15,
    },
  }),
};

const Card: React.FC<CardProps> = ({
  children,
  style,
  className,
  index = 0,
}) => (
  <CardContainer
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    style={style}
    className={className}
  >
    {children}
  </CardContainer>
);

export default Card;
