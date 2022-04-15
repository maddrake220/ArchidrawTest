import React from "react";
import styled from "styled-components";
import { ItemType } from "../../redux/modules/gallery";
import Item from "../Item";

const StyledItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 7px;
`;
interface ItemListProps {
  data: ItemType[] | null;
}
const ItemList: React.FC<ItemListProps> = ({ data }) => {
  return (
    <StyledItemList>
      {data?.map((item) => (
        <Item key={item._id} _id={item._id} />
      ))}
    </StyledItemList>
  );
};

export default ItemList;
