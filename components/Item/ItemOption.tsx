import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { ItemProps } from ".";
import OptionDropdown from "../common/OptionDropdown";

const StyledItemOption = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 10px;
  color: white;
  opacity: 0;
`;
interface ItemOptionProps extends ItemProps {
  onClick: (_id: string) => void;
}
const ItemSelect: React.FC<ItemOptionProps> = ({ _id, onClick }) => {
  return (
    <StyledItemOption
      className="item-menu"
      onClick={() => {
        onClick(_id);
      }}
    >
      ...
    </StyledItemOption>
  );
};

export default ItemSelect;
