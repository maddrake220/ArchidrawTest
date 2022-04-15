import React from "react";
import styled from "styled-components";
import { ItemProps } from ".";

const StyledItemOption = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 10px;
  color: white;
  opacity: 0;
`;
const ItemSelect: React.FC<ItemProps> = ({ _id }) => {
  return <StyledItemOption className="item-menu">...</StyledItemOption>;
};

export default ItemSelect;
