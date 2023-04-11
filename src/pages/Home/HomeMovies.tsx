import { TApiData } from "@/api/controllers/movies/adapters/formatPopularsMovies";
import MultiCarousel from "@/components/Carousel/MultiCarousel";
import { Grid, Flex, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import getPopulars from "@/api/controllers/movies/getPopulars";
import PopularMoviesList from "@/components/PopularMoviesList/PopularMoviesList";
import { getRandomElements } from "@/utils/getRandomElements";

const HomeMovies = () => {
  const [movies, setMovies] = useState<TApiData>([]);

  useEffect(() => {
    const getpopularMovies = async () => {
      const popularMovies = await getPopulars();
      setMovies(popularMovies);
    };
    getpopularMovies();
  }, []);

  return (
    <Box flex={1}>
      <MultiCarousel data={getRandomElements(movies, 4)} />
      <Box p={4}>
        <PopularMoviesList movies={movies} />
      </Box>
    </Box>
  );
};

export default HomeMovies;
