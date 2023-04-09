import getPoulars from "../../services/movies/getPopulars";
import { Flex } from "@chakra-ui/layout";

const HomeMovies = () => {
  getPoulars();
  return (
    <Flex bgColor="aliceblue" flex={1}>
      HomeMovies
    </Flex>
  );
};

export default HomeMovies;
