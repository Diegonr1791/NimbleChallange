import { Grid, Stack, Text } from "@chakra-ui/react";
import { useCallback } from "react";
import Loading from "@/components/Loading";
import CardMovie from "@/components/Card/CardMovie";
import { TMovieData } from "@/api/controllers/movies/adapters/formatMoviesForList";
import { getSimilarMovies } from "@/api/controllers/movies/getSimilars";
import { useQuery } from "@tanstack/react-query";
import ErrorApiView from "@/components/ErrorApiView/ErrorApiView";
import { FETCH_SIMILAR_MOVIES } from "@/api/constantsApi";

interface SimilarMoviesListProps {
  id: number;
  onMovieClick?: (id: number) => void;
}

const SimilarMoviesList = ({
  id,
  onMovieClick = () => {},
}: SimilarMoviesListProps) => {
  const {
    data: similarMovies,
    isLoading,
    error,
    refetch,
  } = useQuery([FETCH_SIMILAR_MOVIES, { id }], getSimilarMovies);

  if (isLoading) return <Loading />;
  if (error || !similarMovies) return <ErrorApiView onRetry={refetch} />;

  return (
    <Stack w="100%" textAlign="center">
      <Text color="white" fontWeight="bold" fontSize={{ base: "25" }}>
        Similar Movies
      </Text>
      <Grid
        gridTemplateColumns={{
          base: "repeat(3, 1fr)",
          sm: "repeat(6, 1fr)",
          md: "repeat(6, 1fr)",
          lg: "repeat(6, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={3}
      >
        {similarMovies.map((movie: TMovieData) => {
          return (
            <CardMovie
              key={movie.id}
              image={movie.posterPath}
              onClick={() => onMovieClick(movie.id)}
            />
          );
        })}
      </Grid>
    </Stack>
  );
};

export default SimilarMoviesList;
