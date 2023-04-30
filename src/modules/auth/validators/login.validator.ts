import * as Yup from "yup";

const loginValidator = Yup.object({
  email: Yup.string().email("Email Inválido.").required("Preencha esse campo."),
  password: Yup.string().required("Preencha esse campo."),
});

export default loginValidator;
