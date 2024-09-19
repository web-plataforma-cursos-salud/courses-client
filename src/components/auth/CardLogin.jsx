import React, { useState } from "react";
import imageLogin from "../../assets/images/image-login-card-1.jpg";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/logo/FisiomFulness.png";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { useAuth } from "../../context/authContext";

export default function CardLogin({ onClose, onSignUpClick }) {
  const { userLoggedIn } = useAuth() || {};
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

  // Manejo del inicio de sesión con Google
  const onGoogleSubmit = async (event) => {
    event.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
        setErrorMessage(err.message);
      });
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to="/" replace={true} />}

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

          {/* Inicio de sesión con Google */}
          <form onSubmit={onGoogleSubmit}>
            <button
              type="submit"
              className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <div className="px-4 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Ingresar con Google
              </span>
            </button>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
            <label className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 ">
              O inicia sesión con correo
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
