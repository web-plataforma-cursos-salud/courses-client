import React, { useState } from "react";
import imageLogin from "../../assets/images/image-login-card-1.jpg";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/logo/FisiomFulness.png";
import { doSignInWithEmailAndPassword } from "../../firebase/auth";

export default function CardLogin({ onClose, onSignUpClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Manejo del inicio de sesión con correo electrónico
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!isSigningIn) {
        setIsSigningIn(true);
        await doSignInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setIsSigningIn(false);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <div className="relative flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        {/* Imagen de fondo */}
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{ backgroundImage: `url(${imageLogin})` }}
        ></div>

        {/* Contenido */}
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 relative">
          {/* Botón de cerrar */}
          <button
            aria-label="Cerrar"
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={logo} alt="Logo" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            ¡Bienvenido de nuevo!
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
            <label className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 ">
              inicia sesión con correo
            </label>
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          </div>

          <form onSubmit={onSubmit}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Correo electrónico
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="loggingPassword"
                >
                  Contraseña
                </label>
                <a
                  href="#"
                  className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                >
                  ¿Olvidaste la contraseña?
                </a>
              </div>
              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                disabled={isSigningIn}
              >
                {isSigningIn ? "Iniciando sesión..." : "Iniciar sesión"}
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-200">
            ¿No tienes una cuenta?{" "}
            <Link
              onClick={onSignUpClick}
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
              to="#"
            >
              Regístrate
            </Link>
          </p>

          {errorMessage && (
            <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
          )}
        </div>
      </div>
    </>
  );
}
