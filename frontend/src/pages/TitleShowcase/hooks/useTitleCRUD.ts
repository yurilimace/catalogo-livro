import React from "react";
import { BaseServiceURL } from "../../../service/config";
import { toast } from "react-toastify";
import {
  TitleDTO,
  TitleRequestResponse,
  TitleShowcase,
} from "../../../types/Title";
import { AuthUser, token } from "../../../types/Authenticate";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { userAuthenticateState } from "../../../store/UserAuthenticate/userAuthenticate.atom";
import { RecoilState, useRecoilValue } from "recoil";

export const UseTitleCRUD = () => {
  const titleShowCaseDefaultValue: TitleShowcase = {
    id: "",
    name: "",
    author: "",
    publisher: "",
    coverURL: "",
  };
  const navigate = useNavigate();
  const [titleList, setTitleList] = React.useState<TitleShowcase[]>([]);
  const [selectedTitle, setSelectedTitle] = React.useState<TitleShowcase>(
    titleShowCaseDefaultValue
  );

  const userToken = useRecoilValue(userAuthenticateState);

  const [requestLoading, setRequestLoading] = React.useState(false);

  async function GetAllTitles() {
    const response = await BaseServiceURL.get<TitleDTO[]>("/title");
    if (response.status === 200) {
      setTitleList(response.data);
    }
  }

  const UpdateTitle = async (data: TitleDTO, dialogController: () => void) => {
    try {
      setRequestLoading(true);
      const response = await BaseServiceURL.put<TitleRequestResponse>(
        "title",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userToken?.token}`,
          },
        }
      );

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        onClose: () => {
          setRequestLoading(false);
          ResetSelectedTitleToDefaultValue();
          dialogController();
          GetAllTitles();
        },
      });
    } catch (err: any) {
      const ErrorMessage =
        err.response.data.message === "Unauthorized"
          ? "Usuário não possui perfil para fazer a operação, ou acesso expirou"
          : err.response.data.message;
      toast.error(ErrorMessage, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        onClose: () => {
          setRequestLoading(false);
          ResetSelectedTitleToDefaultValue();
          dialogController();
          GetAllTitles();
        },
      });
    }
  };

  const CreateTitle = async (data: TitleDTO, dialogController: () => void) => {
    try {
      setRequestLoading(true);
      delete data.id;
      delete data.coverURL;
      const response = await BaseServiceURL.post<TitleRequestResponse>(
        "title",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userToken?.token}`,
          },
        }
      );
      if (response.status === 201) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          onClose: () => {
            setRequestLoading(false);
            ResetSelectedTitleToDefaultValue();
            dialogController();
            GetAllTitles();
          },
        });
      }
    } catch (err: any) {
      const ErrorMessage =
        err.response.data.message === "Unauthorized"
          ? "Usuário não possui perfil para fazer a operação, ou acesso expirou"
          : err.response.data.message;
      toast.error(ErrorMessage, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        onClose: () => {
          setRequestLoading(false);
          ResetSelectedTitleToDefaultValue();
          dialogController();
          GetAllTitles();
        },
      });
    }
  };

  const DeleteTitle = async (dialogController: () => void) => {
    try {
      setRequestLoading(true);
      const response = await BaseServiceURL.delete<TitleRequestResponse>(
        `/title/${selectedTitle.id}`,
        {
          headers: {
            Authorization: `Bearer ${userToken?.token}`,
          },
        }
      );

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        onClose: () => {
          setRequestLoading(false);
          ResetSelectedTitleToDefaultValue();
          dialogController();
          GetAllTitles();
        },
      });
    } catch (err: any) {
      const ErrorMessage =
        err.response.data.message === "Unauthorized"
          ? "Usuário não possui perfil para fazer a operação, ou acesso expirou"
          : err.response.data.message;
      toast.error(ErrorMessage, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        onClose: () => {
          setRequestLoading(false);
          ResetSelectedTitleToDefaultValue();
          dialogController();
          GetAllTitles();
        },
      });
    }
  };

  const AddTitleToCollection = async (titleId: string) => {
    setRequestLoading(true);
    const userToken = localStorage.getItem("token");
    if (userToken) {
      const decodeToken = jwtDecode<token>(userToken);
      const userId = decodeToken.data.id;
      const response = await BaseServiceURL.post("/collection", {
        userId: userId,
        titleId: titleId,
      });
      if (response.status === 201) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          onClose: () => {
            setRequestLoading(false);
            navigate("/menu1");
          },
        });
      }
    }
  };

  const SubmitTitleForm = async (
    data: TitleDTO,
    dialogController: () => void
  ) => {
    if (selectedTitle.id === "") {
      await CreateTitle(data, dialogController);
    } else {
      await UpdateTitle(data, dialogController);
    }
  };

  const ResetSelectedTitleToDefaultValue = () => {
    setSelectedTitle(titleShowCaseDefaultValue);
  };

  React.useEffect(() => {
    GetAllTitles();
  }, []);

  return {
    getAllTitles: GetAllTitles,
    CreateTitle: CreateTitle,
    DeleteTitle: DeleteTitle,
    AddTitleToCollection: AddTitleToCollection,
    Submit: SubmitTitleForm,
    ResetSelectedTitleToDefaultValue: ResetSelectedTitleToDefaultValue,
    loadingRequest: requestLoading,
    list: titleList,
    selectedTitle: selectedTitle,
    setSelectedTitle: setSelectedTitle,
  };
};
function userRecoilValue(userAuthenticateState: RecoilState<AuthUser>) {
  throw new Error("Function not implemented.");
}
