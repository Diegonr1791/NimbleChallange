import MultiCarousel from "@/components/Carousel/MultiCarousel";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import getPopulars from "@/api/controllers/movies/getPopulars";
import PopularMoviesList from "@/components/Movies/PopularMoviesList/PopularMoviesList";
import { getRandomElements } from "@/utils/getRandomElements";
import useNavigateToDetails from "@/hooks/movies/useNavigateToMovieDetails";
import { TApiData } from "@/api/controllers/movies/adapters/formatMoviesForList";

const HomeMovies = () => {
  const [movies, setMovies] = useState<TApiData>([]);
  const navigateToDetails = useNavigateToDetails();

  useEffect(() => {
    const getpopularMovies = async () => {
      const popularMovies = await getPopulars();
      setMovies(popularMovies);
    };
    getpopularMovies();
  }, []);

  return (
    <Box flex={1}>
      <MultiCarousel
        data={getRandomElements(movies, 4)}
        onClickDetail={navigateToDetails}
      />
      <Box p={4}>
        <PopularMoviesList movies={movies} onMovieClick={navigateToDetails} />
      </Box>
    </Box>
  );
};

export default HomeMovies;