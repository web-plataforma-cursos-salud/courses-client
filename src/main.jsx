import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/authContext"; // Asegúrate de usar AuthProvider
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {" "}
    {/* Asegúrate de envolver toda la app con BrowserRouter */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
