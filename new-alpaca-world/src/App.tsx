import React, { useState } from "react";
import "./styles/globals.css";
import MainPage from "./pages/MainPage";
import Modal from "./UI/Modal";
import ModalPortal from "./UI/ModalPortal";

const App = () => {
  // 전역 상태관리가 아직 없어서 여기다가 사용해봄
  const [isOpen, setIsOpen] = useState(false);
  const modalOpenHandler = () => {
    setIsOpen(true);
  };
  const modalCloseHandler = () => {
    setIsOpen(false);
  };
  return (
    <div className="App">
      <MainPage />
      <button onClick={modalOpenHandler}> 모달 열기 </button>
      {isOpen && (
        <ModalPortal>
          <Modal onClose={modalCloseHandler} />
        </ModalPortal>
      )}
    </div>
  );
};

export default App;
