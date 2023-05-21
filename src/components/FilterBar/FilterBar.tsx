import { Button, Flex } from "@chakra-ui/react";
import FilterItemList from "../FilterItemList/FilterItemList";
import { originalColors } from "@/theme/palette";
import GenreFilterList from "../Filters/GenreFilterList";
import RatingFilterList from "../Filters/RatingFilterList";
import YearInput from "../YearInput/YearInput";
import { TMovieListFilters } from "@/types";
import { TFiltersChangeValue } from "@/hooks/useFilters";
import { log } from "console";

interface FilterBarProps {
  activeFilters: TMovieListFilters;
  addUniqueValueToFilter: ({ name, value }: TFiltersChangeValue) => void;
  addMultipleValueToFilter: ({ name, value }: TFiltersChangeValue) => void;
  clearFilters: () => void;
}

const FilterBar = ({
  addMultipleValueToFilter,
  addUniqueValueToFilter,
  clearFilters,
  activeFilters,
}: FilterBarProps) => {
  const { with_genres = "", primary_release_year = "" } = activeFilters;
  const activeRating = activeFilters["vote_average.lte"];

  return (
    <Flex
      flexDirection={{
        base: "row",
        sm: "column",
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
      pb={{ base: 3, sm: 0 }}
      w={{ base: "auto", sm: "50%", lg: "auto", xl: "auto" }}
    >
      <Flex justifyContent="center">
        <GenreFilterList
          activeGenres={with_genres}
          handleGenreClick={(id: number) => {
            addMultipleValueToFilter({ name: "with_genres", value: id });
          }}
        />
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: "row", sm: "column", lg: "row" }}
        pr={{ base: 0, md: 2, lg: 0 }}
        pl={{ base: 2, sm: 0 }}
        pt={2}
        w="100%"
        gap={{ base: 3, sm: 0, md: 3 }}
      >
        <FilterItemList filterName="Rating">
          <RatingFilterList
            defaultValue={activeRating}
            onConfirm={(rating) =>
              addUniqueValueToFilter({
                name: "vote_average.lte",
                value: rating,
              })
            }
          />
        </FilterItemList>
        <FilterItemList filterName="Year">
          <YearInput
            defaultValue={primary_release_year}
            onConfirm={(year) =>
              addUniqueValueToFilter({
                name: "primary_release_year",
                value: year,
              })
            }
          />
        </FilterItemList>
        <Flex pt={{ base: 6, sm: 0, lg: 6, xl: 6 }} justifyContent="center">
          <Button variant="solid" color={originalColors.violet}>
            Search
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FilterBar;
