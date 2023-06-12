type TApiMovieDetail = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieDetail = {
  id: number;
  title: string;
  overview: string;
  image?: string;
  genres: string[];
  releaseYear: string;
  voteAverage?: number;
  voteCount?: number;
  popularity?: number;
  genresNames: string;
  tagline?: string;
  productionCompanies: string;
};

export const formatMovieDetail = (movie: TApiMovieDetail): MovieDetail => {
  return {
    id: movie.id,
    title: movie.title,
    image: movie.poster_path
      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
      : undefined,
    releaseYear: movie.release_date,
    voteAverage: Number(movie.vote_average.toFixed(2)),
    voteCount: movie.vote_count,
    popularity: movie.popularity,
    overview: movie.overview,
    genres: movie.genres.map((genre) => genre.name),
    tagline: movie.tagline,
    genresNames: movie.genres.map((genre) => genre.name).join(" / "),
    productionCompanies: movie.production_companies
      .map((companie) => companie.name)
      .join(" - "),
  };
};
