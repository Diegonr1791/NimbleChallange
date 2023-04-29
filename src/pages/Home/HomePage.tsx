import MultiCarousel from "@/components/Carousel/MultiCarousel";
import { Box } from "@chakra-ui/react";
import PopularMoviesList from "@/components/Movies/PopularMoviesList/PopularMoviesList";
import useNavigateToDetails from "@/hooks/movies/useNavigateToMovieDetails";

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
