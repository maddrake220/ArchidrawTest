import React from "react";
import Gallery from "../components/Gallery";
import useAppSelector from "../hooks/useAppSelector";
import { IState } from "../redux/modules";

export const selectCount = (state: IState) => state.counter.count;
const GalleryContainer = () => {
  const count = useAppSelector(selectCount);
  console.log(count);
  return <Gallery />;
};

export default GalleryContainer;
