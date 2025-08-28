import React, { useState } from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const [inputPage, setInputPage] = useState('');

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handleGoToPage = (e) => {
    e.preventDefault();
    const pageNumber = Number(inputPage);

    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber - 1);
      setInputPage('');
    } else {
      alert(`Por favor, insira um número de página entre 1 e ${totalPages}.`);
      setInputPage('');
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-8">
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="bg-blue-600 text-white font-bold py-2 px-6 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
        <span className="text-md font-semibold text-gray-300">
          Página {currentPage + 1} de {totalPages} (aprox.)
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages - 1}
          className="bg-blue-600 text-white font-bold py-2 px-6 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Próxima
        </button>
      </div>

      <form onSubmit={handleGoToPage} className="flex items-center gap-2">
        <input 
          type="number"
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
          placeholder="Página..."
          className="w-24 bg-gray-700 text-white p-2 rounded border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
          min="1"
          max={totalPages}
        />
        <button type="submit" className="bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Ir
        </button>
      </form>
    </div>
  );
};

export default Pagination;