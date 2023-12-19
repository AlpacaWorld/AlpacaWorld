import React from "react";

const ModalBody = ({ onClose }: any) => {
  return <div className="modal-body">
    <button onClick={onClose}>모달 닫기</button>
  </div>;
};

export default ModalBody;
