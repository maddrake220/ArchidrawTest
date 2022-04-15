import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { ItemProps } from ".";

interface StyledProps {
  checked: boolean;
}

const StyledItemSelect = styled.div<StyledProps>`
  position: absolute;
  z-index: 2;
  top: 5px;
  left: 10px;
  opacity: ${(props) => (props.checked ? 1 : 0)};
`;

const ItemSelect: React.FC<ItemProps> = ({ _id }) => {
  const [checked, setChecked] = useState(false);
  const onToggleHandler = useCallback(() => {
    setChecked((checked) => !checked);
  }, []);
  return (
    <StyledItemSelect className="item-menu" checked={checked}>
      <label>
        <input type="checkbox" checked={checked} onChange={onToggleHandler} />
      </label>
    </StyledItemSelect>
  );
};

export default ItemSelect;
