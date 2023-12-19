import { ReactPortal } from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = ({ children }: any): ReactPortal => {
  const el = document.getElementById("moodal");
  return ReactDOM.createPortal(children, el!);
};

export default ModalPortal;
