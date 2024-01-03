import { useModal } from "../hooks/useModal";

const ModalBody = () => {
  const { modalContent } = useModal();
  return <div className="modal-body">{modalContent}</div>;
};

export default ModalBody;
