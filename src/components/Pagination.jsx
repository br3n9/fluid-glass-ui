"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  totalResults, 
  resultsPerPage = 10 
}) {
  const startResult = (currentPage - 1) * resultsPerPage + 1;
  const endResult = Math.min(currentPage * resultsPerPage, totalResults);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    // Simplified logic: show first, last, current, and neighbors
    // A more complex implementation could handle ellipses for large page counts
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-3 py-1 rounded-lg text-sm transition-colors ${
              currentPage === i
                ? 'bg-accent-500 text-white'
                : 'hover:bg-glass-light'
            }`}
          >
            {i}
          </button>
        );
      } else if (pageNumbers[pageNumbers.length - 1]?.key !== '...') {
        pageNumbers.push(<span key="..." className="px-3 py-1">...</span>);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-600">
        Affichage {startResult} à {endResult} sur {totalResults} résultats
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50"
        >
          <ChevronLeft size={16} />
        </button>

        {renderPageNumbers()}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
