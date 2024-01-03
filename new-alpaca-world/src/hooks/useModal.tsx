import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { ModalContextType } from "../@types/TModalData";

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modal, setModal] = useState<boolean>(false);
  const [modalHeader, setModalHeader] = useState(<></>);
  const [modalContent, setModalContent] = useState(<></>);
  const actions = useMemo(
    () => ({
      open(header: any, content: any) {
        setModal(true);
        setModalHeader(header);
        setModalContent(content);
        const bodyTag = document.querySelector("body") as HTMLElement;
        bodyTag.classList.add("prevent-scroll");
      },
      close() {
        setModal(false);
        setModalHeader(<></>);
        setModalContent(<></>);
        const bodyTag = document.querySelector("body") as HTMLElement;
        bodyTag.classList.remove("prevent-scroll");
      },
    }),
    []
  );

  const value: ModalContextType = useMemo(
    () => ({ modal, actions, modalHeader, modalContent }),
    [modal, actions, modalHeader, modalContent]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const value = useContext(ModalContext);
  if (value === undefined) {
    throw new Error("useModalState should be used within ModalProvider");
  }
  return value;
};
