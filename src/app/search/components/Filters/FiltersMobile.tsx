"use client";

import { motion } from "framer-motion";
import React from "react";
import { useSearchContext } from "@/modules/search/Search.context";
import { capitalizeFirstLetter } from "@/helpers/string.helper";
import OrderByFilter from "./components/OrderByFilter";
import RatingFilter from "./components/RatingFilter";
import CategoriesFilter from "./components/CategoriesFilter";
import LocationFilter from "./components/LocationFilter";

function FiltersMobile() {
  const { searchTerm, productsCount, relevantCategories, search } = useSearchContext();

  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.3 }}
      className="fixed z-50 w-screen h-screen overflow-y-auto top-0 left-0 right-0 bottom-0 bg-white shadow-lg overflow-x-hidden"
      style={{ touchAction: "none" }} // prevents scrolling behind the overlay
    >
      <div className="flex flex-col p-6 bg-white shadow-lg space-y-6">
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
    </motion.div>
  );
}

export default React.memo(FiltersMobile);
