import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import SideBar from "../components/SideBar";
import Chat from "../pages/chat";
import MyProgress from "../pages/myProgress";
import Home from "../pages/home";
import MyRoutes from "../pages/myRoutes";
import Notifications from "../pages/notifications";

export default function Navigation() {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-progress" element={<MyProgress />} />
            <Route path="/my-routes" element={<MyRoutes />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
