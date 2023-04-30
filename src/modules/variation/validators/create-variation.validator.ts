import * as Yup from "yup";

const createVariationValidator = Yup.object({
  name: Yup.string().required("Preencha esse campo").max(255),
  active: Yup.boolean(),
});

export default createVariationValidator;
