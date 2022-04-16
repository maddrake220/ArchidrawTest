import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectGallery } from "../../hooks/useAppSelector";
import { deleteGalleryItem } from "../../redux/modules/gallery";
import downloadAFile from "../../service/downloadFile";
import CustomButton from "../GalleryInfo/CustomButton";

const StyledModalTopMenu = styled.div`
  display: flex;
  gap: 0 5px;
`;
const ModalTopMenu = () => {
  const { currentModalId } = useSelector(selectGallery);
  const dispatch = useDispatch();

  const onClickDownload = useCallback(() => {
    downloadAFile(currentModalId);
  }, [currentModalId]);

  const onClickDelete = useCallback(() => {
    dispatch(deleteGalleryItem(currentModalId));
  }, [currentModalId, dispatch]);

  return (
    <StyledModalTopMenu>
      <CustomButton onClick={onClickDownload}>Download</CustomButton>
      <CustomButton onClick={onClickDelete}>Delete</CustomButton>
    </StyledModalTopMenu>
  );
};

export default ModalTopMenu;
