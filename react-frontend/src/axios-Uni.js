import axios from "axios";

const axiosUni = axios.create({
  baseURL: "http://127.0.0.1:5000//schools/byid",
});

export default axiosUni;
