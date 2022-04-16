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
  toggleId: string;
  onClick: (_id: string) => void;
}
const ItemOption: React.FC<ItemOptionProps> = ({ _id, toggleId, onClick }) => {
  return (
    <StyledItemOption
      className="item-menu"
      onClick={() => {
        if (toggleId === _id) onClick("");
        else onClick(_id);
      }}
    >
      ...
    </StyledItemOption>
  );
};

export default ItemOption;
