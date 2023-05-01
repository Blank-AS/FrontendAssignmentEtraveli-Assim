import axios from "axios";

const movieRatingsApi = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  headers: {
    'Content-type': 'application/json',
  },
  params: {
    apikey: 'b9a5e69d',
  },
});

export default movieRatingsApi;