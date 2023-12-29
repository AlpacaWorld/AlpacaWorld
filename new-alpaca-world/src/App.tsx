import React from "react";
import "./styles/globals.css";
import MainPage from "./pages/MainPage";
import Modal from "./UI/Modal";
import ModalPortal from "./UI/ModalPortal";
import { ModalProvider } from "./hooks/useModal";

const App = () => {
  return (
    <ModalProvider>
      <div className="App">
        <MainPage />
        <ModalPortal>
          <Modal />
        </ModalPortal>
      </div>
    </ModalProvider>
  );
};

export default App;
