import api from "../../../services/api";
import { CreateVariationOptionInterface } from "../interfaces/create-variation-option.interface";
import { UpdateVariationOptionInterface } from "../interfaces/update-variation-option.interface";

const variationOptionsService = {
  getAll: () => api.get("/variation-options"),
  getOne: (id: number) => api.get(`/variation-options/${id}`),
  create: (data: CreateVariationOptionInterface) =>
    api.post("/variation-options", data),
  update: (id: number, data: UpdateVariationOptionInterface) =>
    api.put(`/variation-options/${id}`, data),
  delete: (id: number) => api.delete(`/variation-options/${id}`),
};

export default variationOptionsService;
