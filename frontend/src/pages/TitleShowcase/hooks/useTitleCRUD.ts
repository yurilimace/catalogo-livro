import React from "react";
import { BaseServiceURL } from "../../../service/config";
import { toast } from "react-toastify";
import {
  TitleDTO,
  TitleForm,
  TitleRequestResponse,
  TitleShowcase,
} from "../../../types/Title";

export const UseTitleCRUD = () => {
  const titleShowCaseDefaultValue: TitleShowcase = {
    id: "",
    name: "",
    author: "",
    publisher: "",
    coverURL: "",
  };
  const [titleList, setTitleList] = React.useState<TitleShowcase[]>([]);
  const [selectedTitle, setSelectedTitle] = React.useState<TitleShowcase>(
    titleShowCaseDefaultValue
  );
  const [requestLoading, setRequestLoading] = React.useState(false);

  async function GetAllTitles() {
    const response = await BaseServiceURL.get<TitleDTO[]>("/title");
    if (response.status === 200) {
      setTitleList(response.data);
    }
  }

  const CreateTitle = async (data: TitleDTO, dialogController: () => void) => {
    setRequestLoading(true);
    const response = await BaseServiceURL.post<TitleRequestResponse>(
      "title",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
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
  };

  const DeleteTitle = async (dialogController: () => void) => {
    setRequestLoading(true);
    const response = await BaseServiceURL.delete<TitleRequestResponse>(
      `/title/${selectedTitle.id}`
    );
    if (response.status === 200) {
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
    ResetSelectedTitleToDefaultValue: ResetSelectedTitleToDefaultValue,
    loadingRequest: requestLoading,
    list: titleList,
    selectedTitle: selectedTitle,
    setSelectedTitle: setSelectedTitle,
  };
};
