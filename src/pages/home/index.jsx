import React from "react";
import StudentCourseCard from "../../components/User/StudentCourseCard";
import coursesdata from "../../json-pruebas/coursesData.json";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const course = coursesdata[0];
  return (
    <section className=" bg-blue-400 min-h-screen">
      <section>
        <div className="flex mb-5">
          <p className="text-white text-xl">Cursos que estás tomando</p>
          <Link
            to={"/video-course"}
            className="text-white text-xl flex items-center "
          >
            {" "}
            <div className="flex items-center">
              <p className="text-sm ml-7 border-b border-white  ">
                {" "}
                Ir a mis cursos
              </p>
              <IoIosArrowForward className="text-sm" />
            </div>
          </Link>
        </div>
        <StudentCourseCard
          courseImage={course.courseImage}
          courseLogo={course.courseLogo}
          className={course.className}
          currentClass={course.currentClass}
          totalClasses={course.totalClasses}
        />
      </section>
    </section>
  );
}
