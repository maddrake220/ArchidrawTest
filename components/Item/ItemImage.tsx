import Image from "next/image";
import React from "react";
import { ItemProps } from ".";

interface ItemImageProps extends ItemProps {
  onClick: (id: string) => void;
}
const ItemImage: React.FC<ItemImageProps> = ({ _id, onClick }) => {
  return (
    <div
      onClick={() => {
        onClick(_id);
      }}
    >
      <Image
        className="item-image"
        layout="fill"
        src={_id}
        alt={_id}
        objectFit="cover"
      />
    </div>
  );
};

export default ItemImage;
