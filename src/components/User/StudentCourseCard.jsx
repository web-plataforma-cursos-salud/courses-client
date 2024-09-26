import { FaPlay } from "react-icons/fa"; // Asegúrate de instalar react-icons
import { Link } from "react-router-dom";
const StudentCourseCard = ({
  courseImage,
  courseLogo,
  className,
  currentClass,
  totalClasses,
}) => {
  return (
    <Link to={"/video-course"}>
      <div className="max-w-[288px] max-h-[232px] bg-slate-300 rounded-lg shadow-md dark:bg-gray-800 overflow-hidden">
        {/* Contenedor para la imagen del curso, ocupando 2/3 de la altura */}
        <div className="relative h-[155px] overflow-hidden">
          {" "}
          {/* 2/3 de 232 px */}
          <img
            className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110 hover:brightness-75"
            src={courseImage}
            alt="Course"
          />
          <FaPlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl" />
        </div>

        {/* Información del curso, ocupando 1/3 de la altura */}
        <div className="p-4 h-[77px] flex">
          {/* Logo del curso en 1/3 del ancho */}
          <div className="flex items-center w-1/3">
            <img className="h-12 w-12" src={courseLogo} alt="Course Logo" />
          </div>

          {/* Información de la clase en 2/3 del ancho */}
          <div className="ml-2 w-2/3 flex flex-col justify-center">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
              Clase {currentClass} de {totalClasses}
            </span>
            <h2 className="mt-1 text-lg font-semibold text-gray-800 dark:text-white">
              {className}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StudentCourseCard;
