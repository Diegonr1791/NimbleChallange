import { getYear } from "@/utils/date";

export type TMovieData = {
  id: number;
  adult: string;
  backdropPath: string;
  originalLenguage: string;
  originalTitle: string;
  popularity: number;
  posterPath: string | undefined;
  bannerPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
  voteCount: number;
  overview: string;
};
export type TApiData = TMovieData[];

export const formatMoviesForList = (data: any) => {
  const ApiData: TApiData = data.results;
  const formatedMovies = ApiData.map((item: any) => {
    const formatedData: TMovieData = {
      id: item?.id,
      adult: item?.adult,
      backdropPath: item?.backdrop_path,
      originalLenguage: item?.original_language,
      originalTitle: item?.original_title,
      popularity: item?.popularity,
      posterPath: item?.poster_path
        ? `https://image.tmdb.org/t/p/w500/${item?.poster_path}`
        : undefined,
      bannerPath: `https://image.tmdb.org/t/p/w1280${item?.poster_path}`,
      releaseDate: item?.release_date,
      title: item?.title,
      voteAverage: item?.vote_average,
      voteCount: item?.vote_count,
      overview: item?.overview,
    };
    return formatedData;
  });
  return formatedMovies;
};
