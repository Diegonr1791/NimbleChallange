import { Box, Button, Flex } from "@chakra-ui/react";
import FilterItemList from "../FilterItemList/FilterItemList";
import { originalColors } from "@/theme/palette";

const FilterBar = () => {
  return (
    <Flex
      flexDirection={{
        base: "row",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
      }}
      flexWrap="wrap"
      justifyContent={{
        base: "center",
        sm: "flex-start",
        md: "flex-start",
        lg: "center",
        xl: "center",
      }}
      pt={5}
      w={{ base: "auto", sm: "35%", lg: "auto", xl: "auto" }}
    >
      <FilterItemList
        filterName="Genre"
        list={["Aventura", "Terror", "Accion"]}
      />
      <FilterItemList
        filterName="Rating"
        list={["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]}
      />
      <FilterItemList
        filterName="Quality"
        list={["480p", "720p", "1080p", "2160p", "3D", "4K"]}
      />
      <FilterItemList
        filterName="Year"
        list={[
          "2023",
          "2022",
          "2021",
          "2020",
          "2019",
          "2015-2018",
          "2010-2014",
          "2000-2009",
          "1990-1999",
          "1980-1989",
          "1950-1979",
          "1900-1949",
        ]}
      />
      <Flex alignItems="flex-end" justifyContent={{ base: "center" }} mb={2}>
        <Button variant="solid" color={originalColors.violet}>
          Search
        </Button>
      </Flex>
    </Flex>
  );
};

export default FilterBar;
