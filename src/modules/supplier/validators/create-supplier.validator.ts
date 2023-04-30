import * as Yup from "yup";

const createSupplierValidator = Yup.object({
  companyName: Yup.string().required("Preencha esse campo.").max(255),
  tradingName: Yup.string().required("Preencha esse campo.").max(255),
  cnpj: Yup.string()
    .required("Preencha esse campo.")
    .length(14, "O CNPJ deve ter exatamente 14 caracteres."),
  email: Yup.string().email("Email Inválido.").required("Preencha esse campo."),
  phoneNumber: Yup.string().required("Preencha esse campo."),
  mobileNumber: Yup.string().required("Preencha esse campo."),
  street: Yup.string().required("Preencha esse campo."),
  number: Yup.string().required("Preencha esse campo."),
  neighborhood: Yup.string().required("Preencha esse campo."),
  city: Yup.string().required("Preencha esse campo."),
  state: Yup.string().required("Preencha esse campo."),
  zipCode: Yup.string().required("Preencha esse campo."),
  segment: Yup.string().required("Preencha esse campo."),
  website: Yup.string().url("Link Inválido"),
  description: Yup.string().required("Preencha esse campo."),
  logo: Yup.string(),
});

export default createSupplierValidator;
