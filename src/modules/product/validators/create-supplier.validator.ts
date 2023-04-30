import * as Yup from "yup";

const createProductValidator = Yup.object({
  name: Yup.string().required("Preencha esse campo").max(255),
  description: Yup.string().required("Preencha esse campo").max(255),
  sku: Yup.string().required("Preencha esse campo").max(255),
  image: Yup.string().max(255),
  price: Yup.number().required("Preencha esse campo"),
  supplierId: Yup.number().required("Preencha esse campo"),
  productCategoryId: Yup.number().required("Preencha esse campo"),
  active: Yup.boolean(),
});

export default createProductValidator;
