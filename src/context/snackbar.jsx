import React, { createContext, ReactNode } from "react";
import { SnackbarComponent } from "../components";
import { useSnackbar } from "../hooks";

export const SnackbarContext = createContext({
  showSuccessSnackbar: () => {},
  showErrorSnackbar: () => {},
  showWarningSnackbar: () => {},
});

export const SnackbarProvider = ({ children }) => {
  const {
    isOpenSnackbar,
    snackbarMessage,
    snackbarType,
    showErrorSnackbar,
    showSuccessSnackbar,
    showWarningSnackbar,
    hideSnackbar,
  } = useSnackbar();

  return (
    <SnackbarContext.Provider
      value={{ showSuccessSnackbar, showErrorSnackbar, showWarningSnackbar }}
    >
      {children}
      {isOpenSnackbar && (
        <SnackbarComponent
          message={snackbarMessage}
          isOpenSnackbar={isOpenSnackbar}
          type={snackbarType}
          hideSnackbar={hideSnackbar}
        />
      )}
    </SnackbarContext.Provider>
  );
};
