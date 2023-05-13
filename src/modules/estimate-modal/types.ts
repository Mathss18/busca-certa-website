type Supplier = {
  companyName: string;
  logo: string;
};

type VariationOption = {
  id: number;
  name: string;
  active: boolean;
};

export type ProductVariationOption = {
  variationOption: VariationOption;
};

type Variation = {
  id: number;
  name: string;
  active: boolean;
};

export type ProductsVariation = {
  variation: Variation;
  productVariationOptions: ProductVariationOption[];
};

export type SelectedProduct = {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  brand: string;
  supplier: Supplier;
  productsVariations: ProductsVariation[];
};

export type SelectedVariations = {
  variationId: number;
  optionId: number;
};

export type EstimateData = {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  companySegment: string;
  file: any;
  message: string;
};
