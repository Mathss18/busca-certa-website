import api from "../../../services/api";
import { CreateSupplierCategoryInterface } from "../interfaces/create-supplier-category.interface";
import { UpdateSupplierCategoryInterface } from "../interfaces/update-supplier-category.interface";

const supplierCategoryService = {
  getAll: () => api.get("suppliers-category"),
  getOne: (id: number) => api.get(`suppliers-category/${id}`),
  create: (data: CreateSupplierCategoryInterface) =>
    api.post("suppliers-category", data),
  update: (id: number, data: UpdateSupplierCategoryInterface) =>
    api.put(`suppliers-category/${id}`, data),
  delete: (id: number) => api.delete(`suppliers-category/${id}`),
};

export default supplierCategoryService;
