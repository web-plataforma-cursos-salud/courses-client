import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ icon: Icon, label, to, isActive }) {
  return (
    <Link
      to={to}
      className={`w-4/5 flex items-center space-x-2 py-4 ml-4 mb-4 hover:bg-[#1e3a8a] rounded-lg ${
        isActive ? "border-l-4 border-green-500 pl-4" : "pl-2"
      }`}
    >
      <div className={`flex items-center space-x-2 `}>
        {/* Renderizar el ícono */}
        <Icon className="w-6 h-6 text-[#D7D9E0]" />

        {/* Mostrar el texto del nombre de la opción */}
        <span className="text-sm font-bold font-sans  text-blue-300">
          {label}
        </span>
      </div>
    </Link>
  );
}
