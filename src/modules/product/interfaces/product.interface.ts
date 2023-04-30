export type ProductInterface = {
  id: number;
  name: string;
  description: string;
  sku: string;
  image: string;
  price: number;
  priceUpdatedAt: string | Date;
  supplierId: number;
  productCategoryId: number;
  active?: boolean;
};
