import { API_MOVIE, THEMOVIEDB_APIKEY } from "@/constants/constants";
import { formatMoviesForList } from "./adapters/formatMoviesForList";
import { QueryKey } from "@tanstack/react-query";
import { last } from "lodash";

type TSimilarMovie = {
  id?: number;
};

const DEFAULT_SIMILAR_MOVIES_LIST_ERROR = "Error getting similar movies";

export const getSimilarMovies = async ({
  queryKey,
}: {
  queryKey: QueryKey;
}) => {
  try {
    const { id } = last(queryKey) as TSimilarMovie;
    const response = await fetch(
      `${API_MOVIE}/3/movie/${id}/similar?api_key=${THEMOVIEDB_APIKEY}&language=en-US&page=1`
    );

    if (!response.ok) throw new Error(DEFAULT_SIMILAR_MOVIES_LIST_ERROR);

    const data = await response.json();
    const similarMovies = formatMoviesForList(data).splice(0, 6);
    return similarMovies;
  } catch (error) {
    throw error;
  }
};
