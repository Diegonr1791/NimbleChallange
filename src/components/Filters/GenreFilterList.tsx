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
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../Loading";

type List = {
  id: number;
  name: string;
};

const GenreFilterList = () => {
  const [nameItem, setNameItem] = useState("Select");
  const handleClick = (item: List) => {
    setNameItem(item.name);
    //setear filtro
  };
  const { data: genres, isLoading } = useQuery(
    [FETCH_GENRE_LIST_KEY],
    getMoviesGenres
  );

  if (!genres) return <Loading />;

  return (
    <Accordion allowToggle>
      <AccordionItem
        borderStyle="none"
        bgColor={originalColors.greyItems}
        textDecoration="none"
        borderRadius={5}
      >
        <AccordionButton color={originalColors.white}>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            color={originalColors.white}
            opacity={0.7}
            fontWeight="normal"
            minW="100px"
          >
            {nameItem}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel
          py={0}
          bgColor={originalColors.greyItems}
          color={originalColors.white}
          borderColor={originalColors.white}
          borderWidth={0.7}
          opacity={0.7}
          px={0}
          maxH="200px"
          overflow="auto"
          scrollBehavior="smooth"
        >
          {genres.map((genre, index) => {
            return (
              <Box
                key={index}
                onClick={() => handleClick(genre)}
                px={1}
                _hover={{ backgroundColor: originalColors.lightblue }}
              >
                {genre.name}
              </Box>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default GenreFilterList;
