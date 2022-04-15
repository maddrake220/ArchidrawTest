import React, { useEffect, useState } from "react";
import useAppSelector, { selectGallery } from "../../hooks/useAppSelector";
import { IState } from "../../redux/modules";
import { getGalleryThunk } from "../../redux/modules/gallery";
import { useDispatch } from "react-redux";
import ItemList from "../ItemList";
import GalleryInfo from "../GalleryInfo";
import styled from "styled-components";

const StyledGallery = styled.section`
  .top-bar {
    position: relative;
    width: 100vw;
    min-width: 1024px;
    padding: 8px;
    height: 48px;
    background: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(235, 235, 235, 0.8);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .inner-container {
    margin: auto 32px;
  }
`;

const Gallery = () => {
  const { data } = useAppSelector(selectGallery);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGalleryThunk());
  }, [dispatch]);

  return (
    <StyledGallery>
      <div className="top-bar"></div>
      <div className="inner-container">
        <GalleryInfo />
        <ItemList data={data} />
      </div>
    </StyledGallery>
  );
};

export default Gallery;
