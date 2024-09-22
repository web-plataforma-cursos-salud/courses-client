import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import Chat from "../pages/chat/index";
import MyProgress from "../pages/myProgress/index";
import Home from "../pages/home/index";
import MyRoutes from "../pages/myRoutes/index";
import Notifications from "../pages/notifications/index";
import Navbar from "../components/Navbar";
import LandingPage from "../pages/LandingPage/index";
import { useAuth } from "../context/authContext";

export default function Navigation() {
  const { userLoggedIn } = useAuth();

  useEffect(() => {
    if (!userLoggedIn) {
      // Si no está logueado, redirige a LandingPage
      <Navigate to="/LandingPage" />;
    }
  }, [userLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        {!userLoggedIn ? (
          <>
            <Route path="/" element={<Navigate to="/LandingPage" />} />
            <Route path="/LandingPage" element={<LandingPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route
              path="*"
              element={
                <div className="flex">
                  <SideBar />
                  <div className="flex w-full flex-col items-center bg-base">
                    <Navbar />
                    <main className="flex-1 w-full">
                      <Routes>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/my-progress" element={<MyProgress />} />
                        <Route path="/my-routes" element={<MyRoutes />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route
                          path="/notifications"
                          element={<Notifications />}
                        />
                      </Routes>
                    </main>
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
