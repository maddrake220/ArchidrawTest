import React, { useCallback } from "react";
import styled from "styled-components";
import useAppSelector, { selectGallery } from "../../hooks/useAppSelector";
import downloadAFile from "../../service/downloadAFile";
import CustomButton from "./CustomButton";

const StyledGalleryMenu = styled.div`
  margin-left: auto;
  text-transform: initial;
  flex: 1 1 0%;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  gap: 0 10px;
`;
const GalleryMenu = () => {
  const { selectedItem } = useAppSelector(selectGallery);

  const onClickDownloadAll = useCallback(() => {
    downloadAFile(selectedItem);
  }, [selectedItem]);

  const onClickDeleteAll = useCallback(() => {}, []);

  const onClickDeleteAllSelect = useCallback(() => {}, []);
  return (
    <StyledGalleryMenu>
      {selectedItem && selectedItem.length > 0 && (
        <>
          <CustomButton onClick={onClickDownloadAll}>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="download"
              width="1rem"
              height="1rem"
              fill="currentColor"
            >
              <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
            </svg>
          </CustomButton>
          <CustomButton onClick={onClickDeleteAll}>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="download"
              width="1rem"
              height="1rem"
              fill="currentColor"
            >
              <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
            </svg>
          </CustomButton>
          <CustomButton onClick={onClickDeleteAllSelect}>
            선택 취소
          </CustomButton>
        </>
      )}
    </StyledGalleryMenu>
  );
};

export default GalleryMenu;
