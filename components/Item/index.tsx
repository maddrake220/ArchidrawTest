import Image from "next/image";
import React from "react";
interface ItemProps {
  _id: string;
}

const Item: React.FC<ItemProps> = ({ _id }) => {
  return <Image src={_id} alt={_id} width={300} height={300} />;
};

export default Item;
