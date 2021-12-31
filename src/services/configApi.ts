import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'http://localhost:3004'
});

export default baseApi;
