import api from "@/services/api";
import { GeolocationServiceInterfaceOutput } from "../geolocation/geolocation-service.interface";

type SearchParams = {
  term: string;
  page: number;
  pageSize: number;
  location?: GeolocationServiceInterfaceOutput | null;
};

type HighlightParams = {
  term: string;
  location?: GeolocationServiceInterfaceOutput | null;
};

const productService = {
  searchByTerm: (data: SearchParams) => api.post("products/search-by-term", data),
  highlighByTerm: (data: HighlightParams) => api.post("products/highlight-by-term", data),
  getOne: (id: string) => api.get(`products/${id}`),
};

export default productService;
