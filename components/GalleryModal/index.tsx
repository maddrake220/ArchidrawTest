import React, { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectGallery } from "../../hooks/useAppSelector";
import ModalArrow from "./ModalArrow";
import ModalContent from "./ModalContent";
import ModalTop from "./ModalTop";

interface StyledProps {
  isToggleModal: boolean;
}
const StyledGalleryModal = styled.div<StyledProps>`
  display: ${(props) => (props.isToggleModal ? "block" : "none")};
  width: 100%;
  z-index: 9999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
interface GalleryModalProps {
  isToggleModal: boolean;
  setIsToggleModal: Dispatch<SetStateAction<boolean>>;
}
const GalleryModal: React.FC<GalleryModalProps> = ({
  isToggleModal,
  setIsToggleModal,
}) => {
  const { currentModalId } = useSelector(selectGallery);
  return (
    <StyledGalleryModal isToggleModal={isToggleModal}>
      <ModalTop setIsToggleModal={setIsToggleModal} />
      <ModalContent modalId={currentModalId} />
      <ModalArrow />
    </StyledGalleryModal>
  );
};

export default GalleryModal;
