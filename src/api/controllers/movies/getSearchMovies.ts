import { API_MOVIE, THEMOVIEDB__ACCESS_TOKEN } from "@/constants/constants";
import { formatMoviesForList } from "./adapters/formatMoviesForList";
import { QueryKey } from "@tanstack/react-query";
import { last } from "lodash";
import { formatSearhMovieItem } from "./adapters/formatItemSearchMovie";

const searchMoviesApi = `${API_MOVIE}/3/search/movie`;
const headers = {
  Authorization: `Bearer ${THEMOVIEDB__ACCESS_TOKEN}`,
  "Content-Type": "application/json",
};

type TSearchMovie = {
  searchText: string;
};

const getSearchMovies = async ({ queryKey }: { queryKey: QueryKey }) => {
  try {
    const { searchText } = last(queryKey) as TSearchMovie;
    const url = `${searchMoviesApi}?query=${searchText}`;
    const DEFAULT_DETAIL_ERROR = "Error getting search movie";
    const response = await fetch(url, { headers });

    if (!response.ok) throw new Error(DEFAULT_DETAIL_ERROR);

    const data = await response.json();
    const formatedData = formatSearhMovieItem(data).splice(0, 5);

    return formatedData;
  } catch (error) {
    throw error;
  }
};
export default getSearchMovies;
