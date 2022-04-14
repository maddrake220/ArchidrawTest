import React, { useCallback, useEffect, useState } from "react";
import { decrement, increment } from "../../redux/modules/counter";
import useAppSelector from "../../hooks/useAppSelector";
import { IState } from "../../redux/modules";
import styled from "styled-components";
import { URL } from "../../service/constants";
import { getGalleryThunk, Status } from "../../redux/modules/gallery";
import { useDispatch } from "react-redux";
import Image from "next/image";

export const selectGallery = (state: IState) => state.gallery;

const TestStyled = styled.div`
  button {
    background-color: red;
  }
`;
interface ItemType {
  _id: string;
}

const Item: React.FC<ItemType> = ({ _id }) => {
  return <Image src={_id} alt={_id} width={300} height={300} />;
};

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
      {data && (
        <ul>
          {data.map((item) => (
            <Item key={item._id} _id={item._id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Gallery;
