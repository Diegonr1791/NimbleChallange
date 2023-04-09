import { TApiData } from "@/api/controllers/movies/adapters/formatPopularsMovies";
import getPopulars from "@/api/controllers/movies/getPopulars";
import CardPopulars from "@/components/Card/CardPopulars";
import MultiCarousel from "@/components/Carousel/MultiCarousel";
import { Flex } from "@chakra-ui/layout";
import { useEffect, useState } from "react";

const HomeMovies = () => {
  const [movies, setMovies] = useState<TApiData>([]);

  useEffect(() => {
    const getpopularMovies = async () => {
      const popularsMovies = await getPopulars();
      setMovies(popularsMovies);
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
