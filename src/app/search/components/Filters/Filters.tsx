"use client";

import { useSearchContext } from "@/modules/search/Search.context";
import { capitalizeFirstLetter } from "@/helpers/string.helper";
import OrderByFilter from "./components/OrderByFilter";
import RatingFilter from "./components/RatingFilter";
import CategoriesFilter from "./components/CategoriesFilter";
import LocationFilter from "./components/LocationFilter";

export default function Filters() {
  const { searchTerm, productsCount, relevantCategories, search } = useSearchContext();

  return (
    <div className="flex flex-col w-1/6 min-w-[220px] p-6 bg-white shadow-lg space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">{capitalizeFirstLetter(searchTerm)}</h1>
        <h2 className="text-lg font-semibold text-gray-600">
          {productsCount} {productsCount === 1 ? "resultado" : "resultados"}
        </h2>
      </div>
      <CategoriesFilter categories={relevantCategories} search={search} className="py-4 border-b-2 border-gray-200" />
      <LocationFilter className="py-4 border-b-2 border-gray-200" />
      <OrderByFilter className="py-4 border-b-2 border-gray-200" />
      <RatingFilter className="py-4 border-b-2 border-gray-200" />
      <div>
        <button
          className="w-full py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform rounded-md bg-gray-900 hover:bg-gray-700"
          // onClick={() => handleClearFilters()}
        >
          Limpar filtros
        </button>
      </div>
    </div>
  );
}
