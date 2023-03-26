import { API_MOVIE, THEMOVIEDB_APIKEY } from "../../constants/constants";

const popularMoviesApi = `${API_MOVIE}/3/movie/popular?api_key=${THEMOVIEDB_APIKEY}`;
const headers = {
  "Content-Type": "application/json",
};

console.log({ popularMoviesApi });
const getPoulars = async () => {
  const response = await fetch(popularMoviesApi, { headers });
  const data = await response.json();
  console.log(data);
};
export default getPoulars;
