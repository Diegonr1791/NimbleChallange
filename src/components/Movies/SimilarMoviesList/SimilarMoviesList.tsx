import { Stack, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import Loading from "@/components/Loading";
import CardMovie from "@/components/Card/CardMovie";
import {
  TApiData,
  TMovieData,
} from "@/api/controllers/movies/adapters/formatMoviesForList";
import { getSimilarMovies } from "@/api/controllers/movies/getSimilars";
import List from "@/components/List/List";
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

  const renderItem = useCallback(
    (movie: TMovieData) => {
      return (
        <CardMovie
          key={movie.id}
          image={movie.posterPath}
          onClick={() => onMovieClick(movie.id)}
        />
      );
    },
    [onMovieClick]
  );

  if (isLoading) return <Loading />;
  if (error || !similarMovies) return <ErrorApiView onRetry={refetch} />;

  return (
    <Stack w="100%" textAlign="center">
      <Text color="white" fontWeight="bold" fontSize={{ base: "25" }}>
        Similar Movies
      </Text>
      <List
        items={similarMovies}
        renderItem={renderItem}
        columns={{ base: 6, sm: 6, md: 6, lg: 6, xl: 2 }}
      />
    </Stack>
  );
};

export default SimilarMoviesList;
