import Image from "next/image";
import React from "react";
import styled from "styled-components";

const StyledModalContent = styled.div`
  background-color: rgb(250, 250, 250);
  position: absolute;
  left: 0;
  right: 0;
  top: 36px;
  bottom: 0;
`;

interface ModalContentProps {
  modalId: string;
}
const ModalContent: React.FC<ModalContentProps> = ({ modalId }) => {
  return (
    <StyledModalContent>
      {modalId && (
        <Image
          className="item-image"
          layout="fill"
          src={modalId}
          alt={modalId}
          objectFit="contain"
        />
      )}
    </StyledModalContent>
  );
};

export default ModalContent;
