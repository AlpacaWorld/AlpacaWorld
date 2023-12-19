import React from 'react';
import ModalBody from './ModalBody';

const Modal = ({ onClose }: any) => {
  return (
    <div className="modal">
      <div className="mask" onClick={onClose}></div>
      <ModalBody onClose={onClose}/>
    </div>
  );
};

export default Modal;