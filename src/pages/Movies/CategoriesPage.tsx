import FilterBar from "@/components/FilterBar/FilterBar";
import MoviesList from "@/components/Movies/MoviesList/MoviesList";
import useNavigateToMovieDetails from "@/hooks/movies/useNavigateToMovieDetails";
import { Box, Flex } from "@chakra-ui/react";

const CategoriesPage = () => {
  const navigateToDetails = useNavigateToMovieDetails();
  return (
    <Flex
      flexDirection={{
        base: "column",
        sm: "row-reverse",
        md: "row-reverse",
        lg: "column",
        xl: "column",
      }}
      flex={1}
    >
      <FilterBar />
      <Box w="100%" mt={4}>
        <MoviesList onMovieClick={navigateToDetails} />
      </Box>
    </Flex>
  );
};

export default CategoriesPage;
