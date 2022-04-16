import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import CloseButton from "../common/CloseButton";
import ModalTopMenu from "./ModalTopMenu";

const StyledModalTop = styled.div`
  height: 36px;
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
`;
interface ModalTopProps {
  setIsToggleModal: Dispatch<SetStateAction<boolean>>;
}
const ModalTop: React.FC<ModalTopProps> = ({ setIsToggleModal }) => {
  return (
    <StyledModalTop>
      <CloseButton
        onClick={() => {
          setIsToggleModal(false);
        }}
      >
        X
      </CloseButton>
      <ModalTopMenu setIsToggleModal={setIsToggleModal} />
    </StyledModalTop>
  );
};

export default ModalTop;
