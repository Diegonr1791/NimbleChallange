import { API_MOVIE, THEMOVIEDB_APIKEY } from "@/constants/constants";

const GENRE_DEFAULT_ERROR = "Error fetching genres list";

type Genre = {
  id: number;
  name: string;
};

export const getMoviesGenres = async () => {
  try {
    const response = await fetch(
      `${API_MOVIE}/3/genre/movie/list?api_key=${THEMOVIEDB_APIKEY}&language=en-US`
    );

    if (!response.ok) throw new Error(GENRE_DEFAULT_ERROR);

    const data = await response.json();

    return data?.genres as Genre[];
  } catch (error) {
    throw error;
  }
};
