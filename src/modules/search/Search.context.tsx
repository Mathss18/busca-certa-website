"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { useInfiniteQuery, InfiniteData, useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { RootState } from "@/store/store";
import { setSearchTerm } from "@/slices/searchSlice";
import productService from "@/services/product/product.service";
import { BaseApiResponse } from "@/interfaces/BaseApiResponse.interface";
import productCategoryService from "../../services/product-category/product-category.service";

type SearchContextType = {
  searchTerm: string;
  search: (term: string) => void;
  paginatedProducts:
    | InfiniteData<
        AxiosResponse<
          BaseApiResponse<{ count: number; products: SearchedProduct[] }>
        >
      >
    | undefined;
  fetchNextPage: () => void;
  productsCount: number;
  relevantCategories: any;
  isLoading: boolean;
  isModalOpen: boolean;
  setIsModalOpen: any;
  selectedProduct: any;
  setSelectedProduct: any;
  selectedVariations: SelectedVariationsType[];
  setSelectedVariations: any;
  toggleSelectedVariation: (variationId: number, optionId: number) => void;
};

export type SearchedProduct = {
  description: string;
  image?: string;
  name: string;
  price: number;
  supplier: {
    companyName: string;
    logo: string;
  };
};

export type SelectedVariationsType = {
  variationId: number;
  optionId: number;
};

const SearchContext = createContext({
  searchTerm: "",
  search: () => {},
  paginatedProducts: undefined,
  fetchNextPage: () => {},
  productsCount: 0,
  relevantCategories: [],
  isLoading: false,
  selectedProduct: null,
  setSelectedProduct: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
  selectedVariations: [],
  setSelectedVariations: () => {},
  toggleSelectedVariation: () => {},
} as SearchContextType);

function SearchContextProvider({ children }: { children: React.ReactNode }) {
  const searchTerm = useSelector((state: RootState) => state.searchTerm.term);
  const [paginatedProducts, setPaginatedProducts] =
    useState<InfiniteData<AxiosResponse>>();
  const [productsCount, setProductsCount] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedVariations, setSelectedVariations] = useState<
    SelectedVariationsType[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { data: relevantCategories, refetch: refetchRelevantCategories } =
    useQuery(
      "relevants-categories-by-term",
      () =>
        productCategoryService.findRelevantsByTerm({
          quantity: 5,
          term: searchTerm,
        }),
      {
        enabled: !!searchTerm,
      }
    );

  const { data, fetchNextPage, isLoading } = useInfiniteQuery(
    ["search-by-term", searchTerm],
    ({ pageParam = 1 }) =>
      productService.searchByTerm({
        term: searchTerm,
        page: pageParam,
        pageSize: 8,
      }),
    {
      enabled: !!searchTerm,
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length + 1;
      },
    }
  );

  function toggleSelectedVariation(variationId: number, optionId: number) {
    setSelectedVariations((prevVariations: SelectedVariationsType[]) => {
      // Check if the variation-option pair already exists in the array
      const exists = prevVariations.some(
        (v) => v.variationId === variationId && v.optionId === optionId
      );

      if (exists) {
        // If the variation-option pair already exists, filter it out
        return prevVariations.filter(
          (v) => !(v.variationId === variationId && v.optionId === optionId)
        );
      }
      // If the variation-option pair doesn't exist, add it
      return [
        ...prevVariations,
        {
          variationId,
          optionId,
        },
      ];
    });
  }

  useEffect(() => {
    setSelectedVariations([]);
  }, [selectedProduct]);

  useEffect(() => {
    console.log(selectedVariations);
  }, [selectedVariations]);

  useEffect(() => {
    if (!data) return;
    setProductsCount(data.pages[0].data.data.count);
    setPaginatedProducts(data);
    refetchRelevantCategories();
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
        relevantCategories: relevantCategories?.data.data,
        isLoading,
        selectedProduct,
        setSelectedProduct,
        isModalOpen,
        setIsModalOpen,
        selectedVariations,
        setSelectedVariations,
        toggleSelectedVariation,
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
