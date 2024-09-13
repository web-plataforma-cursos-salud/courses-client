import React from "react";
import { FiLogOut } from "react-icons/fi";
import userLogo from "../assets/logo/icons8-user-default-64.png"; // Imagen por defecto en caso de que no se proporcione una imagen

const UserProfile = ({ userImage, userName, onLogout }) => {
  return (
    <div className="flex justify-evenly items-center space-x-4 w-1/6 ">
      <div className=" flex flex-col justify-center items-center	">
        {/* Saludo y nombre del usuario */}

        {/* Avatar del Usuario */}
        <img
          src={userImage || userLogo} // Si no hay userImage, usa defaultImage
          alt="Avatar del usuario"
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
        />
        <p className="text-white text-center">
          Hola, <span className="font-bold">{userName}</span>
        </p>
      </div>

      {/* Botón de Desloguear */}
      <button
        onClick={onLogout}
        className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition duration-300"
      >
        <FiLogOut className="font-bold" />
      </button>
    </div>
  );
};

export default UserProfile;
