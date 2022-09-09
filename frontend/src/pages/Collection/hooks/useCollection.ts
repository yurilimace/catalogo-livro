import jwtDecode from "jwt-decode";
import React from "react";
import { toast } from "react-toastify";

import { BaseServiceURL } from "../../../service/config";

import { token } from "../../../types/Authenticate";

export const useCollection = () => {
  const [collection, setCollection] = React.useState<any>([]);

  const getUserCollectionByUserId = async (userId: string) => {
    const response = await BaseServiceURL.get(`/collection/${userId}`);
    setCollection(response.data);
  };

  const deleteCollection = async (collectionId: string) => {
    const response = await BaseServiceURL.delete(`/collection/${collectionId}`);
    console.log(response);
    if (response.status == 200) {
      toast.success("Titulo deletado da coleção com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        onClose: () => {
          const token = localStorage.getItem("token");
          if (token) {
            const decodedToken = jwtDecode<token>(token);
            getUserCollectionByUserId(decodedToken.data.id);
          }
        },
      });
    }
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
    DeleteCollection: deleteCollection,
  };
};
