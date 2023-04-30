"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setSearchTerm } from "@/slices/searchSlice";

function HomeSearchContent() {
  const searchTerm = useSelector((state: RootState) => state.searchTerm.term);
  const [term, setTerm] = useState(searchTerm);
  const dispatch = useDispatch();
  const router = useRouter();

  function search() {
    if (term === "") return;

    dispatch(setSearchTerm(term));
    router.push(`/search?term=${encodeURIComponent(term)}`);
  }

  return (
    <>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search();
          }
        }}
        type="text"
        className="w-full h-12 max-w-2xl bg-gray-200 text-gray-800 rounded-lg rounded-r-none px-4 py-2 focus:outline-none focus:shadow-outline-blue focus:bg-white focus:text-gray-900"
        placeholder="Pesquise por produtos, marcas, fabricantes..."
      />

      <button
        className="btn btn-primary rounded-l-none h-12 ml-px"
        onClick={search}
      >
        Pesquisar
      </button>
    </>
  );
}

export default HomeSearchContent;
