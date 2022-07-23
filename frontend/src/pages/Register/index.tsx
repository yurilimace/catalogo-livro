import React from "react";
import {
  LoginFormContainer,
  LoginPageContainer,
  LoginFormInput,
} from "../Login/styled";
import { FaBookReader } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CreateUserForm, UserDTO } from "../../types/User";
import { RequiredFieldWarning } from "../../components/RequiredFieldWarning";
import { UseSignInForm } from "./hooks/useSignInForm";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "não bate"),
});

export const SignUpPage = () => {
  const { register, submit, errors, loading } = UseSignInForm();

  return (
    <LoginPageContainer>
      <div>
        <FaBookReader size={200} color={"#f6f7fc"} />
      </div>
      <div>
        <LoginFormContainer onSubmit={submit}>
          <LoginFormContainer.Group>
            <LoginFormContainer.Label> Nome </LoginFormContainer.Label>
            <LoginFormInput
              {...register("firstName")}
              placeholder="Digite o Nome"
              hasErrors={errors.firstName}
            />
            {errors.firstName && (
              <RequiredFieldWarning message={errors.firstName.message} />
            )}
          </LoginFormContainer.Group>
          <LoginFormContainer.Group>
            <LoginFormContainer.Label> Sobrenome </LoginFormContainer.Label>
            <LoginFormInput
              {...register("lastName")}
              placeholder="Digite o Nome"
              hasErrors={errors.lastName}
            />
            {errors.lastName && (
              <RequiredFieldWarning message={errors.lastName.message} />
            )}
          </LoginFormContainer.Group>
          <LoginFormContainer.Group>
            <LoginFormContainer.Label> E-mail </LoginFormContainer.Label>
            <LoginFormInput
              {...register("email")}
              placeholder="Digite o email"
              hasErrors={errors.email}
            />
            {errors.email && (
              <RequiredFieldWarning message={errors.email.message} />
            )}
          </LoginFormContainer.Group>
          <LoginFormContainer.Group>
            <LoginFormContainer.Label> Senha </LoginFormContainer.Label>
            <LoginFormInput
              {...register("password")}
              type="password"
              placeholder="Digite o Nome"
              hasErrors={errors.password}
            />
            {errors.password && (
              <RequiredFieldWarning message={errors.password?.message} />
            )}
          </LoginFormContainer.Group>
          <LoginFormContainer.Group>
            <LoginFormContainer.Label>Confirmar senha</LoginFormContainer.Label>
            <LoginFormInput
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirme a senha"
              hasErrors={errors.confirmPassword}
            />
            {errors.confirmPassword && (
              <RequiredFieldWarning message={errors.confirmPassword?.message} />
            )}
          </LoginFormContainer.Group>
          <Button disabled={loading} variant="primary" type="submit">
            {!loading ? "Submit" : "Carregando"}
          </Button>
        </LoginFormContainer>
      </div>
    </LoginPageContainer>
  );
};
