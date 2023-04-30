import * as Yup from "yup";

const createSupplierCategoryValidator = Yup.object({
  name: Yup.string().required("Preencha esse campo.").max(255),
  parentId: Yup.number(),
});

export default createSupplierCategoryValidator;
