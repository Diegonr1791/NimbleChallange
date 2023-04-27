import MultiCarousel from "@/components/Carousel/MultiCarousel";
import { Box } from "@chakra-ui/react";
import getPopulars from "@/api/controllers/movies/getPopulars";
import PopularMoviesList from "@/components/Movies/PopularMoviesList/PopularMoviesList";
import useNavigateToDetails from "@/hooks/movies/useNavigateToMovieDetails";
import { useQuery } from "@tanstack/react-query";
import { FETCH_POPULAR_MOVIES } from "@/api/constantsApi";

const HomeMovies = () => {
  const navigateToDetails = useNavigateToDetails();

  return (
    <Box flex={1}>
      <MultiCarousel onClickDetail={navigateToDetails} />
      <Box p={4}>
        <PopularMoviesList onMovieClick={navigateToDetails} />
      </Box>
    </Box>
  );
};

export default HomeMovies;
