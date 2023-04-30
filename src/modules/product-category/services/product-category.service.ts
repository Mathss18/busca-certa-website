import api from "../../../services/api";
import { CreateProductCategoryInterface } from "../interfaces/create-product-category.interface";
import { UpdateProductCategoryInterface } from "../interfaces/update-product-category.interface";

const productCategoryCategoryService = {
  getAll: () => api.get("products-category"),
  getOne: (id: number) => api.get(`products-category/${id}`),
  create: (data: CreateProductCategoryInterface) =>
    api.post("products-category", data),
  update: (id: number, data: UpdateProductCategoryInterface) =>
    api.put(`products-category/${id}`, data),
  delete: (id: number) => api.delete(`products-category/${id}`),
};

export default productCategoryCategoryService;
