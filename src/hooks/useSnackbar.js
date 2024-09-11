import { useCallback, useState } from "react";

export const useSnackbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const showSnackbarFn = useCallback(
    (type) => (message) => {
      setIsOpen(true);
      setType(type);
      setMessage(message);
    },
    [setIsOpen, setType, setMessage]
  );

  const hideSnackbar = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
      setType("");
      setMessage("");
    }
  }, [isOpen, setIsOpen, setType, setMessage]);

  return {
    hideSnackbar,
    isOpenSnackbar: isOpen,
    snackbarMessage: message,
    snackbarType: type,
    showErrorSnackbar: showSnackbarFn("error"),
    showSuccessSnackbar: showSnackbarFn("success"),
    showWarningSnackbar: showSnackbarFn("warning"),
  };
};
