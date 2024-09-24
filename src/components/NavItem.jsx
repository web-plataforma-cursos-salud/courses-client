import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ icon: Icon, label, to, isActive }) {
  return (
    <Link
      to={to}
      className={`w-full flex items-center  py-4 pl-11 mb-4 hover:shadow-xl ml-[-12px] ${
        isActive ? "border-l-4 border-blue-700 pl-4" : "pl-2"
      }`}
    >
      <div className={`flex items-center space-x-2 `}>
        {/* Renderizar el ícono */}
        <Icon className="w-6 h-6 text-[#D7D9E0]" />

        {/* Mostrar el texto del nombre de la opción */}
        <span className="text-sm font-bold font-sans  text-white">{label}</span>
      </div>
    </Link>
  );
}
