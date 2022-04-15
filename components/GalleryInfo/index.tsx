import React from "react";
import styled from "styled-components";
import GalleryMenu from "./GalleryMenu";

const StyledGalleryInfo = styled.header`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 12px;
  font-size: 14px;
  color: rgb(153, 153, 153);
  .selected-image {
    flex: 1 1 0%;
    margin-right: auto;
    color: rgb(102, 102, 102);
    text-transform: lowercase;
  }
  h1 {
    text-align: center;
    flex: 1 1 0%;
    font-size: 18px;
    font-weight: 700;
    line-height: 56px;
    text-transform: capitalize;
    color: rgb(45, 50, 54);
  }
`;
const GalleryInfo = () => {
  return (
    <StyledGalleryInfo>
      <div className="selected-image">
        <div>1 개의 렌더 이미지 선택됨</div>
        <div>모두 선택</div>
      </div>
      <h1>갤러리</h1>
      <GalleryMenu />
    </StyledGalleryInfo>
  );
};

export default GalleryInfo;
