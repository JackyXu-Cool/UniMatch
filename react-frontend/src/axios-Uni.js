import axios from "axios";

const axiosUni = axios.create({
  baseURL: "Access-Control-Allow-Origin: https://localhost:5000/schools/byid",
});

export default axiosUni;
