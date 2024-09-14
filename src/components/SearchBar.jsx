import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos al servidor
    console.log("Buscando:", searchTerm);
    // Aquí es donde enviarías el término de búsqueda al servidor, por ejemplo, usando fetch() o axios.
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white border-2 border-gray-300 rounded-lg focus-within:border-blue-500 transition-colors duration-300  w-3/4  h-1/2 shadow-md"
    >
      {/* Botón de búsqueda */}
      <button
        type="submit"
        className="flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <FaSearch size={20} />
      </button>

      {/* Input de búsqueda */}
      <input
        type="text"
        placeholder="¿Qué quieres aprender?"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 outline-none bg-transparent text-gray-700"
      />
    </form>
  );
};

export default SearchBar;
