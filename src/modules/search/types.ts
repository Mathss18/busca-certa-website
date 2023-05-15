import { AxiosResponse } from "axios";
import { InfiniteData } from "react-query";
import { BaseApiResponse } from "../../interfaces/BaseApiResponse.interface";

export type SearchContextType = {
  searchTerm: string;
  search: (term: string) => void;
  paginatedProducts: InfiniteData<AxiosResponse<BaseApiResponse<{ count: number; products: SearchedProduct[] }>>> | undefined;
  fetchNextPage: () => void;
  productsCount: number;
  relevantCategories: RelevantCategory[];
  isLoading: boolean;
  highlightedProduct: any;
};

export type RelevantCategory = {
  id: number;
  name: string;
  image: string;
  parentId: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

type ProductVariationOption = {
  variationOption: {
    id: number;
    name: string;
    active: boolean;
  };
};

export type ProductVariation = {
  variation: {
    id: number;
    name: string;
    active: boolean;
  };
  productVariationOptions: ProductVariationOption[];
};

export type SearchedProduct = {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  brand: string;
  minimumToEstimate: number;
  supplier: {
    companyName: string;
    logo: string;
  };
  productsVariations: ProductVariation[];
};

export type SelectedVariationsType = {
  variationId: number;
  variationOptionId: number;
};
