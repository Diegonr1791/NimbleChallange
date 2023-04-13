import { TApiData } from "@/api/controllers/movies/adapters/formatPopularsMovies";
import CardMovie from "../Card/CardMovie";
import { getYear } from "@/utils/date";
import { Grid, SimpleGrid } from "@chakra-ui/react";

type PopularMoviesListProps = {
  movies: TApiData;
  onMovieClick?: (id: number) => void;
};

const PopularMoviesList = ({
  movies,
  onMovieClick = () => {},
}: PopularMoviesListProps) => {
  return (
    <SimpleGrid minChildWidth="180px" spacing="20px">
      {movies.map((movie, index) => {
        return (
          <CardMovie
            key={index}
            onClick={() => onMovieClick(movie.id)}
            title={movie.title}
            year={getYear(movie.releaseDate)}
            image={movie.posterPath}
            voteAverage={movie.voteAverage}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default PopularMoviesList;
