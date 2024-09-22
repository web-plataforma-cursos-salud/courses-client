import React, { useState } from "react";
import Navigation from "./Navigation/index.jsx";
import LandingPage from "./pages/LandingPage/index.jsx";

function App() {
  // Estado para verificar si el usuario está registrado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para simular el inicio de sesión
  const handleLogin = () => {
    setIsAuthenticated(true); // Cambia a true cuando el usuario esté autenticado
  };

  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
