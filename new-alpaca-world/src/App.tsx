import React, { createElement } from "react";
import "./styles/globals.css";
import MainPage from "./pages/MainPage";
import Modal from "./UI/Modal";
import ModalPortal from "./UI/ModalPortal";
import { ModalProvider } from "./hooks/useModal";

const AppProvider: React.FC<{
  contexts: Array<any>;
  children: React.ReactNode;
}> = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      createElement(context, {
        children: prev,
      }),
    children
  );

const App = () => {
  return (
    <AppProvider contexts={[ModalProvider]}>
      <div className="App">
        <MainPage />
        <ModalPortal>
          <Modal />
        </ModalPortal>
      </div>
    </AppProvider>
  );
};

export default App;
