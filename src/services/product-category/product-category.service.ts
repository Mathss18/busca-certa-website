import api from "@/services/api";

type FindRelevantsParams = {
  quantity: number;
};
type FindRelevantsByTermParams = {
  quantity: number;
  term: string;
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
