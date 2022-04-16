import Image from "next/image";
import React from "react";
import styled from "styled-components";
import CloseButton from "../common/CloseButton";

interface StyledProps {
  isToggleModal: boolean;
}
const StyledGalleryModal = styled.div<StyledProps>`
  display: ${(props) => (props.isToggleModal ? "block" : "none")};

  .gallery-modal-top {
    width: 100%;
    height: 36px;
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .gallery-modal-inner {
    width: 100%;
    background-color: rgb(250, 250, 250);
    position: absolute;
    left: 0;
    right: 0;
    top: 36px;
    bottom: 0;
  }
`;
interface GalleryModalProps {
  modalId: string;
  isToggleModal: boolean;
  setIsToggleModal: any;
}
const GalleryModal: React.FC<GalleryModalProps> = ({
  modalId,
  isToggleModal,
  setIsToggleModal,
}) => {
  console.log("idis", typeof modalId);
  return (
    <StyledGalleryModal isToggleModal={isToggleModal}>
      <div className="gallery-modal-top">
        <CloseButton
          onClick={() => {
            setIsToggleModal(false);
          }}
        >
          X
        </CloseButton>
      </div>
      <div className="gallery-modal-inner">
        {modalId && (
          <Image
            className="item-image"
            layout="fill"
            src={modalId}
            alt={modalId}
            objectFit="contain"
          />
        )}
      </div>
    </StyledGalleryModal>
  );
};

export default GalleryModal;
