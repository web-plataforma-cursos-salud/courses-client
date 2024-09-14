import React, { useState } from "react";
import Navigation from "./Navigation";
import LandingPage from "./pages/LandingPage/index.jsx";
import "./App.css";

function App() {
  // Estado para verificar si el usuario está registrado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para simular el inicio de sesión
  const handleLogin = () => {
    setIsAuthenticated(true); // Cambia a true cuando el usuario esté autenticado
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        // Si está autenticado, muestra la navegación
        <Navigation />
      ) : (
        // Si no está autenticado, muestra la pantalla de login o mensaje
        <div className="login-screen">
          <LandingPage />
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Iniciar sesión
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
