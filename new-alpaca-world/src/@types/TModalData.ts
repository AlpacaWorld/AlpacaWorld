export type ModalContextType = {
  modal: boolean;
  actions: {
    open: (header: any, content: any) => void;
    close: () => void;
  };
  modalHeader: any;
  modalContent: any;
};
