import axios from "axios";

console.log(process.env.REACT_APP_BASE_URL);

export const BaseServiceURL = axios.create({
  baseURL: "http://manga-col.herokuapp.com",
  //process.env.REACT_APP_BASE_URL,
});
