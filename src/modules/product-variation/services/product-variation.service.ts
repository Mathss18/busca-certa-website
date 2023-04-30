import api from "../../../services/api";
import { UpdateProductCategoryInterface } from "../../product-category/interfaces/update-product-category.interface";
import { CreateProductVariationInterface } from "../interfaces/create-product-variation.interface";

const productVariationService = {
  getAll: () => api.get("/product-variations"),
  getOne: (id: number) => api.get(`/product-variations/${id}`),
  create: (data: CreateProductVariationInterface) =>
    api.post("/product-variations", data),
  update: (id: number, data: UpdateProductCategoryInterface) =>
    api.put(`/product-variations/${id}`, data),
  delete: (id: number) => api.delete(`/product-variations/${id}`),
};

export default productVariationService;
