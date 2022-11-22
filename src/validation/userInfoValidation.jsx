import * as yup from "yup";

const userValidationSchema = yup.object().shape({
  name: yup.string().max(20).required("Campo obrigatório."),
  adress: yup.string().required("Campo obrigatório."),
  postal: yup
    .string()
    .required("Campo obrigatório.")
    .min(8, "CEP inválido")
    .max(8, "CEP inválido"),
  city: yup.string().required("Campo obrigatório."),
});

export default userValidationSchema;
