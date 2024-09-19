import React from "react";
import imagen_landing from "../../assets/images/imagen_landing.avif";

export default function InformationLanding() {
  return (
    <div className="grid gap-5 row-gap-8 lg:grid-cols-2  px-20 md: mt-4">
      <div className="flex flex-col justify-center">
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-[#ffffff] sm:text-4xl sm:leading-none">
            El Futuro de
            <br className="hidden md:block" />
            la Formación en Salud{" "}
          </h2>
          <p className=" text-white md:text-lg">
            Formación de calidad para profesionales de la salud. Explora
            nuestros cursos en Psicología, Enfermería, y mucho más.
          </p>
        </div>
        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
          <div className="bg-white border-l-8 shadow-sm border-[#3472c4]">
            <div className="h-full p-5 border border-l-0 rounded-r">
              <h6 className="mb-2 font-semibold leading-5 text-[#1e40af]">
                Profesionales Capacitados
              </h6>
              <p className="text-sm text-gray-900">
                Contamos con expertos en el área de la salud para asegurar que
                recibas la mejor formación posible.
              </p>
            </div>
          </div>
          <div className="bg-white border-l-8 shadow-sm border-[#3472c4]">
            <div className="h-full p-5 border border-l-0 rounded-r">
              <h6 className="mb-2 font-semibold leading-5 text-[#1e40af]">
                Contenido Actualizado
              </h6>
              <p className="text-sm text-gray-900">
                Material diseñado para el contexto actual, con acceso a videos
                explicativos y evaluaciones interactivas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
          src={imagen_landing}
          alt="Imagen de la plataforma"
        />
      </div>
    </div>
  );
}
