import { API_MOVIE, THEMOVIEDB_APIKEY } from "@/constants/constants";
import { formatMoviesForList } from "./adapters/formatMoviesForList";

const popularMoviesApi = `${API_MOVIE}/3/movie/popular?api_key=${THEMOVIEDB_APIKEY}`;
const headers = {
  "Content-Type": "application/json",
};
const getPopulars = async () => {
  const response = await fetch(popularMoviesApi, { headers });
  if (response.ok) {
    const data = await response.json();
    const formatedData = formatMoviesForList(data);

    return formatedData;
  }
  return [];
};
export default getPopulars;
