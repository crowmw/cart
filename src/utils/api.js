import axios from "axios";

const apiUrl = "http://localhost:3001/";

const config = {
  baseURL: apiUrl
};

const api = axios.create(config);

export default api;
