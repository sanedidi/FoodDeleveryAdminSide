import axios from "axios";

const request = axios.create({
  baseURL: "https://food-delivery-api-n6as.onrender.com/v1",
});

request.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("acces_token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
