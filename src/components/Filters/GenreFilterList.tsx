import { FETCH_GENRE_LIST_KEY } from "@/api/constantsApi";
import { getMoviesGenres } from "@/api/controllers/movies/getMoviesGenres";
import { originalColors } from "@/theme/palette";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../Loading";
import Chip from "../Chip/Chip";
import { CheckIcon } from "@chakra-ui/icons";

export interface GenreListProps {
  activeGenres: string;
  handleGenreClick: (id: number) => void;
}

const GenreFilterList = ({
  activeGenres = "",
  handleGenreClick = () => {},
}: GenreListProps) => {
  const { data: genres, isLoading } = useQuery(
    [FETCH_GENRE_LIST_KEY],
    getMoviesGenres
  );

  if (!genres || isLoading) return <Loading />;

  return (
    <HStack flexWrap="wrap" gap={2} justifyContent="center">
      {genres.map((genre, index) => {
        const isActive = activeGenres.split(",").includes(genre.id.toString());

        return (
          <Chip
            key={index}
            item={genre.name}
            icon={CheckIcon}
            size="lg"
            isActive={isActive}
            onClick={() => handleGenreClick(genre.id)}
          />
        );
      })}
    </HStack>
  );
};

export default GenreFilterList;
