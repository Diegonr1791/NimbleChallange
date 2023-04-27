import { FETCH_DETAIL_MOVIE } from "@/api/constantsApi";
import { MovieDetail } from "@/api/controllers/movies/adapters/formatMovieDetail";
import { getMovieDetails } from "@/api/controllers/movies/getMovieDetails";
import CardMovie from "@/components/Card/CardMovie";
import ErrorApiView from "@/components/ErrorApiView/ErrorApiView";
import Loading from "@/components/Loading";
import DetailsMovie from "@/components/Movies/DetailsMovie/DetailsMovie";
import SimilarMoviesList from "@/components/Movies/SimilarMoviesList/SimilarMoviesList";
import useNavigateToMovieDetails from "@/hooks/movies/useNavigateToMovieDetails";
import { getYear } from "@/utils/date";
import { Flex, Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const navigateToDetails = useNavigateToMovieDetails();
  const {
    data: detailMovie,
    isLoading,
    error,
    refetch,
  } = useQuery([FETCH_DETAIL_MOVIE, { id }], getMovieDetails);

  if (!id) return <Navigate to="/" />;
  if (isLoading) return <Loading />;
  if (error || !detailMovie) return <ErrorApiView onRetry={refetch} />;

  return (
    <Flex flex={1}>
      <Flex
        w="1300px"
        maxW="1300px"
        margin="0px auto"
        flexDir={{ base: "column", sm: "row", md: "row", xl: "row" }}
        justifyContent={{
          base: "unset",
          sm: "center",
          md: "center",
          lg: "center",
          xl: "space-around",
        }}
        alignItems={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "center",
          xl: "unset",
        }}
        gap={{ xl: "2", base: "5" }}
        py="10"
        flexWrap="wrap"
      >
        <Grid
          w={{ base: "300px", sm: "30%", md: "30%", xl: "32%" }}
          h={{ xl: "70%" }}
        >
          <CardMovie image={detailMovie?.image} />
        </Grid>
        <Flex
          w={{ base: "100%" }}
          maxW={{ base: "100%", sm: "50%", lg: "50%", xl: "40%" }}
          pl={{ base: 3 }}
        >
          <DetailsMovie
            title={detailMovie.title}
            releaseYear={getYear(detailMovie.releaseYear)}
            genresNames={detailMovie.genresNames}
            voteCount={detailMovie.voteCount}
            voteAverage={detailMovie.voteAverage}
            popularity={detailMovie.popularity}
            productionCompanies={detailMovie.productionCompanies}
            overview={detailMovie.overview}
          />
        </Flex>
        <Flex
          w={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "15%" }}
          maxW={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "15%" }}
        >
          <SimilarMoviesList
            id={detailMovie.id}
            onMovieClick={navigateToDetails}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DetailsPage;
