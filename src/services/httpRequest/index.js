import axios from 'axios';

const VITE_BASE_URL = "https://food-delivery-api-n6as.onrender.com"
const request = axios.create({ baseURL: VITE_BASE_URL + '/v1/' });


request.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  return config;
});

export default request;
 