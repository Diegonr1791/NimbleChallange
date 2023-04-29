import { QueryKey } from "@tanstack/react-query";
import { formatMoviesForList } from "./adapters/formatMoviesForList";
import { last } from "lodash";
import { API_MOVIE, THEMOVIEDB_APIKEY } from "@/constants/constants";

const DEFAULT_MOVIES_ERROR_MESSAGE = "Error fetching discovery movies";

/* type TMoviesFilters = {
  page?: number;
  genres?: string;
};
 */
export const getDiscoverMovies = async ({
  pageParam = 2,
}: {
  pageParam?: number;
}) => {
  try {
    //const filters = last(queryKey) as TMoviesFilters;
    /*     const { page } = last(queryKey) as TMoviesFilters;
    console.log({ page }); */
    let url = `${API_MOVIE}/3/discover/movie?api_key=${THEMOVIEDB_APIKEY}&language=en-US&sort_by=popularity.desc&page=${pageParam}`;

    /*     Object.keys(filters).forEach((property) => {
      const key = property as keyof TMoviesFilters;
      if (filters[key]) {
        url = url.concat(`&${key}=${filters[key]}`);
      }
    }); */

    const response = await fetch(url);

    if (!response.ok) throw new Error(DEFAULT_MOVIES_ERROR_MESSAGE);

    const data = await response.json();
    const movies = formatMoviesForList(data);
    return { nextPage: data.page + 1, results: movies };
  } catch (error) {
    throw error;
  }
};
