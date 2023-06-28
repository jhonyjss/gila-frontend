import axios, { AxiosInstance } from "axios";

const httpRequest: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEAPI_URL,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

export default httpRequest;
