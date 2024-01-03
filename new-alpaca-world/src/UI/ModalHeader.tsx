import { useModal } from "../hooks/useModal";

const ModalHeader = () => {
  const { modalHeader, actions } = useModal();
  return (
    <div className="modal-header">
      <div className="modal-header-content">{modalHeader}</div>
      <button className="modal-exit" onClick={actions.close}>
        X
      </button>
    </div>
  );
};

export default ModalHeader;
