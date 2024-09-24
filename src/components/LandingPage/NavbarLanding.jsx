import React, { useState } from "react";
import logo from "../../assets/logo/FisiomFulness.png";

export const NavbarLanding = ({ onLoginClick, onSignUpClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-36 h-auto
"
            />
          </div>
          <div className="flex-grow flex items-center justify-center">
            <ul className="hidden lg:flex items-center space-x-8">
              <li>
                <a
                  href="#Cursos"
                  aria-label="Cursos"
                  title="Cursos"
                  className="font-bold tracking-wide text-white relative inline-flex items-center group"
                >
                  Cursos
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </a>
              </li>
              <li>
                <a
                  href="#Precios"
                  aria-label="Precios"
                  title="Precios"
                  className="font-bold tracking-wide text-white relative inline-flex items-center group"
                >
                  Precios
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </a>
              </li>

              <li>
                <a
                  href="#Contactanos"
                  aria-label="Contactanos"
                  title="Contactanos"
                  className="font-bold tracking-wide text-white relative inline-flex items-center group"
                >
                  Contactanos
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </a>
              </li>
            </ul>
          </div>
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <a
                href="#Login"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-300 transform hover:scale-105 hover:bg-white hover:text-blue-600 hover:border-blue-600 border border-transparent rounded shadow-lg focus:outline-none"
                aria-label="Ingresar"
                title="Ingresar"
                onClick={onLoginClick}
              >
                Ingresar
              </a>
            </li>
            <li>
              <a
                href="#Registrase"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-300 transform hover:scale-105 hover:bg-white hover:text-blue-600 hover:border-blue-600 border border-transparent rounded shadow-lg focus:outline-none"
                aria-label="Registrarse"
                title="Registrarse"
                onClick={onSignUpClick}
              >
                Registrarse
              </a>
            </li>
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 mr-4 transition duration-200 rounded focus:outline-none focus:shadow-outline "
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-8 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-1/4">
                      <img src={logo} alt="image not found" />
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-blue-700" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#Cursos"
                          aria-label="Cursos"
                          title="Cursos"
                          className="font-medium tracking-wide text-blue-500 transition-colors duration-200 hover:text-custom-celeste"
                        >
                          Cursos
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Precios"
                          aria-label="Precios"
                          title="Precios"
                          className="font-medium tracking-wide text-blue-500 transition-colors duration-200 hover:text-custom-celeste"
                        >
                          Precios
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Contactanos"
                          aria-label="Contactanos"
                          title="Contactanos"
                          className="font-medium tracking-wide text-blue-500 transition-colors duration-200 hover:text-custom-celeste"
                        >
                          Contactanos
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Ingresar"
                          aria-label="Ingresar"
                          title="Ingresar"
                          className="font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-custom-celeste"
                          onClick={onLoginClick}
                        >
                          Ingresar
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Registrase"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-blue-700 transition duration-200 rounded shadow-xl bg-custom-celeste hover:bg-custom-celeste focus:shadow-outline focus:outline-none"
                          aria-label="Registrarse"
                          title="Registrarse"
                          onClick={onSignUpClick}
                        >
                          Registrarse
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
