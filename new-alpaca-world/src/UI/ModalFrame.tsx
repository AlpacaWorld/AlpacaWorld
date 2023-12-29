import React from "react";
import { useModal } from "../hooks/useModal";

const ModalBody = () => {
  const { actions } = useModal();
  return (
    <div className="modal-frame">
      <button onClick={actions.close}>모달 닫기</button>
    </div>
  );
};

export default ModalBody;
