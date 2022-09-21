import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import jwtDecode from "jwt-decode";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { AuthFormSchema } from "../../../schemas/Auth/authSchema";
import { BaseServiceURL } from "../../../service/config";
import { userAuthenticateState } from "../../../store/UserAuthenticate/userAuthenticate.atom";
import { AuthUserForm, token } from "../../../types/Authenticate";

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthUserForm>({
    resolver: yupResolver(AuthFormSchema),
  });
  const [userToken, setUserToken] = useRecoilState(userAuthenticateState);

  const Login = async (data: AuthUserForm) => {
    try {
      const responseData = await BaseServiceURL.post<{ token: string }>(
        "/auth/login",
        data
      );

      const decodedToken = jwtDecode<token>(responseData.data.token);
      localStorage.setItem("token", responseData.data.token);
      setUserToken({
        token: responseData.data.token,
        profile: decodedToken.data.profileName,
      });
      return responseData;
    } catch (err: any) {
      if (err.response.data.statusCode === 401) {
        setError("password", { type: "custom", message: "senha errada" });
      }
      toast.error(err.response.data.message);
    }
  };

  return {
    register,
    Submit: handleSubmit(Login),
    errors,
  };
};
