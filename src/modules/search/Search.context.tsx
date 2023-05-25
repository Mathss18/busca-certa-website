"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { useInfiniteQuery, InfiniteData, useQuery, useQueryClient } from "react-query";
import { AxiosResponse } from "axios";
import { RootState } from "@/store/store";
import { setSearchTerm } from "@/slices/searchSlice";
import productService from "@/services/product/product.service";
import productCategoryService from "@/services/product-category/product-category.service";
import { SearchContextType } from "./types";
import { useGeolocatorContext } from "../geolocator/Geolocator.context";

const SearchContext = createContext({
  searchTerm: "",
  search: () => {},
  paginatedProducts: undefined,
  fetchNextPage: () => {},
  productsCount: 0,
  relevantCategories: [],
  isLoading: false,
  highlightedProduct: null,
} as SearchContextType);

function SearchContextProvider({ children }: { children: React.ReactNode }) {
  const { location } = useGeolocatorContext();
  const searchTerm = useSelector((state: RootState) => state.searchTerm.term);
  const [paginatedProducts, setPaginatedProducts] = useState<InfiniteData<AxiosResponse>>();
  const [productsCount, setProductsCount] = useState<number>(0);
  const params = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { data: relevantCategories, refetch: refetchRelevantCategories } = useQuery(
    ["search", "relevants-categories-by-term", searchTerm, location],
    () =>
      productCategoryService.findRelevantsByTerm({
        quantity: 5,
        term: searchTerm,
        location,
      }),
    {
      enabled: !!searchTerm,
      refetchOnWindowFocus: false,
    }
  );

  const { data: highlightedProduct, refetch: refetchHighlightedProduct } = useQuery(
    ["search", "highligh-product-by-term", searchTerm, location],
    () =>
      productService.highlighByTerm({
        term: searchTerm,
        location,
      }),
    {
      enabled: !!searchTerm,
      refetchOnWindowFocus: false,
    }
  );

  const { data, fetchNextPage, isLoading } = useInfiniteQuery(
    ["search", "search-by-term", searchTerm, location],
    ({ pageParam = 1 }) => {
      return productService.searchByTerm({
        term: searchTerm,
        page: pageParam,
        pageSize: 8,
        location,
      });
    },
    {
      enabled: !!searchTerm,
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length + 1;
      },
    }
  );

  useEffect(() => {
    if (!data) return;
    setProductsCount(data.pages[0].data.data.count);
    setPaginatedProducts(data);
    refetchRelevantCategories();
    refetchHighlightedProduct();
  }, [data]);

  useEffect(() => {
    if (!params) return;
    const searchTermInUrl = params.get("term");
    if (searchTermInUrl) {
      dispatch(setSearchTerm(searchTermInUrl));
    }
  }, [params]);

  const search = (term: string) => {
    if (term === "") return;

    if (term === searchTerm) {
      queryClient.invalidateQueries({ queryKey: ["search"] });
      return;
    }
    dispatch(setSearchTerm(term));
    router.push(`/search?term=${encodeURIComponent(term)}`);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        search,
        paginatedProducts,
        fetchNextPage,
        productsCount,
        relevantCategories: relevantCategories?.data?.data,
        isLoading,
        highlightedProduct: highlightedProduct?.data?.data,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  return useContext(SearchContext);
}

export default SearchContextProvider;
