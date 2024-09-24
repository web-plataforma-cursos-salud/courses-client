import React, { useState } from "react";
import {
  FaHome,
  FaRoute,
  FaChartLine,
  FaBell,
  FaComments,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../assets/logo/FisiomFulness.png";

const Sidebar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón de menú hamburguesa para pantallas pequeñas */}
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-md md:hidden"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-0 bg-blue-600 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 md:relative md:translate-x-0 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 h-screen px-4 py-8 overflow-y-auto flex flex-col`}
      >
        {/* Botón de cerrar (X) dentro del sidebar */}
        {isOpen && (
          <button
            className="absolute top-4 right-4 z-50 p-2 bg-gray-700 text-white rounded-md"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
        )}

        <a
          href="/home"
          className="flex justify-start lg:mb-12 md:mb-7 ml-2 h-14 lg:mt-[-34px]"
        >
          <img className="h-16 sm:h-24" src={logo} alt="Logo" />
        </a>

        <div className="flex flex-col flex-1 mt-6">
          <nav>
            <a
              className={`flex items-center px-4 py-2 text-white font-bold ${
                activeMenu === "home" ? "border-l-4 border-white" : ""
              } transition-colors duration-300 transform rounded-md`}
              href="#"
              onClick={() => {
                setActiveMenu("home");
                // Redirigir a la ruta correspondiente
              }}
            >
              <FaHome className="w-5 h-5" />
              <span className="mx-4">Inicio</span>
            </a>

            <a
              className={`flex items-center px-4 py-2 mt-5 text-white font-bold ${
                activeMenu === "routes" ? "border-l-4 border-white" : ""
              } transition-colors duration-300 transform rounded-md`}
              href="#"
              onClick={() => {
                setActiveMenu("routes");
                // Redirigir a la ruta correspondiente
              }}
            >
              <FaRoute className="w-5 h-5" />
              <span className="mx-4">Mis Rutas</span>
            </a>

            <a
              className={`flex items-center px-4 py-2 mt-5 text-white font-bold ${
                activeMenu === "progress" ? "border-l-4 border-white" : ""
              } transition-colors duration-300 transform rounded-md`}
              href="#"
              onClick={() => {
                setActiveMenu("progress");
                // Redirigir a la ruta correspondiente
              }}
            >
              <FaChartLine className="w-5 h-5" />
              <span className="mx-4">Mi Progreso</span>
            </a>

            <a
              className={`flex items-center px-4 py-2 mt-5 text-white font-bold ${
                activeMenu === "notifications" ? "border-l-4 border-white" : ""
              } transition-colors duration-300 transform rounded-md`}
              onClick={() => {
                toggleNotifications();
                setActiveMenu("notifications");
              }}
            >
              <FaBell className="w-5 h-5" />
              <span className="mx-4">Notificaciones</span>
            </a>

            {showNotifications && (
              <div className="mt-2 pl-10">
                <p className="text-white">Aquí van tus notificaciones.</p>
              </div>
            )}
          </nav>
        </div>

        {/* Opción Cuéntanos tu opinión - al pie del sidebar */}
        <div className="mt-6">
          <a
            className={`flex items-center px-4 py-2 mt-auto text-white font-bold transition-colors duration-300 transform rounded-md`}
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
