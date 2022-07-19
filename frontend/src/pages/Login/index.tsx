import React from "react";
import {
  LoginPageContainer,
  LoginFormContainer,
  SignupSection,
  SignupRouterButton,
} from "./styled";
import { FaBookReader } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { BaseServiceURL } from "../../service/config";

import { useRecoilState } from "recoil";
import { userAuthenticateState } from "../../store/UserAuthenticate/userAuthenticate.atom";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const [userToken, setUserToken] = useRecoilState(userAuthenticateState);
  const { register, handleSubmit } = useForm();

  const teste = async (data: any) => {
    const responseData: any = await BaseServiceURL.post(
      "user/authenticate",
      data
    );

    localStorage.setItem("token", responseData.data.token);
    setUserToken(responseData.data.token);
  };

  return (
    <LoginPageContainer>
      <div>
        <FaBookReader size={200} color={"#f6f7fc"} />
      </div>
      <div>
        <LoginFormContainer onSubmit={handleSubmit(teste)}>
          <LoginFormContainer.Group>
            <LoginFormContainer.Label> Email </LoginFormContainer.Label>
            <LoginFormContainer.Control
              placeholder="Enter email"
              {...register("firstName")}
            />
          </LoginFormContainer.Group>

          <LoginFormContainer.Group>
            <LoginFormContainer.Label> Password </LoginFormContainer.Label>
            <LoginFormContainer.Control
              type="password"
              placeholder="Enter password"
              {...register("password")}
            />
          </LoginFormContainer.Group>

          <Button variant="primary" type="submit">
            Submit
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
