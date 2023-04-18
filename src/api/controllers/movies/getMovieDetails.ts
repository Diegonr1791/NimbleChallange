import { API_MOVIE, THEMOVIEDB_APIKEY } from "@/constants/constants";
import { formatMovieDetail } from "./adapters/formatMovieDetail";

const DEFAULT_DETAIL_ERROR = "Error getting movie detail";

export const getMovieDetails = async (id: string) => {
  try {
    const response = await fetch(
      `${API_MOVIE}/3/movie/${id}?api_key=${THEMOVIEDB_APIKEY}&language=en-US`
    );

    if (!response.ok) throw new Error(DEFAULT_DETAIL_ERROR);

    const data = await response.json();

    const movieDetail = formatMovieDetail(data);

    return movieDetail;
  } catch (error) {
    throw error;
  }
};
