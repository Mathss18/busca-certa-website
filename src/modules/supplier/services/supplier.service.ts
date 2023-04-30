import api from "../../../services/api";
import { CreateSupplierInterface } from "../interfaces/create-supplier.interface";
import { UpdateSupplierInterface } from "../interfaces/update-supplier.interface";

const supplierService = {
  getAll: () => api.get("/suppliers"),
  getOne: (id: number) => api.get(`/suppliers/${id}`),
  create: (data: CreateSupplierInterface) => api.post("/suppliers", data),
  update: (id: number, data: UpdateSupplierInterface) =>
    api.put(`/suppliers/${id}`, data),
  delete: (id: number) => api.delete(`/suppliers/${id}`),
};

export default supplierService;
