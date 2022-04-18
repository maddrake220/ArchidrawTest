import Image from "next/image";
import React from "react";
import styled from "styled-components";
import CustomBtn from "./CustomBtn";

const StyledDeleteConfirm = styled.div`
  position: absolute !important;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 440px;
  height: 530px;
  -webkit-box-shadow: 0px 2px 32px rgb(22 65 76 / 8%);
  -moz-box-shadow: 0px 2px 32px rgba(22, 65, 76, 0.08);
  box-shadow: 0px 2px 32px rgb(22 65 76 / 8%);
  background: #fdfdfd;
  border-radius: 16px;
  overflow: hidden;
  .popup-message {
    margin: 24px auto;
    text-align: center;
    h5 {
      font-size: 24px;
      line-height: 36px;
      letter-spacing: normal;
    }
    p {
      user-select: none;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.5px;
      font-weight: 300;
      color: #8b8b8b;
      text-transform: none;
      white-space: pre-line;
    }
  }
`;

interface DeleteConfirmProps {
  onConfirm: () => void;
  onReturn: () => void;
}
const DeleteConfirm: React.FC<DeleteConfirmProps> = ({
  onConfirm,
  onReturn,
}) => {
  return (
    <StyledDeleteConfirm>
      <div>
        <Image
          src={
            "https://resources.archisketch.com/editor/assets_test/img/pop-up/gallery_delete@2x.gif"
          }
          alt="popup-image"
          width="440px"
          height="220px"
        />
      </div>
      <div className="popup-message">
        <h5>Confirm To Delete</h5>
        <p>Are you sure you want to delete this image? </p>
        <CustomBtn
          style={{
            backgroundColor: "#6db2c5",
            color: "#fbfbfb",
            marginBottom: "16px ",
          }}
          onClick={onConfirm}
        >
          DELETE
        </CustomBtn>
        <CustomBtn
          style={{
            backgroundColor: "#fbfbfb",
            color: "#6db2c5",
          }}
          onClick={onReturn}
        >
          RETURN
        </CustomBtn>
      </div>
    </StyledDeleteConfirm>
  );
};

export default DeleteConfirm;
