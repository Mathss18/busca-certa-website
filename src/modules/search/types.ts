export type RelevantCategory = {
  id: number;
  name: string;
  image: string;
  parentId: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

type ProductVariationOption = {
  variationOption: {
    id: number;
    name: string;
    active: boolean;
  };
};

export type ProductVariation = {
  variation: {
    id: number;
    name: string;
    active: boolean;
  };
  productVariationOptions: ProductVariationOption[];
};

export type SearchedProduct = {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  brand: string;
  supplier: {
    companyName: string;
    logo: string;
  };
  productsVariations: ProductVariation[];
};

export type SelectedVariationsType = {
  variationId: number;
  optionId: number;
};
