import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";

// Crear el contexto
const AuthContext = React.createContext();

// Hook personalizado para acceder al contexto
export function useAuth() {
  return useContext(AuthContext);
}

// Componente proveedor de autenticación
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  // Función para inicializar el usuario cuando el estado cambia
  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  // Valor del contexto
  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
