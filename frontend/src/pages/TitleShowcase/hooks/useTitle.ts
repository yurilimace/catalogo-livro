import React from "react";
import { BaseServiceURL } from "../../../service/config";

export const Usetitle = () => {
  const [titleList, setTitleList] = React.useState([]);

  async function GetAllTitles() {
    const response = await BaseServiceURL.get("/title");
    return response.data;
  }

  const teste = async () => {
    const list = await GetAllTitles();
    setTitleList(list);
  };

  React.useEffect(() => {
    teste();
  }, []);

  return {
    getAllTitles: GetAllTitles(),
    list: titleList,
  };
};
