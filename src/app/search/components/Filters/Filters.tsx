"use client";

import { useSearchContext } from "@/modules/search/Search.context";
import { capitalizeFirstLetter } from "@/helpers/string.helper";
import OrderByFilter from "./components/OrderByFilter";
import RatingFilter from "./components/RatingFilter";
import CategoriesFilter from "./components/CategoriesFilter";

export default function Filters() {
  const { searchTerm, productsCount, relevantCategories, search } =
    useSearchContext();

  return (
    <div className="bg-gray-200 min-h-screen min-w-[200px] w-1/5 flex flex-col items-center gap-4 py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">
        {capitalizeFirstLetter(searchTerm)}
      </h1>
      <h2 className="text-lg font-semibold mb-8">
        {productsCount} {productsCount === 1 ? "resultado" : "resultados"}
      </h2>
      <CategoriesFilter categories={relevantCategories} search={search} />
      <OrderByFilter />
      <RatingFilter />
      <section>
        <button
          className="btn btn-outline"
          // onClick={() => handleClearFilters()}
        >
          Limpar filtros
        </button>
      </section>
    </div>
  );
}
