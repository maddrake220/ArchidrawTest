import React, { ReactChild } from "react";
import styled from "styled-components";

const StyledCloseButton = styled.button`
  position: relative;
  box-sizing: border-box;
  height: 32px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 20px;
  border: none;
  border-radius: 4px;
  appearance: none;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  fill: rgb(75, 75, 75);
  color: rgb(75, 75, 75);
  background: rgba(238, 238, 238, 0.8);
  transition: background-color 0.16s ease 0s, color 0.16s ease 0s;
  cursor: pointer;
`;

interface ButtonProps {
  children: ReactChild;
  onClick: () => void;
}
const CloseButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledCloseButton onClick={onClick}>{children}</StyledCloseButton>;
};

export default CloseButton;
