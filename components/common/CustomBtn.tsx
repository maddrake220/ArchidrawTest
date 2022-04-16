import React, { ReactChild } from "react";
import styled from "styled-components";

const StyledCustomBtn = styled.button`
  width: 392px;
  height: 48px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: auto 24px;
  border: 0;
  border-radius: 4px;
  text-transform: uppercase;
  line-height: 48px !important;
  cursor: pointer;
`;
interface CustomBtnProps {
  children: ReactChild;
  style: {};
  onClick: () => void;
}
const CustomBtn: React.FC<CustomBtnProps> = ({ children, style, onClick }) => {
  return (
    <StyledCustomBtn style={style} onClick={onClick}>
      {children}
    </StyledCustomBtn>
  );
};

export default CustomBtn;
