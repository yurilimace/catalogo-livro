import React from "react";
import { useForm } from "react-hook-form";
import { CreateUserForm, UserDTO } from "../../../types/User";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpFormSchema } from "../../../schemas/User/userSchemas";
import { toast } from "react-toastify";
import { BaseServiceURL } from "../../../service/config";
import { useNavigate } from "react-router-dom";

export const UseSignInForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserForm>({
    mode: "onBlur",
    resolver: yupResolver(SignUpFormSchema),
  });

  const [requestLoading, setRequestLoading] = React.useState(false);

  const submitForm = async (data: CreateUserForm) => {
    setRequestLoading(true);
    const { firstName, lastName, email, password } = data;
    const userFormDTO: UserDTO = { firstName, lastName, email, password };

    try {
      const response = await BaseServiceURL.post("/user/create", userFormDTO);

      if (response.status === 201) {
        toast.success("cadastro efetuado com sucesso", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          onClose: () => {
            setRequestLoading(false);
            navigate("/login");
          },
        });
      }
    } catch (err: any) {
      toast.error(err.response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        onClose: () => {
          setRequestLoading(false);
        },
      });
    }
  };

  return {
    register: register,
    submit: handleSubmit(submitForm),
    errors: errors,
    loading: requestLoading,
  };
};
