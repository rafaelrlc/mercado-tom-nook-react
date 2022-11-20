import * as yup from "yup";

const userValidationForm = yup.object().shape({
  name: yup.string().max(20).required("Name is required."),
  adress: yup.string().required(),
  postal: yup.string().min(8).max(8).required(),
  city: yup.string().required(),
});

export default userValidationForm;
