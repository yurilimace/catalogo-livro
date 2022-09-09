import jwtDecode from "jwt-decode";
import React from "react";

import { BaseServiceURL } from "../../../service/config";

import { token } from "../../../types/Authenticate";

export const useCollection = () => {
  const [collection, setCollection] = React.useState<any>([]);

  const getUserCollectionByUserId = async (userId: string) => {
    const response = await BaseServiceURL.get(`/collection/${userId}`);
    setCollection(response.data);
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode<token>(token);
      getUserCollectionByUserId(decodedToken.data.id);
    }
  }, []);

  return {
    collection,
  };
};
