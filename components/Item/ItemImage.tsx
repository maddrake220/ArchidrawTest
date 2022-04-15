import Image from "next/image";
import React from "react";
import { ItemProps } from ".";

const ItemImage: React.FC<ItemProps> = ({ _id }) => {
  return (
    <Image
      className="item-image"
      layout="fill"
      src={_id}
      alt={_id}
      objectFit="cover"
    />
  );
};

export default ItemImage;
