import React, { useCallback, useState } from "react";
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
  const [toggleId, setToggleId] = useState("");

  const onToggleOption = useCallback((_id: string) => {
    setToggleId(_id);
  }, []);
  return (
    <StyledItemList>
      {data?.map((item) => (
        <Item
          key={item._id}
          _id={item._id}
          toggleId={toggleId}
          onToggleOption={onToggleOption}
        />
      ))}
    </StyledItemList>
  );
};

export default ItemList;
