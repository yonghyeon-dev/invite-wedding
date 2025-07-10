import React from "react";
import styled from "styled-components";

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const CoupleImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 20px;
  display: block;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  background: transparent;
  padding: 0.7rem 0.5rem;
  border-radius: 16px;
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25), 0 1px 0 #222;
`;

const FinalThanksCard: React.FC = () => (
  <ImageBox>
    <CoupleImage
      src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&w=800"
      alt="신랑신부"
    />
    <OverlayText>
      축복해주셔서 감사합니다.
      <br />
      행복하게 잘 살겠습니다.
    </OverlayText>
  </ImageBox>
);

export default FinalThanksCard;
