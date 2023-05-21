import { originalColors } from "@/theme/palette";
import { Box, Stack } from "@chakra-ui/react";
import { ReactElement } from "react";

const FilterItemList = ({
  filterName,
  children,
}: {
  filterName: string;
  children: ReactElement;
}) => {
  return (
    <Stack w={{ base: "25%", sm: "85%", lg: "15%", xl: "11%" }} m={2} h={20}>
      <Box color={originalColors.white} opacity={0.7} pb="1px">
        {filterName}:
      </Box>
      {children}
    </Stack>
  );
};

export default FilterItemList;
