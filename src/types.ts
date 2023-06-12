export type TMovieListFilters = {
  page?: number;
  with_genres?: string;
  primary_release_year?: string;
  "vote_average.lte"?: number;
  search?: string;
};
