import api from "../../../services/api";
import { CreateProductVariationOptionInterface } from "../interfaces/create-product-variation-option.interface";
import { UpdateProductCategoryOptionInterface } from "../interfaces/update-product-variation-option.interface";

const productVariationOptionService = {
  getAll: () => api.get("/product-variation-options"),
  getOne: (id: number) => api.get(`/product-variation-options/${id}`),
  create: (data: CreateProductVariationOptionInterface) =>
    api.post("/product-variation-options", data),
  update: (id: number, data: UpdateProductCategoryOptionInterface) =>
    api.put(`/product-variation-options/${id}`, data),
  delete: (id: number) => api.delete(`/product-variation-options/${id}`),
};

export default productVariationOptionService;
