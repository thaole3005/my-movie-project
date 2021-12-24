import axios from "axios";
import queryString from "query-string";

export const GROUP_ID = 'GP01';

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NjU0NzIwMDAwMCIsIm5iZiI6MTYyMDkyNTIwMCwiZXhwIjoxNjU2Njk0ODAwfQ.6o2C_IS8e7HlB9dUZ9eFRYOb2ST9LjIIbn4fO_SS1Qc";
const ACCESSTOKEN = localStorage.getItem("accessToken");

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "content-type": "application/json",
    timeout: 1000,
    TokenCybersoft: TOKEN_CYBERSOFT,
    Authorization: `Bearer ${ACCESSTOKEN}`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data && response.config.method === "get") {
      const total = Number(response.headers["x-total-count"]);
      return {
        total: total,
        data: response.data,
      };
    }
    if (response && response.data && response.config.method === "post") {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
