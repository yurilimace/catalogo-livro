import * as yup from "yup";

export const SignUpFormSchema = yup.object({
  firstName: yup.string().required("Campo obrigatório"),
  lastName: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail invalido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "Deve conter ao menos 6 caracteres")
    .matches(/[ !@#$%^&*]/, "Deve conter pelo menos um caracter especial")
    .required("Campo obrigatório"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf(
      [yup.ref("password")],
      "Não corresponde ao que foi digitado no campo senha"
    ),
});
