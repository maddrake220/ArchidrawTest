import React from "react";
import { ItemType } from "../../redux/modules/gallery";
import Item from "../Item";

interface ItemListProps {
  data: ItemType[] | null;
}
const ItemList: React.FC<ItemListProps> = ({ data }) => {
  return (
    <div>
      {data?.map((item) => (
        <Item key={item._id} _id={item._id} />
      ))}
    </div>
  );
};

export default ItemList;
