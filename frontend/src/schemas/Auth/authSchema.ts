import * as yup from "yup";

export const AuthFormSchema = yup.object({
  email: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});
