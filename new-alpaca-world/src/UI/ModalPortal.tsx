import ReactDOM from 'react-dom';
import { useModal } from '../hooks/useModal';

const ModalPortal = ({ children }: any): any => {
  const { modal } = useModal();
  const el = document.getElementById("modal");
  if (modal) return ReactDOM.createPortal(children, el!);
};

export default ModalPortal;
