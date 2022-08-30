import React from "react";
import { BaseServiceURL } from "../../../service/config";
import { toast } from "react-toastify";
import { TitleDTO } from "../../../types/Title";

export const UseTitleCRUD = () => {
  const [titleList, setTitleList] = React.useState([]);
  const [requestLoading, setRequestLoading] = React.useState(false);

  async function GetAllTitles() {
    const response = await BaseServiceURL.get("/title");
    return response.data;
  }

  const teste = async () => {
    console.log("aqui");
    const list = await GetAllTitles();
    setTitleList(list);
  };

  const CreateTitle = async (data: TitleDTO, dialogController: () => void) => {
    setRequestLoading(true);
    const response = await BaseServiceURL.post("title", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 201) {
      toast.success("titulo criado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        onClose: () => {
          setRequestLoading(false);
          dialogController();
          teste();
        },
      });
    }
  };

  const DeleteTitle = async (titleId: string, dialogController: () => void) => {
    setRequestLoading(true);
    const response = await BaseServiceURL.delete(`/title/${titleId}`);
    if (response.status === 200) {
      toast.success("titulo excluido com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        onClose: () => {
          setRequestLoading(false);
          dialogController();
          teste();
        },
      });
    }
  };

  React.useEffect(() => {
    teste();
  }, []);

  return {
    getAllTitles: GetAllTitles,
    list: titleList,
    CreateTitle: CreateTitle,
    DeleteTitle: DeleteTitle,
    loadingRequest: requestLoading,
  };
};
