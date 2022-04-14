import React, { useCallback, useEffect, useState } from "react";
import { decrement, increment } from "../../redux/modules/counter";
import useAppSelector from "../../hooks/useAppSelector";
import { IState } from "../../redux/modules";
import styled from "styled-components";
import { URL } from "../../service/constants";
import { getGalleryThunk, Status } from "../../redux/modules/gallery";
import { useDispatch } from "react-redux";
import Image from "next/image";
import ItemList from "../ItemList";

export const selectGallery = (state: IState) => state.gallery;

const Gallery = () => {
  const { status, data } = useAppSelector(selectGallery);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGalleryThunk());
  }, [dispatch]);

  if (status === Status.failed) {
    return;
  }
  return (
    <div>
      <ItemList data={data} />
    </div>
  );
};

export default Gallery;
