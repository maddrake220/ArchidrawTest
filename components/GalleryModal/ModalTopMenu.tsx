import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectGallery } from "../../hooks/useAppSelector";
import { deleteGalleryItem } from "../../redux/modules/gallery";
import downloadAFile from "../../service/downloadFile";
import DeleteConfirm from "../common/DeleteConfirm";
import ModalBack from "../common/ModalBack";
import CustomButton from "../GalleryInfo/CustomButton";

const StyledModalTopMenu = styled.div`
  display: flex;
  gap: 0 5px;
`;
interface ModalTopProps {
  setIsToggleModal: Dispatch<SetStateAction<boolean>>;
}
const ModalTopMenu: React.FC<ModalTopProps> = ({ setIsToggleModal }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const { currentModalId } = useSelector(selectGallery);
  const dispatch = useDispatch();

  const onClickDownload = useCallback(() => {
    downloadAFile(currentModalId);
  }, [currentModalId]);

  const onClickDelete = useCallback(() => {
    setToggleModal(true);
  }, [setToggleModal]);

  const onConfirm = useCallback(() => {
    setIsToggleModal(false);
    dispatch(deleteGalleryItem(currentModalId));
    setToggleModal(false);
  }, [setToggleModal, currentModalId, dispatch, setIsToggleModal]);

  const onReturn = useCallback(() => {
    setToggleModal(false);
  }, [setToggleModal]);

  return (
    <StyledModalTopMenu>
      <CustomButton onClick={onClickDownload}>Download</CustomButton>
      <CustomButton onClick={onClickDelete}>Delete</CustomButton>
      <ModalBack toggleModal={toggleModal}>
        <DeleteConfirm onConfirm={onConfirm} onReturn={onReturn} />
      </ModalBack>
    </StyledModalTopMenu>
  );
};

export default ModalTopMenu;
