import * as yup from "yup";

const userCreateSchema = yup.object().shape({
  name: yup
    .string()
    .max(20, "O nome deve conter no máximo 20 letras.")
    .required("Campo obrigatório."),
  email: yup
    .string()
    .email("Insira um e-mail válido.")
    .required("Campo obrigatório."),
  password: yup
    .string()
    .min(8, "A senha deve conter ao menos 8 dígitos.")
    .required("Campo obrigatório."),
  //passwordConfirmation: yup.string().required("Password confirmation is required"),
});

export default userCreateSchema;
