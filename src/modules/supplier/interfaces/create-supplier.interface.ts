export type CreateSupplierInterface = {
  companyName: string;
  tradingName: string;
  cnpj: string;
  email: string;
  phoneNumber: string;
  mobileNumber: string;
  segment: string;
  website?: string;
  description: string;
  logo?: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  active?: boolean;
};
