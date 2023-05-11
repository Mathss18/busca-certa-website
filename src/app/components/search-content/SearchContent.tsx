"use client";

import { useState } from "react";
import { useSearchContext } from "@/modules/search/Search.context";

function SearchContent() {
  const { searchTerm, search } = useSearchContext();
  const [term, setTerm] = useState(searchTerm);

  return (
    <>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search(term);
          }
        }}
        type="text"
        className="w-full h-12 max-w-2xl bg-gray-200 text-gray-800 rounded-lg rounded-r-none px-4 py-2 focus:outline-none focus:shadow-outline-blue focus:bg-white focus:text-gray-900"
        placeholder="Pesquise por produtos, marcas, fabricantes..."
      />

      <button
        className="btn bg-slate-900 rounded-l-none h-12 ml-px"
        onClick={() => search(term)}
      >
        Pesquisar
      </button>
    </>
  );
}

export default SearchContent;
