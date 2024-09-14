import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importar el ícono de WhatsApp

export default function ContactUs() {
  return (
    <section id="Contactanos" className="bg-[#1e40af]">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <p className="font-medium text-white">Contáctanos</p>

          <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
            Ponte en contacto
          </h1>

          <p className="mt-3 text-gray-200">
            Nuestro equipo está aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Sección de Email */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-white rounded-full bg-[#60a5fa]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-white">
              Correo Electrónico
            </h2>
            <p className="mt-2 text-gray-300">
              Nuestro equipo está aquí para ayudarte.
            </p>
            <p className="mt-2 text-[#60a5fa]">hello@tusitio.com</p>
          </div>

          {/* Sección de Oficina */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-white rounded-full bg-[#60a5fa]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-white">Oficina</h2>
            <p className="mt-2 text-gray-300">
              Visítanos en nuestra sede central.
            </p>
            <p className="mt-2 text-[#60a5fa]">
              100 Smith Street, Ciudad, País
            </p>
          </div>

          {/* Sección de WhatsApp */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-white rounded-full bg-[#60a5fa]">
              <FaWhatsapp className="w-8 h-8" />
            </span>

            <h2 className="mt-4 text-lg font-medium text-white">WhatsApp</h2>
            <p className="mt-2 text-gray-300">Lunes a Viernes de 8am a 5pm.</p>
            <p className="mt-2 text-[#60a5fa]">+1 (555) 000-0000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
