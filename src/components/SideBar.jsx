import React from "react";
import { useLocation } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { RiArchiveStackFill } from "react-icons/ri";
import { BiChart } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import NavItem from "./NavItem";
import logo from "../assets/logo/FisiomFulness.png";

export default function SideBar() {
  const location = useLocation();
  return (
    <div className="bg-base container w-1/5 h-screen">
      <div className="flex flex-row justify-evenly items-center mt-5 mb-7">
        {" "}
        <img src={logo} alt="Logo" className="w-16 h-auto" />{" "}
        <p className="text-2xl  text-white font-blackOps mt-2 w-auto">
          FisiomFulness
        </p>{" "}
        {/* Texto personalizado */}
      </div>
      <NavItem
        icon={GoHomeFill}
        label="Inicio"
        to="/"
        isActive={location.pathname === "/"}
      />
      <NavItem
        icon={RiArchiveStackFill}
        label="Mis rutas"
        to="/my-routes"
        isActive={location.pathname === "/my-routes"}
      />
      <NavItem
        icon={BiChart}
        label="Mi progreso"
        to="/my-progress"
        isActive={location.pathname === "/my-progress"}
      />
      <NavItem
        icon={BsFillChatLeftTextFill}
        label="Chat"
        to="/chat"
        isActive={location.pathname === "/chat"}
      />

      <NavItem
        icon={IoIosNotifications}
        label="Notificaciones"
        to="/notifications"
        isActive={location.pathname === "/notifications"}
      />
    </div>
  );
}
