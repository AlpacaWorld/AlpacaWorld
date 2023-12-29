import { createContext, useContext, useMemo, useState } from "react";

interface IModalContext {
  modal: boolean,
  actions: {
    open: () => void,
    close: () => void,
  },
}

export const ModalContext = createContext<IModalContext | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState<boolean>(false);
  const actions = useMemo(
    () => ({
      open() {
        setModal(true);
        console.log('open');
      },
      close() {
        setModal(false);
        console.log('close');
      },
    }),[]);

  const value: IModalContext = useMemo(() => ({modal, actions}), [modal, actions]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = (): IModalContext => {
  const value = useContext(ModalContext);
  if (value === undefined) {
    throw new Error('useModalState should be used within ModalProvider');
  }
  return value;
};