import React, { useCallback } from "react";
import useAppDispatch from "../../hooks/useAppDispatch";
import { decrement, increment } from "../../redux/modules/counter";

const Gallery = () => {
  const dispatch = useAppDispatch();
  const onClickPlusHandler = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);
  const onClickMinusHandler = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);
  return (
    <div>
      <button onClick={onClickPlusHandler}>+</button>
      <button onClick={onClickMinusHandler}>-</button>
    </div>
  );
};

export default Gallery;
