export type EstimateModalContextType = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  selectedProduct: SelectedProduct | null;
  setSelectedProduct: (value: SelectedProduct) => void;
  selectedVariations: SelectedVariations[];
  setSelectedVariations: (value: SelectedVariations[]) => void;
  toggleSelectedVariation: (variationId: number, variationOptionId: number) => void;
  submitEstimate: () => void;
  form: any;
  count: number;
  minimumToEstimate: number;
  setCount: (e: number) => void;
  isBeingSubmited: boolean;
};

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
  minimumToEstimate: number;
  brand: string;
  supplier: Supplier;
  productsVariations: ProductsVariation[];
};

export type SelectedVariations = {
  variationId: number;
  variationOptionId: number;
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
