import CardMovie from "../../Card/CardMovie";
import { getYear } from "@/utils/date";
import { Grid, SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FETCH_POPULAR_MOVIES } from "@/api/constantsApi";
import getPopulars from "@/api/controllers/movies/getPopulars";
import Loading from "@/components/Loading";
import ErrorApiView from "@/components/ErrorApiView/ErrorApiView";

type PopularMoviesListProps = {
  onMovieClick?: (id: number) => void;
};

const PopularMoviesList = ({
  onMovieClick = () => {},
}: PopularMoviesListProps) => {
  const { data, isLoading, error, refetch } = useQuery(
    [FETCH_POPULAR_MOVIES],
    getPopulars
  );

  if (isLoading) return <Loading />;
  if (!!error) return <ErrorApiView onRetry={refetch} />;

  return (
    <Grid
      gap="20px"
      alignItems={{ base: "center", sm: "normal" }}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
    >
      {data &&
        data.map((movie, index) => {
          return (
            <CardMovie
              key={index}
              onClick={() => onMovieClick(movie.id)}
              title={movie.title}
              year={getYear(movie.releaseDate)}
              image={movie.posterPath}
              voteAverage={movie.voteAverage}
              isFull
            />
          );
        })}
    </Grid>
  );
};

export default PopularMoviesList;
