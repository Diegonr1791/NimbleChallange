import { API_MOVIE, THEMOVIEDB_APIKEY } from "@/constants/constants";
import { formatPopularsMovies } from "./adapters/formatPopularsMovies";

const popularMoviesApi = `${API_MOVIE}/3/movie/popular?api_key=${THEMOVIEDB_APIKEY}`;
const headers = {
  "Content-Type": "application/json",
};

export const getAllPopulars = async () => {
  const response = await fetch(popularMoviesApi, { headers });
  if (response.ok) {
    const data = await response.json();
    const formatedData = formatPopularsMovies(data);

    return formatedData;
  }
  return [];
};

export const getFirstPopulars = async () => {
  const response = await fetch(popularMoviesApi, { headers });
  if (response.ok) {
    const data = await response.json();
    const formatedData = formatPopularsMovies(data).slice(0, 4);

    return formatedData;
  }
  return [];
};
