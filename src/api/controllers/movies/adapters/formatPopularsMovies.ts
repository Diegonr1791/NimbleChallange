import { getYear } from "@/utils/date";

type ApiItemData = {
  id: number;
  adult: string;
  backdropPath: string;
  originalLenguage: string;
  originalTitle: string;
  popularity: number;
  posterPath: string;
  bannerPath:string,
  releaseDate: string;
  title: string;
  voteAverage: number;
  voteCount: number;
  overview: string;
};
export type TApiData = ApiItemData[];

export const formatPopularsMovies = (data: any) => {
  const ApiData: TApiData = data.results;
  const formatedPolularMovies = ApiData.map((item: any) => {
    const formatedData: ApiItemData = {
      id: item?.id,
      adult: item?.adult,
      backdropPath: item?.backdrop_path,
      originalLenguage: item?.original_language,
      originalTitle: item?.original_title,
      popularity: item?.popularity,
      posterPath: `https://image.tmdb.org/t/p/w500${item?.poster_path}`,
      bannerPath:`https://image.tmdb.org/t/p/w1280${item?.poster_path}`,
      releaseDate: item?.release_date,
      title: item?.title,
      voteAverage: item?.vote_average,
      voteCount: item?.vote_count,
      overview: item?.overview,
    };
    return formatedData;
  });
  return formatedPolularMovies;
};
