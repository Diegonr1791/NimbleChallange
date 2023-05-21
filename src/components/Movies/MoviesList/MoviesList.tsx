import { FETCH_ALL_MOVIES } from "@/api/constantsApi";
import { TMovieData } from "@/api/controllers/movies/adapters/formatMoviesForList";
import { getDiscoverMovies } from "@/api/controllers/movies/getDiscoverMovies";
import CardMovie from "@/components/Card/CardMovie";
import Loading from "@/components/Loading";
import { TMovieListFilters } from "@/types";
import { getYear } from "@/utils/date";
import { Center, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

type MoviesListProps = {
  filters: TMovieListFilters;
  onMovieClick?: (id: number) => void;
};

const MoviesList = ({ filters, onMovieClick = () => {} }: MoviesListProps) => {
  const {
    data,
    isLoading,
    hasNextPage = false,
    fetchNextPage,
  } = useInfiniteQuery(
    [FETCH_ALL_MOVIES, { ...filters, page: filters.page || 1 }],
    getDiscoverMovies,
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );
  const movies = data?.pages?.flatMap((page) => page.results) || [];

  if (isLoading) return <Loading />;
  if (!movies.length)
    return (
      <Center>
        <Heading color="white">No items found</Heading>
      </Center>
    );
  console.log({ filters });

  return (
    <InfiniteScroll
      dataLength={movies?.length}
      hasMore={hasNextPage}
      loader={<Spinner />}
      next={() => fetchNextPage()}
      style={{ textAlign: "center", color: "white" }}
    >
      <SimpleGrid
        minChildWidth={{
          base: "180px",
          sm: "130px",
          md: "150px",
          lg: "180px",
          xl: "180px",
        }}
        spacing="10px"
        mx={3}
      >
        {movies.map((movie, index) => {
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
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default MoviesList;
