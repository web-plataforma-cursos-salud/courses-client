import logoPsico from "../assets/logo/img-psycology.png";
import logoFarmacia from "../assets/logo/iconFarmacia.png";
import logoEnfermeria from "../assets/logo/logoEnfermeria.png";
import logofisio from "../assets/logo/logoFisioterapia.png";
import logoNutricion from "../assets/logo/nutricion.png";
import logoPrimerosAux from "../assets/logo/primeros-auxilios.png";

export const Courses = () => {
  return (
    <section
      id="Cursos"
      className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Descubre</span>
          </span>{" "}
          las áreas de especialización
        </h2>
        <p className="text-base text-gray-300 md:text-lg">
          Explora las diferentes áreas de conocimiento que ofrecemos.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#1e40af] sm:w-24 sm:h-24">
            <img src={logoPsico} alt="psicologia-imagen" className="w-1/2" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">
            Psicología
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#1e40af] sm:w-24 sm:h-24">
            <img src={logoFarmacia} alt="imagen farmacia" className="w-3/4" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">
            Farmacología
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#1e40af] sm:w-24 sm:h-24">
            <img src={logoEnfermeria} alt="logo-enfermeria" className="w-3/4" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">
            Enfermería
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#1e40af] sm:w-24 sm:h-24">
            <img src={logofisio} alt="logoFisio" className="w-3/4" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">
            Fisioterapia
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#1e40af] sm:w-24 sm:h-24">
            <img src={logoNutricion} alt="logo-nutricion" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">Nutrición</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#1e40af] sm:w-24 sm:h-24">
            <img
              src={logoPrimerosAux}
              alt="Logo-primeros-aux"
              className="w-3/4"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">
            Primeros Auxilios
          </h6>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#1e40af] hover:bg-[#1a3b96] focus:shadow-outline focus:outline-none"
        >
          Más información
          <span className="ml-1 -mr-2">
            <svg
              className="w-8 h-8 text-white"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};
