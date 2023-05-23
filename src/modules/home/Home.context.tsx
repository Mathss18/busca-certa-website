"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import productCategoryService from "@/services/product-category/product-category.service";

type HomeContextType = {
  categories: { id: number; name: string; image: string }[];
};

const HomeContext = createContext({
  categories: [],
} as HomeContextType);

function HomeContextProvider({ children }: { children: React.ReactNode }) {
  const { data } = useQuery("products-categories", () => productCategoryService.findRelevants({ quantity: 8 }));
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  useEffect(() => {
    // console.log(location);
  }, [location]);
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
