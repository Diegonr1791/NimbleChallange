import { MovieDetail } from "@/api/controllers/movies/adapters/formatMovieDetail";
import { getMovieDetails } from "@/api/controllers/movies/getMovieDetails";
import CardMovie from "@/components/Card/CardMovie";
import DetailsMovie from "@/components/DetailsMovie/DetailsMovie";
import Loading from "@/components/Loading";
import { originalColors } from "@/theme/palette";
import { getYear } from "@/utils/date";
import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [detailMovie, setDetailMovie] = useState<MovieDetail>();
  useEffect(() => {
    if (id) {
      const getDetailMovie = async (id: string) => {
        const detail = await getMovieDetails(id);
        setDetailMovie(detail);
      };
      getDetailMovie(id);
    }
  }, []);

  if (!id) return <Navigate to="/" />;
  if (!detailMovie) return <Loading />;

  return (
    <Flex flex={1}>
      <Flex
        w="1300px"
        maxW="1300px"
        bgColor="gray.300"
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
          w={{ base: "400px", sm: "30%", md: "30%", xl: "30%" }}
          bgColor="red.200"
        >
          <CardMovie image={detailMovie?.image} />
        </Grid>
        <Flex
          maxW={{ base: "100%", sm: "50%", lg: "50%", xl: "45%" }}
          pl={{ base: 3 }}
          bgColor="red.400"
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
          w={{ base: "100%", xl: "20%" }}
          maxW={{ base: "80%", xl: "20%" }}
          bgColor="red.600"
          alignItems="center"
          flexDirection="column"
        >
          <Heading fontSize={20} color={originalColors.white} pb={4}>
            Overview
          </Heading>
          <Text>{detailMovie.overview}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DetailsPage;
