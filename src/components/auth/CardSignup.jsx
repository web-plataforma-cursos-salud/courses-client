import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { FaGoogle } from "react-icons/fa";
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
    event.preventDefault();
    setErrorMessage("");
    if (
      !name ||
      !lastname ||
      !phoneNumber ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setErrorMessage("Por favor completa todos los campos.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    try {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password);
    } catch (error) {
      setIsRegistering(false);
      setErrorMessage(error.message);
    }
  };

  const onGoogleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      setIsRegistering(true);
      await doSignInWithGoogle();
    } catch (error) {
      setIsRegistering(false);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      {isRegistering && <Navigate to="/" replace={true} />}
      <section className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden max-w-4xl w-full mx-4 sm:mx-auto relative my-4 py-6 pt-8 max-h-[90vh] overflow-y-auto">
        {" "}
        {/* Ajuste de altura máxima y scroll */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          aria-label="Cerrar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
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
          <div
            className="hidden lg:block lg:w-2/5 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSignup})` }}
          ></div>
          <div className="w-full p-6 lg:p-12 flex flex-col justify-center max-h-full overflow-y-auto">
            <h1 className="text-2xl font-bold tracking-tight text-gray-800 capitalize dark:text-white">
              Crea tu cuenta gratuita
            </h1>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base dark:text-gray-400 text-center sm:text-left">
              Empieza a aprender y mejorar tus habilidades con los cursos de
              nuestra plataforma.
            </p>

            {errorMessage && (
              <div className="text-red-600 mb-4">{errorMessage}</div>
            )}
            <form
              className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2"
              onSubmit={onSubmit}
            >
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Ej: Juan"
                  className="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Apellido
                </label>
                <input
                  type="text"
                  placeholder="Ej: Pérez"
                  className="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Número de teléfono
                </label>
                <input
                  type="text"
                  placeholder="Ej: 123-456-789"
                  className="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="tuemail@ejemplo.com"
                  className="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Contraseña
                </label>
                <input
                  type="password"
                  placeholder="Crea una contraseña"
                  className="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Confirma tu contraseña
                </label>
                <input
                  type="password"
                  placeholder="Repite tu contraseña"
                  className="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="col-span-1 sm:col-span-2 flex items-center w-full px-6 py-3 mt-6 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
              >
                <span>Crear cuenta</span>
              </button>
            </form>

            <div className="flex items-center justify-center my-4">
              <hr className="w-full border-gray-300" />
              <span className="mx-2 text-gray-600">o</span>
              <hr className="w-full border-gray-300" />
            </div>

            <div className="flex flex-col items-center mt-4">
              <form onSubmit={onGoogleSubmit} className="mt-2 w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300"
                >
                  <FaGoogle className="mr-2 text-white" />
                  Registrarse
                </button>
              </form>
            </div>
            <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
              ¿Ya tienes una cuenta?{" "}
              <button
                onClick={onClose}
                className="text-blue-600 hover:underline"
              >
                Inicia sesión
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
