import axios from "axios";

const ingealApi = axios.create({
  baseURL: "http://localhost:3500/v1/api",
});

ingealApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "Content-Type": "application/json",
    //"Authorization": `Bearer ${localStorage.getItem("token")}` ,
    
  };
  return config;
});

export default ingealApi;
