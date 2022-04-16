import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteGalleryItem } from "../../redux/modules/gallery";
import downloadFile from "../../service/downloadFile";
import DeleteConfirm from "./DeleteConfirm";
import ModalBack from "./ModalBack";

interface StyledDropdownProps {
  _id: string;
  toggleId: string;
}
const StyledDropdown = styled.div<StyledDropdownProps>`
  display: ${(props) => (props._id === props.toggleId ? "block" : "none")};
  position: absolute;
  right: 30px;
  top: 20px;
  z-index: 999;
  width: 80px;
  padding: 4px 0;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 2px;
  outline: none;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  .option-dropdown-item {
    clear: both;
    margin: 0;
    padding: 5px 12px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

interface OptionDropdownProps {
  _id: string;
  toggleId: string;
}
const OptionDropdown: React.FC<OptionDropdownProps> = ({ _id, toggleId }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const dispatch = useDispatch();

  const onClickDownload = useCallback(() => {
    downloadFile(_id);
  }, [_id]);

  const onClickDelete = useCallback(() => {
    setToggleModal((toggle) => !toggle);
  }, []);

  const onConfirm = useCallback(() => {
    dispatch(deleteGalleryItem(_id));
  }, [dispatch, _id]);
  return (
    <StyledDropdown _id={_id} toggleId={toggleId}>
      <div className="option-dropdown-item" onClick={onClickDownload}>
        다운로드
      </div>
      <div className="option-dropdown-item" onClick={onClickDelete}>
        삭제
      </div>
      <ModalBack toggleModal={toggleModal}>
        <DeleteConfirm onConfirm={onConfirm} onReturn={onClickDelete} />
      </ModalBack>
    </StyledDropdown>
  );
};

export default OptionDropdown;
