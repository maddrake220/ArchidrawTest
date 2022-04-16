import React from "react";
import styled from "styled-components";

const StyledCustomButton = styled.button`
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9e7e9;
`;

interface ICustomButton {
  children: any;
  onClick: () => void;
}
const CustomButton: React.FC<ICustomButton> = ({ children, onClick }) => {
  return <StyledCustomButton onClick={onClick}>{children}</StyledCustomButton>;
};

export default CustomButton;
