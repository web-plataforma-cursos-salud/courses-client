import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SideBar from "../components/HomeUser/Sidebar";
import Chat from "../pages/chat/index";
import MyProgress from "../pages/myProgress/index";
import Home from "../pages/home/index";
import MyRoutes from "../pages/myRoutes/index";
import Notifications from "../pages/notifications/index";
import Navbar from "../components/HomeUser/Navbar";
import LandingPage from "../pages/LandingPage/index";
import { useAuth } from "../context/authContext";

export default function Navigation() {
  const { userLoggedIn } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {!userLoggedIn ? (
          <>
            {/* Ruta de aterrizaje cuando el usuario no está logueado */}
            <Route path="/" element={<Navigate to="/LandingPage" />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            {/* Si el usuario intenta acceder a rutas privadas sin estar logueado */}
            <Route path="*" element={<Navigate to="/LandingPage" />} />
          </>
        ) : (
          <>
            {/* Redirigir al Home al estar logueado */}
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route
              path="*"
              element={
                <div className="flex flex-col h-screen">
                  {/* Navbar con altura fija */}
                  <Navbar className="w-full h-16" />

                  {/* Contenedor que toma toda la altura disponible debajo del Navbar */}
                  <div className="flex flex-grow overflow-hidden">
                    {/* Sidebar con overflow para scroll en su interior */}
                    <SideBar className="w-1/4 h-full overflow-y-auto" />

                    {/* Contenido principal con flex-grow para ocupar el resto del espacio */}
                    <div className="flex-1 bg-blue-400 overflow-y-auto">
                      <Routes>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/my-progress" element={<MyProgress />} />
                        <Route path="/my-routes" element={<MyRoutes />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route
                          path="/notifications"
                          element={<Notifications />}
                        />
                        <Route path="Home/video-course" element={<Chat />} />
                        {/* Ruta inválida estando logueado redirige a Home */}
                        <Route path="*" element={<Navigate to="/Home" />} />
                      </Routes>
                    </div>
                  </div>
                </div>
              }
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
