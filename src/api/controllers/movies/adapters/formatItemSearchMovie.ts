export type TMovieSearchItem = {
  id: number;
  posterPath: string | undefined;
  title: string;
};
export type TSearchMovieData = TMovieSearchItem[];

export const formatSearhMovieItem = (data: any) => {
  const ApiData: TSearchMovieData = data.results;
  const formatedMovies = ApiData.map((item: any) => {
    const formatedData: TMovieSearchItem = {
      id: item?.id,
      posterPath: item?.poster_path
        ? `https://image.tmdb.org/t/p/w500/${item?.poster_path}`
        : undefined,
      title: item?.title,
    };
    return formatedData;
  });
  return formatedMovies;
};
