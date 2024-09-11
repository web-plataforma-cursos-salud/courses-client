import { useCallback, useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(null);

  const showModalFn = useCallback(
    (modalTitle) => {
      setContent(modalContent);
      setIsOpen(true);
      modalTitle && setTitle(modalTitle);
    },
    [setIsOpen, setTitle]
  );

  const hideModal = useCallback(() => {
    setIsOpen(false);
    setTitle("");
    setContent(null);
  }, [setIsOpen]);

  return {
    hideModal,
    isOpenModal: isOpen,
    modalTitle: title,
    modalContent: content,
    showModal: showModalFn,
  };
}
