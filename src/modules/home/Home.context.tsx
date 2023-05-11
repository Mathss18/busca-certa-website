"use client";

import { createContext, useContext } from "react";
import { useQuery } from "react-query";
import productCategoryService from "@/services/product-category/product-category.service";

type HomeContextType = {
  categories: { id: number; name: string; image: string }[];
};

const HomeContext = createContext({
  categories: [],
} as HomeContextType);

function HomeContextProvider({ children }: { children: React.ReactNode }) {
  const { data } = useQuery("products-categories", () =>
    productCategoryService.findRelevants({ quantity: 8 })
  );
  return (
    <HomeContext.Provider
      value={{
        categories: data?.data.data || [],
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export function useHomeContext() {
  return useContext(HomeContext);
}

export default HomeContextProvider;
