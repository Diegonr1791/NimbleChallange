import {
  TMovieSearchItem,
  TSearchMovieData,
} from "@/api/controllers/movies/adapters/formatItemSearchMovie";
import ItemInput from "./ItemInput";
import { Box, Center } from "@chakra-ui/react";
import useNavigateToMovieDetails from "@/hooks/movies/useNavigateToMovieDetails";

type TMovieList = {
  moviesList: TSearchMovieData;
  onItemPress: (movie: TMovieSearchItem) => void;
};

const ItemInputList = ({ moviesList, onItemPress }: TMovieList) => {
  return (
    <Box bg="white" opacity={0.9}>
      {moviesList.length > 0 &&
        moviesList.map((movie, index) => {
          return (
            <ItemInput
              key={index}
              title={movie.title}
              image={movie.posterPath}
              handleMovieDetails={() => onItemPress(movie)}
            />
          );
        })}
    </Box>
  );
};

export default ItemInputList;
