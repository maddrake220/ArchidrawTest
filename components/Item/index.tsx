import Image from "next/image";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import ItemImage from "./ItemImage";
import ItemOption from "./ItemOption";
import ItemCheckBox from "./ItemCheckBox";
import OptionDropdown from "../common/OptionDropdown";

const StyledItem = styled.div`
  position: relative;
  flex: 0 1 25%;
  width: 25%;
  .item-inner {
    background-color: rgba(0, 0, 0, 0.75);
    margin: 9px;
    border-radius: 4px;
    transition: box-shadow 0.25s ease 0s;
    overflow: hidden;
    cursor: pointer;
    .item-wrapper {
      position: relative;
      width: 100%;
      padding-top: 71%;
      &:hover .item-image {
        opacity: 0.5;
      }
      &:hover .item-menu {
        opacity: 1;
      }
    }
  }

  @media (min-width: 1600px) {
    flex: 0 1 20%;
    width: 20%;
  }
`;
export interface ItemProps {
  _id: string;
}

interface IItemProps extends ItemProps {
  toggleId: string;
  onToggleOption: (_id: string) => void;
}
const Item: React.FC<IItemProps> = ({ _id, toggleId, onToggleOption }) => {
  return (
    <StyledItem>
      <div className="item-inner">
        <div className="item-wrapper">
          <ItemCheckBox _id={_id} />
          <ItemOption _id={_id} toggleId={toggleId} onClick={onToggleOption} />
          <OptionDropdown _id={_id} toggleId={toggleId} />
          <ItemImage _id={_id} />
        </div>
      </div>
    </StyledItem>
  );
};

export default Item;
