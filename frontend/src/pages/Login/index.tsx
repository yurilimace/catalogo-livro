import React from "react";
import { LoginPageContainer, LoginFormContainer } from "./styled";
import { FaBookReader } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BaseServiceURL } from "../../service/config";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAuthenticateState } from "../../store/UserAuthenticate/userAuthenticate.atom";
export const Login = () => {
  const [userToken, setUserToken] = useRecoilState(userAuthenticateState);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

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
      </div>
    </LoginPageContainer>
  );
};
