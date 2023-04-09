import { TApiData } from "@/api/controllers/movies/adapters/formatPopularsMovies";
import getPopulars from "@/api/controllers/movies/getPopulars";
import CardPopulars from "@/components/Card/CardPopulars";
import { Flex } from "@chakra-ui/layout";
import { useEffect, useState } from "react";

const HomeMovies = () => {
  const [movies, setMovies] = useState<TApiData>([]);

  useEffect(() => {
    const getpopularMovies = async () => {
      const popularsMovies = await getPopulars();
      console.log(popularsMovies);
      setMovies(popularsMovies);
    };
    getpopularMovies();
  }, []);

  const movie1 = movies[0];
  console.log(movie1);
  return (
    <Flex flex={1}>
      <CardPopulars
        idMovie={movie1.id}
        title={movie1.title}
        year={movie1.year}
        description={movie1.overview}
        banner={movie1.posterPath}
      />
    </Flex>
  );
};

export default HomeMovies;
