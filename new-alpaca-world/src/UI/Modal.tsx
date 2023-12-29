import React from 'react';
import ModalFrame from './ModalFrame';
import { useModal } from '../hooks/useModal';

const Modal = () => {
  const { actions } = useModal();
  return (
    <div className="modal">
      <div className="mask" onClick={actions.close}></div>
      <ModalFrame/>
    </div>
  );
};

export default Modal;