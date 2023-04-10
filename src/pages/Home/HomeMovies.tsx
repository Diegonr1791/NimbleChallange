import { TApiData } from "@/api/controllers/movies/adapters/formatPopularsMovies";
import MultiCarousel from "@/components/Carousel/MultiCarousel";
import { Flex } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { getFirstPopulars } from "@/api/controllers/movies/getPopulars";

const HomeMovies = () => {
  const [movies, setMovies] = useState<TApiData>([]);

  useEffect(() => {
    const getpopularMovies = async () => {
      const firstPopularsMovies = await getFirstPopulars();
      setMovies(firstPopularsMovies);
    };
    getpopularMovies();
  }, []);

  return (
    <Flex flex={1}>
      <MultiCarousel data={movies} />
    </Flex>
  );
};

export default HomeMovies;
