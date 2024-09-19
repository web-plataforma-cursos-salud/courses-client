import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import imageSignup from "../../assets/images/image-signup-card2.jpg";

export default function CardSignup({ onClose }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!isRegistering) {
        setIsRegistering(true);
        await doCreateUserWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setIsRegistering(false);
      setErrorMessage(error.message);
    }
  };
  return (
    <>
      {isRegistering && <Navigate to="/" replace={true} />}
      <section className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden max-w-4xl w-full mx-4 sm:mx-auto relative max-h-screen sm:max-h-none sm:my-8">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
          aria-label="Cerrar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full sm:h-auto">
          {/* Imagen lateral oculta en pantallas pequeñas */}
          <div
            className="hidden lg:block lg:w-2/5 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSignup})` }}
          ></div>

          {/* Contenido del formulario */}
          <div className="w-full p-6 lg:p-12 flex flex-col justify-center overflow-y-auto">
            <h1 className="text-2xl font-bold tracking-tight text-gray-800 capitalize dark:text-white">
              Crea tu cuenta gratuita
            </h1>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base  dark:text-gray-400 text-center sm:text-left">
              Empieza a aprender y mejorar tus habilidades con los cursos de
              nuestra plataforma.
            </p>

            <form className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Ej: Juan"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Apellido
                </label>
                <input
                  type="text"
                  placeholder="Ej: Pérez"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Número de teléfono
                </label>
                <input
                  type="text"
                  placeholder="Ej: 123-456-789"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="tuemail@ejemplo.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Contraseña
                </label>
                <input
                  type="password"
                  placeholder="Crea una contraseña"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Confirma tu contraseña
                </label>
                <input
                  type="password"
                  placeholder="Repite tu contraseña"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none focus:ring-opacity-40"
                />
              </div>
            </form>

            <button className="flex items-center justify-between w-full px-6 py-3 mt-6 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              <span>Crear cuenta</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 rtl:-scale-x-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
