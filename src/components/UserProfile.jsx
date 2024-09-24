import React from "react";
import userLogo from "../assets/logo/icons8-user-default-64.png"; // Imagen por defecto en caso de que no se proporcione una imagen

const UserProfile = ({ userImage, userName }) => {
  return (
    <div className="hidden lg:block">
      {/* Avatar del Usuario */}
      <img
        src={userImage || userLogo} // Imagen por defecto si no hay userImage
        alt="Avatar del usuario"
        className="w-16 h-16 rounded-full object-cover border-4 border-blue-400"
      />

      {/* Saludo y Nombre */}
      <div className="text-center">
        <p className="text-gray-800 dark:text-white text-sm">Hola,</p>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {userName}
        </h1>
      </div>
    </div>
  );
};

export default UserProfile;
