import api from "@/services/api";

export type CreateEsimateProductVariation = {
  variationId: number;
  variationOptionId: number;
};

export type CreateEtimateParams = {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientCompanyName: string;
  clientSegment?: string | null;
  clientFile?: string | null;
  clientMessage?: string | null;
  productId: number;
  quantity: number;
  estimateProductVariations?: CreateEsimateProductVariation[];
};

const estimateService = {
  create: (data: CreateEtimateParams) => api.post("estimates/create", data),
};

export default estimateService;
