import axios from "axios";

const useURLDEPLOYED = process.env.REACT_APP_USE_URL_DEPLOYED;

export const BaseServiceURL = axios.create({
  baseURL:
    useURLDEPLOYED === "true"
      ? process.env.REACT_APP_URL_DEPLOYED
      : process.env.REACT_APP_BASE_URL,
});
