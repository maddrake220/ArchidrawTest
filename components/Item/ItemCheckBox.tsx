import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ItemProps } from ".";
import useAppSelector, { selectGallery } from "../../hooks/useAppSelector";
import {
  selectGalleryItem,
  unSelectGalleryItem,
} from "../../redux/modules/gallery";

interface StyledProps {
  checked: boolean;
}

const StyledItemCheckBox = styled.div<StyledProps>`
  position: absolute;
  z-index: 2;
  top: 5px;
  left: 10px;
  opacity: ${(props) => (props.checked ? 1 : 0)};
`;

const ItemCheckBox: React.FC<ItemProps> = ({ _id }) => {
  const { selectedItem } = useAppSelector(selectGallery);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedItem !== null) setChecked(selectedItem.includes(_id));
  }, [selectedItem, _id]);

  const onToggleHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();
      setChecked((checked) => !checked);
      if (checked) {
        dispatch(unSelectGalleryItem(_id));
      } else {
        dispatch(selectGalleryItem(_id));
      }
    },
    [_id, checked, dispatch]
  );
  return (
    <StyledItemCheckBox className="item-menu" checked={checked}>
      <label>
        <input type="checkbox" checked={checked} onChange={onToggleHandler} />
      </label>
    </StyledItemCheckBox>
  );
};

export default ItemCheckBox;
