import axios from "axios";

const api = "http://localhost:3000/api/v1/user"



const axiosConfig = axios.create({
  baseURL: api,
  withCredentials: true,
});

export default axiosConfig
