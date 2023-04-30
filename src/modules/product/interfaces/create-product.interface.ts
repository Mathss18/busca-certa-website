export type CreateProductInterface = {
  name: string;
  description: string;
  sku: string;
  image?: string | null;
  price: number;
  priceUpdatedAt?: string | Date;
  supplierId: number;
  productCategoryId: number;
  active?: boolean;
};
