import FilterBar from "@/components/FilterBar/FilterBar";
import { Flex, Grid, Text } from "@chakra-ui/react";

const CategoriesPage = () => {
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
      <Flex bgColor="grey" h="100%" w="100%">
        <Text color="white">Movies</Text>
      </Flex>
    </Flex>
  );
};

export default CategoriesPage;
