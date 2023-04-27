import { originalColors } from "@/theme/palette";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

const FilterItemList = ({
  filterName,
  list,
}: {
  filterName: string;
  list: string[];
}) => {
  const [nameItem, setNameItem] = useState("Select");
  const handleClick = (item: string) => {
    setNameItem(item);
  };

  return (
    <Stack w={{ base: "auto", lg: "15%", xl: "11%" }} m={2}>
      <Box color={originalColors.white} opacity={0.7} pb="1px">
        {filterName}:
      </Box>
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
            overflowY="scroll"
          >
            {list.map((item, index) => {
              return (
                <Box
                  key={index}
                  onClick={() => handleClick(item)}
                  px={1}
                  _hover={{ backgroundColor: originalColors.lightblue }}
                >
                  {item}
                </Box>
              );
            })}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default FilterItemList;
