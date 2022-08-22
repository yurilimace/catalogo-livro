import React from "react";
import { BaseServiceURL } from "../../../service/config";

export const UseTitleCRUD = () => {
  const [titleList, setTitleList] = React.useState([]);

  async function GetAllTitles() {
    const response = await BaseServiceURL.get("/title");
    return response.data;
  }

  async function AddNewTitle(title: any) {
    console.log(title, "<------- title");
  }

  const teste = async () => {
    console.log("aqui");
    const list = await GetAllTitles();
    setTitleList(list);
  };

  React.useEffect(() => {
    teste();
  }, []);

  return {
    getAllTitles: GetAllTitles,
    list: titleList,
    AddNewTitle: AddNewTitle,
  };
};
