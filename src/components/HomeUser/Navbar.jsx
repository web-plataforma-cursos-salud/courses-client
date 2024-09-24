import React, { useState } from "react";
import { FiMenu, FiX, FiSearch, FiLogOut } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/FisiomFulness.png";
import {
  FaHome,
  FaRoute,
  FaChartLine,
  FaBell,
  FaComments,
} from "react-icons/fa";
import UserProfile from "../UserProfile";
import { useAuth } from "../../context/authContext";
import { doSignOut } from "../../firebase/auth";

const Navbar = () => {
  const { currentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handlLogOut = () => {
    doSignOut();
    Navigate("/LandingPage");
  };

  const location = useLocation();

  return (
    <nav className="relative bg-blue-400 shadow dark:bg-gray-800 flex items-center justify-between">
      {console.log(currentUser)}
      <div className="flex justify-between w-full items-center px-4">
        {/* Sección solo de pantallas grandes */}
        <section className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <img className="h-16 sm:h-20" src={logo} alt="Logo" />
          </div>

          {/* Barra de búsqueda */}
          <div className="relative w-1/3 mt-4 mb-4 hidden lg:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FiSearch className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Buscar"
            />
          </div>

          <div className="flex items-center w-40  justify-between">
            <UserProfile />
            <div className="hidden lg:block ">
              <button
                onClick={handlLogOut}
                className="flex items-center text-white font-bold dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              >
                <FiLogOut className="w-6 h-6 mr-1" />
                <span>Salir</span>
              </button>
            </div>
          </div>
        </section>

        <div className="flex lg:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
            aria-label="toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <aside
          className={`fixed inset-0 z-50 bg-blue-400 dark:bg-gray-900 dark:border-gray-700 transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } w-64 h-screen px-4 py-8 overflow-y-auto flex flex-col`}
        >
          <div className="flex mt-[-25px]">
            <img className="h-16 sm:h-20" src={logo} alt="logo" />
          </div>

          {/* Barra de búsqueda */}
          <div className="relative w-full mt-4 mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FiSearch className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Buscar"
            />
          </div>

          <nav className="flex flex-col flex-1 mt-6">
            <Link
              to="/Home"
              className={`flex items-center px-4 py-2 text-white ${
                location.pathname === "/Home" ? "bg-blue-600" : ""
              }`}
            >
              <FaHome className="mr-2" /> Inicio
            </Link>

            <Link
              to="/my-routes"
              className={`flex items-center px-4 py-2 text-white ${
                location.pathname === "/my-routes" ? "bg-blue-600" : ""
              }`}
            >
              <FaRoute className="mr-2" /> Mis rutas
            </Link>

            <Link
              to="/my-progress"
              className={`flex items-center px-4 py-2 text-white ${
                location.pathname === "/my-progress" ? "bg-blue-600" : ""
              }`}
            >
              <FaChartLine className="mr-2" /> Mi progreso
            </Link>

            <Link
              to="/notifications"
              className={`flex items-center px-4 py-2 text-white ${
                location.pathname === "/notifications" ? "bg-blue-600" : ""
              }`}
            >
              <FaBell className="mr-2" /> Notificaciones
            </Link>

            <button className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none">
              <FiLogOut className="w-6 h-6 mr-1" />
              <span>Salir</span>
            </button>
          </nav>

          {/* Opción Cuéntanos tu opinión - al pie del sidebar */}
          <div className="mb-12 mt-auto">
            <a
              className="flex items-center px-4 py-2 mt-auto text-white font-bold transition-colors duration-300 transform rounded-md"
              href="#"
            >
              <FaComments className="w-5 h-5" />
              <span className="mx-4">Cuéntanos tu opinión</span>
            </a>
          </div>
        </aside>
      )}
    </nav>
  );
};

export default Navbar;
