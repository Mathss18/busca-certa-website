import api from "../../../services/api";
import { CreateProductInterface } from "../interfaces/create-product.interface";
import { UpdateProductInterface } from "../interfaces/update-product.interface";

const productService = {
  getAll: () => api.get("/products"),
  getOne: (id: number) => api.get(`/products/${id}`),
  create: (data: CreateProductInterface) => api.post("/products", data),
  update: (id: number, data: UpdateProductInterface) =>
    api.put(`/products/${id}`, data),
  delete: (id: number) => api.delete(`/products/${id}`),
  getOneProductWithVariations: (id: number) =>
    api.get(`/products/${id}/variations`),
};

export default productService;
