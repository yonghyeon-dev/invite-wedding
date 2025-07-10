import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=800&q=80",
    alt: "갤러리1",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=800&q=80",
    alt: "갤러리2",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=800&q=80",
    alt: "갤러리3",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=800&q=80",
    alt: "갤러리4",
  },
];

const GalleryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

const GalleryImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid #eee;
  cursor: pointer;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalImgBox = styled(motion.div)`
  position: relative;
  max-width: 92vw;
  max-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalImg = styled.img`
  max-width: 80vw;
  max-height: 70vh;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  background: #fff;
  display: block;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  backdrop-filter: none;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.25rem;
  color: #444;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(180, 180, 180, 0.1);
  transition: background 0.18s, color 0.18s, box-shadow 0.18s,
    backdrop-filter 0.18s;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  &:hover,
  &:focus-visible,
  &:active {
    background: rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(4px);
    color: #222;
    box-shadow: 0 4px 16px rgba(180, 180, 180, 0.16);
  }
`;

const NavButtonLeft = styled(NavButton)`
  left: 14px;
`;
const NavButtonRight = styled(NavButton)`
  right: 14px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  left: 12px;
  background: transparent;
  backdrop-filter: none;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1.05rem;
  color: #444;
  cursor: pointer;
  z-index: 3;
  box-shadow: 0 2px 8px rgba(180, 180, 180, 0.1);
  transition: background 0.18s, color 0.18s, box-shadow 0.18s,
    backdrop-filter 0.18s;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  &:hover,
  &:focus-visible,
  &:active {
    background: rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(4px);
    color: #222;
    box-shadow: 0 4px 16px rgba(180, 180, 180, 0.16);
  }
`;

interface GalleryCardProps {
  index?: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ index = 0 }) => {
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const openModal = (idx: number) => setModalIdx(idx);
  const closeModal = () => setModalIdx(null);
  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIdx((idx) =>
      idx !== null ? (idx + images.length - 1) % images.length : null
    );
  };
  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIdx((idx) => (idx !== null ? (idx + 1) % images.length : null));
  };
  return (
    <Card key="gallery" index={index}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontWeight: 600, marginBottom: 10, color: "#222" }}>
          갤러리
        </div>
        <GalleryGrid>
          {images.map((img, i) => (
            <GalleryImg
              key={img.src}
              src={img.src}
              alt={img.alt}
              onClick={() => openModal(i)}
            />
          ))}
        </GalleryGrid>
      </div>
      <AnimatePresence>
        {modalIdx !== null && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalImgBox
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={closeModal} aria-label="닫기">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.7 4.7L11.3 11.3M11.3 4.7L4.7 11.3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </CloseButton>
              {images.length > 1 && (
                <>
                  <NavButtonLeft onClick={prevImg} aria-label="이전">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 3.5L6 8L10.5 12.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </NavButtonLeft>
                  <NavButtonRight onClick={nextImg} aria-label="다음">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 3.5L10 8L5.5 12.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </NavButtonRight>
                </>
              )}
              <motion.div
                key={modalIdx}
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <ModalImg
                  src={images[modalIdx].src}
                  alt={images[modalIdx].alt}
                />
              </motion.div>
            </ModalImgBox>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default GalleryCard;
