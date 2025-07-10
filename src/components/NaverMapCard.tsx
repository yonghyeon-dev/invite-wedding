import React from "react";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";

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

const MapTitle = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const Address = styled.div`
  font-size: 0.98rem;
  color: #888;
  margin-bottom: 10px;
`;

const MAP_LAT = 37.513398;
const MAP_LNG = 127.03483;
const PLACE_NAME = "메리스에이프럴 하우스웨딩홀";
const ADDRESS = "서울특별시 강남구 봉은사로16길 31 1층";

const KakaoMapCard: React.FC = () => {
  return (
    <CardWrapper>
      <MapTitle>오시는 길</MapTitle>
      <Address>
        {ADDRESS} <br />
        {PLACE_NAME}
      </Address>
      <div
        style={{
          width: "100%",
          height: 260,
          borderRadius: 16,
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <Map
          center={{ lat: MAP_LAT, lng: MAP_LNG }}
          level={3}
          style={{ width: "100%", height: "100%" }}
        >
          <MapMarker position={{ lat: MAP_LAT, lng: MAP_LNG }}>
            <div
              style={{ padding: "4px 8px", fontSize: "0.95rem", color: "#222" }}
            >
              {PLACE_NAME}
            </div>
          </MapMarker>
        </Map>
      </div>
    </CardWrapper>
  );
};

export default KakaoMapCard;
