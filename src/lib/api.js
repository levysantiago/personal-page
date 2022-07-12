import axios from "axios";
const { REACT_APP_SERVER_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_SERVER_URL,
  withCredentials: true,
});

export default api;
