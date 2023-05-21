import FilterBar from "@/components/FilterBar/FilterBar";
import MoviesList from "@/components/Movies/MoviesList/MoviesList";
import useNavigateToMovieDetails from "@/hooks/movies/useNavigateToMovieDetails";
import useFilters from "@/hooks/useFilters";
import { Box, Flex } from "@chakra-ui/react";

const CategoriesPage = () => {
  const navigateToDetails = useNavigateToMovieDetails();
  const {
    filters,
    filterCount,
    addMultipleValueToFilter,
    addUniqueValueToFilter,
    clearFilters,
  } = useFilters();

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
      <FilterBar
        activeFilters={filters}
        clearFilters={clearFilters}
        addMultipleValueToFilter={addMultipleValueToFilter}
        addUniqueValueToFilter={addUniqueValueToFilter}
      />
      <Box w="100%" mt={4}>
        <MoviesList filters={filters} onMovieClick={navigateToDetails} />
      </Box>
    </Flex>
  );
};

export default CategoriesPage;
