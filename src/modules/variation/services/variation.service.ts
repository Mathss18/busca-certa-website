import api from "../../../services/api";
import { CreateVariationInterface } from "../interfaces/create-variation.interface";
import { UpdateVariationInterface } from "../interfaces/update-variation.interface";

const variationService = {
  getAll: () => api.get("/variations"),
  getOne: (id: number) => api.get(`/variations/${id}`),
  create: (data: CreateVariationInterface) => api.post("/variations", data),
  update: (id: number, data: UpdateVariationInterface) =>
    api.put(`/variations/${id}`, data),
  delete: (id: number) => api.delete(`/variations/${id}`),
};

export default variationService;
