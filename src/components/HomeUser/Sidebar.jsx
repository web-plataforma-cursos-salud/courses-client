import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  FaHome,
  FaRoute,
  FaChartLine,
  FaBell,
  FaComments,
} from "react-icons/fa";

import NavItem from "../NavItem";

const Sidebar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const location = useLocation();

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar - Se oculta en pantallas pequeñas */}
      <aside
        className={`hidden lg:flex fixed inset-0 bg-blue-400 dark:bg-gray-900  dark:border-gray-700 lg:relative transition-transform duration-300 transform lg:translate-x-0 w-64 h-screen px-4 py-8 overflow-y-auto flex-col`}
      >
        <div className="flex flex-col flex-1 mt-6">
          <nav>
            <NavItem
              icon={FaHome}
              label="Inicio"
              to="/Home"
              isActive={location.pathname === "/Home"}
            />

            <NavItem
              icon={FaRoute}
              label="Mis rutas"
              to="/my-routes"
              isActive={location.pathname === "/my-routes"}
            />

            <NavItem
              icon={FaChartLine}
              label="Mi progreso"
              to="/my-progress"
              isActive={location.pathname === "/my-progress"}
            />

            <NavItem
              icon={FaBell}
              label="Notificaciones"
              to="/notifications"
              isActive={location.pathname === "/notifications"}
            />
          </nav>
        </div>

        {/* Opción Cuéntanos tu opinión - al pie del sidebar */}
        <div className="mb-12">
          <a
            className="flex items-center px-4 py-2 mt-auto text-white font-bold transition-colors duration-300 transform rounded-md"
            href="#"
          >
            <FaComments className="w-5 h-5" />
            <span className="mx-4">Cuéntanos tu opinión</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
