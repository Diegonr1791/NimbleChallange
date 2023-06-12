import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import ItemInput from "../ItemInput";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getSearchMovies from "@/api/controllers/movies/getSearchMovies";
import { FETCH_SEARCH_MOVIES } from "@/api/constantsApi";
import ItemInputList from "../ItemInputList";
import { originalColors } from "@/theme/palette";
import useNavigateToMovieDetails from "@/hooks/movies/useNavigateToMovieDetails";
import { TMovieSearchItem } from "@/api/controllers/movies/adapters/formatItemSearchMovie";

interface SearchInputProps {
  containerProps?: React.ComponentProps<typeof HStack>;
  inputProps?: React.ComponentProps<typeof Input>;
}

const SearchInput = ({
  containerProps = {},
  inputProps = {
    placeholder: "Search",
    backgroundColor: "white",
    borderRadius: "3px",
  },
}: SearchInputProps) => {
  const navigateToDetails = useNavigateToMovieDetails();
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);
  const [queryText, setQueryText] = useState("");
  const handleChange = () => {
    return setQueryText(inputRef.current?.value || "");
  };
  const { data, isLoading, fetchStatus } = useQuery(
    [FETCH_SEARCH_MOVIES, { searchText: queryText }],
    getSearchMovies,
    {
      enabled: !!queryText,
    }
  );

  const onMovieCLick = (movie: TMovieSearchItem) => {
    setQueryText("");
    navigateToDetails(movie.id);
    queryClient.removeQueries([FETCH_SEARCH_MOVIES, { exact: true }]);
  };

  return (
    <VStack {...containerProps} w="100%" position="relative">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          {...inputProps}
          ref={inputRef}
          type="text"
          onChange={handleChange}
          value={queryText}
        />
      </InputGroup>
      <Box position="absolute" top={10} left={0} w="100%" zIndex={1}>
        {!isLoading && data && (
          <ItemInputList moviesList={data} onItemPress={onMovieCLick} />
        )}
        {queryText && !data?.length && !isLoading && (
          <Box bg="white" opacity={0.9} p={2}>
            <Center>
              <Text>No results</Text>
            </Center>
          </Box>
        )}
        {fetchStatus !== "idle" && isLoading && (
          <Box bg="white" opacity={0.9} p={2}>
            <Center>
              <Spinner color={originalColors.violet} />
            </Center>
          </Box>
        )}
      </Box>
    </VStack>
  );
};

export default SearchInput;
