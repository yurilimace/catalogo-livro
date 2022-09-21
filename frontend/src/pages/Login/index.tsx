import React from "react";
import {
  LoginPageContainer,
  LoginFormContainer,
  SignupSection,
  SignupRouterButton,
  LoginFormInput,
} from "./styled";
import { FaBookReader } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import { useLoginForm } from "./hooks/useLoginForm";
import { RequiredFieldWarning } from "../../components/RequiredFieldWarning";

export const Login = () => {
  const navigate = useNavigate();
  const { register, Submit, errors } = useLoginForm();

  return (
    <LoginPageContainer>
      <div>
        <FaBookReader size={200} color={"#f6f7fc"} />
      </div>
      <div>
        <LoginFormContainer onSubmit={Submit}>
          <LoginFormContainer.Group>
            <LoginFormContainer.Label> E-mail </LoginFormContainer.Label>
            <LoginFormInput
              {...register("email")}
              disabled={false}
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
              disabled={false}
              placeholder="Digite o Nome"
              hasErrors={errors.password}
            />
            {errors.password && (
              <RequiredFieldWarning message={errors.password?.message} />
            )}
          </LoginFormContainer.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </LoginFormContainer>
        <SignupSection>
          <div>
            <span> Ainda não tem cadastro?</span>
          </div>
          <div>
            <SignupRouterButton onClick={() => navigate("/register")}>
              {" "}
              Cadastre-se{" "}
            </SignupRouterButton>
          </div>
        </SignupSection>
      </div>
    </LoginPageContainer>
  );
};
