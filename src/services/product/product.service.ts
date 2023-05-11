import api from "@/services/api";

type SearchParams = {
  term: string;
  page: number;
  pageSize: number;
};

const productService = {
  searchByTerm: (data: SearchParams) =>
    api.post("products/search-by-term", data),
  getOne: (id: string) => api.get(`products/${id}`),
};

export default productService;
