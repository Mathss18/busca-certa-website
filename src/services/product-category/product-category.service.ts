import api from "@/services/api";
import { GeolocationServiceInterfaceOutput } from "../geolocation/geolocation-service.interface";

type FindRelevantsParams = {
  quantity: number;
  location?: GeolocationServiceInterfaceOutput | null;
};
type FindRelevantsByTermParams = {
  quantity: number;
  term: string;
  location?: GeolocationServiceInterfaceOutput | null;
};

const productCategoryService = {
  findRelevants: (params: FindRelevantsParams) =>
    api.get("products-category/find-relevants", {
      params,
    }),

  findRelevantsByTerm: (params: FindRelevantsByTermParams) =>
    api.get("products-category/find-relevants-by-term", {
      params,
    }),
};

export default productCategoryService;
