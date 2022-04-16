import React, { ReactChild } from "react";
import styled from "styled-components";
interface StyledProps {
  toggleModal: boolean;
}
const StyledModalBack = styled.div<StyledProps>`
  display: ${(props) => (props.toggleModal ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  z-index: 10001;
`;

interface ModalBackProps {
  toggleModal: boolean;
  children: ReactChild;
}
const ModalBack: React.FC<ModalBackProps> = ({ toggleModal, children }) => {
  return (
    <StyledModalBack toggleModal={toggleModal}>{children}</StyledModalBack>
  );
};

export default ModalBack;
