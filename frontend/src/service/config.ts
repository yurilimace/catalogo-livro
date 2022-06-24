import axios from "axios";

export const BaseServiceURL = axios.create({
  baseURL: "http://localhost:3000",
});
