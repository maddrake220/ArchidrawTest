import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useAppSelector, { selectGallery } from "../../hooks/useAppSelector";
import { galleryNext, galleryPrev } from "../../redux/modules/gallery";

const StyledModalArrow = styled.div`
  position: absolute;
  z-index: 10000;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  height: 40px;
  font-size: 28px;
  transition: all 0.32s ease 0s;
  cursor: pointer;

  .arrow {
    border-radius: 10px;
    position: absolute;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(243, 244, 244);
    width: 40px;
    height: 40px;
  }
  .prev-arrow {
    left: 20px;
  }

  .next-arrow {
    right: 20px;
  }
`;
const ModalArrow = () => {
  const { data, currentIndex } = useAppSelector(selectGallery);

  const dispatch = useDispatch();
  const onClickPrev = useCallback(() => {
    dispatch(galleryPrev());
  }, [dispatch]);
  const onClickNext = useCallback(() => {
    dispatch(galleryNext());
  }, [dispatch]);
  return (
    <StyledModalArrow>
      {currentIndex > 0 && (
        <div className="prev-arrow arrow" onClick={onClickPrev}>
          {"<"}
        </div>
      )}

      {data && currentIndex < data.length - 1 && (
        <div className="next-arrow arrow" onClick={onClickNext}>
          {">"}
        </div>
      )}
    </StyledModalArrow>
  );
};

export default ModalArrow;
