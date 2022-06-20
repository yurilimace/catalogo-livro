import axios from "axios";

export const BaseServiceURL = axios.create({ baseURL: "localhost:3000" });
