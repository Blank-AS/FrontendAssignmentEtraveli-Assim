import axios from "axios";

const moviesListApi = axios.create({
  baseURL: "https://swapi.dev/api/",
  headers: {
    "Content-type": "application/json"
  }
});

export default moviesListApi;