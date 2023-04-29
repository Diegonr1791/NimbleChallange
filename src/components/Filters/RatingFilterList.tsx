import { originalColors } from "@/theme/palette";
import { StarIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { RATING_LIST } from "./utils";

type List = {
  id: number;
  name: string;
};

const RatingFilterList = () => {
  const [nameItem, setNameItem] = useState("Select");
  const handleClick = (item: List) => {
    setNameItem(item.name);
    //setear filtro
  };
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
            <Flex alignItems="center">
              {nameItem}
              {nameItem != "Select" && (
                <StarIcon color="yellow.400" boxSize={3} />
              )}
            </Flex>
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
          {RATING_LIST.map((rating, index) => {
            return (
              <Box
                key={index}
                onClick={() => handleClick(rating)}
                px={1}
                _hover={{ backgroundColor: originalColors.lightblue }}
              >
                <Flex alignItems="center">
                  <Text pr={1}>{rating.name}</Text>
                  <StarIcon color="yellow.400" boxSize={3} />
                </Flex>
              </Box>
            );
          }).reverse()}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default RatingFilterList;
