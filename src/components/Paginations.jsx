"use client";

"use client";

import { useState } from 'react';
import Pagination from './Pagination';

export default function Paginations() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const totalResults = 100;

  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">Pagination</h3>
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalResults={totalResults}
      />
    </section>
  );
}
